"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";

import {
  type ConsentPreferences,
  type ConsentRecord,
  parseConsent,
  readConsentSnapshot,
  subscribeToConsent,
  writeConsent,
} from "@/lib/consent";

type ConsentContextValue = {
  /** `undefined` enquanto o navegador não foi lido; `null` sem escolha feita. */
  consent: ConsentRecord | null | undefined;
  acceptAll: () => void;
  rejectAll: () => void;
  save: (preferences: ConsentPreferences) => void;
  preferencesOpen: boolean;
  setPreferencesOpen: (open: boolean) => void;
  /** Vira `true` na primeira abertura: o diálogo só é baixado a partir daí. */
  preferencesRequested: boolean;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

const getServerSnapshot = () => undefined;

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const raw = useSyncExternalStore(
    subscribeToConsent,
    readConsentSnapshot,
    getServerSnapshot,
  );
  const consent = useMemo(
    () => (raw === undefined ? undefined : parseConsent(raw)),
    [raw],
  );
  const [preferencesOpen, setOpen] = useState(false);
  const [preferencesRequested, setPreferencesRequested] = useState(false);

  const setPreferencesOpen = useCallback((open: boolean) => {
    if (open) setPreferencesRequested(true);
    setOpen(open);
  }, []);

  const save = useCallback((preferences: ConsentPreferences) => {
    writeConsent(preferences);
    setOpen(false);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      acceptAll: () => save({ analytics: true, marketing: true }),
      rejectAll: () => save({ analytics: false, marketing: false }),
      save,
      preferencesOpen,
      setPreferencesOpen,
      preferencesRequested,
    }),
    [consent, preferencesOpen, preferencesRequested, save, setPreferencesOpen],
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent precisa estar dentro de <ConsentProvider>.");
  }
  return context;
}
