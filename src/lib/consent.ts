export type ConsentPreferences = {
  /** Medição de audiência (ex.: Google Analytics, Vercel Analytics). */
  analytics: boolean;
  /** Campanhas e pixels de redes sociais (ex.: Meta Pixel). */
  marketing: boolean;
};

export type ConsentRecord = ConsentPreferences & {
  version: number;
  decidedAt: string;
};

/** Suba a versão quando mudar as categorias: a escolha é pedida de novo. */
export const CONSENT_VERSION = 1;
const STORAGE_KEY = "cookie-consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 6 meses

const listeners = new Set<() => void>();

/** Cópia em memória para quando o navegador bloqueia o localStorage. */
let memorySnapshot: string | null = null;

export function subscribeToConsent(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export function readConsentSnapshot(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? memorySnapshot;
  } catch {
    return memorySnapshot;
  }
}

export function parseConsent(raw: string | null): ConsentRecord | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as Partial<ConsentRecord>;
    if (data.version !== CONSENT_VERSION) return null;
    return {
      version: CONSENT_VERSION,
      analytics: Boolean(data.analytics),
      marketing: Boolean(data.marketing),
      decidedAt: String(data.decidedAt ?? ""),
    };
  } catch {
    return null;
  }
}

export function writeConsent(preferences: ConsentPreferences) {
  const record: ConsentRecord = {
    ...preferences,
    version: CONSENT_VERSION,
    decidedAt: new Date().toISOString(),
  };
  const raw = JSON.stringify(record);
  memorySnapshot = raw;
  try {
    window.localStorage.setItem(STORAGE_KEY, raw);
  } catch {
    // Sem acesso ao armazenamento: a escolha vale só nesta visita.
  }
  const value = `analytics:${Number(record.analytics)},marketing:${Number(record.marketing)}`;
  document.cookie = `${STORAGE_KEY}=${encodeURIComponent(value)}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
  listeners.forEach((listener) => listener());
  return record;
}
