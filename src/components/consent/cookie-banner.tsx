"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { AnimatePresence, m } from "motion/react";

import { useConsent } from "@/components/consent/consent-provider";
import { Button } from "@/components/ui/button";

// O diálogo (Radix Dialog) só é baixado quando alguém abre as preferências.
const CookiePreferences = dynamic(
  () =>
    import("@/components/consent/cookie-preferences").then(
      (mod) => mod.CookiePreferences,
    ),
  { ssr: false },
);

export function CookieBanner() {
  const { consent, acceptAll, rejectAll, setPreferencesOpen, preferencesRequested } =
    useConsent();
  const visible = consent === null;

  return (
    <>
      <AnimatePresence>
        {visible && (
          // A entrada é em CSS (.banner-enter) porque o banner monta logo depois
          // da hidratação; o Motion cuida só da saída.
          <m.section
            key="cookie-banner"
            aria-label="Aviso de cookies"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="banner-enter fixed inset-x-2 bottom-2 z-[70] rounded-sm border border-line bg-paper/95 px-4 pt-4 text-ink shadow-[0_24px_60px_-28px_rgb(37_37_34/0.5)] backdrop-blur-md sm:inset-x-auto sm:left-5 sm:bottom-5 sm:max-w-[25rem] sm:p-6"
            style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
          >
            <p className="hidden font-serif text-[1.375rem] leading-tight text-forest sm:block">
              Sobre cookies
            </p>
            <p className="text-caption text-ink-soft sm:mt-2 sm:text-small">
              Usamos o armazenamento essencial para o site funcionar. Com a sua
              permissão, também podemos usar cookies de medição e de marketing.{" "}
              <Link
                href="/politica-de-cookies"
                className="text-ink underline decoration-1 underline-offset-3 hover:text-forest"
              >
                Política de Cookies
              </Link>
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-5">
              <Button type="button" onClick={acceptAll}>
                Aceitar
              </Button>
              <Button type="button" variant="outline" onClick={rejectAll}>
                Recusar
              </Button>
              <button
                type="button"
                onClick={() => setPreferencesOpen(true)}
                className="ml-auto min-h-11 px-1 text-small font-medium text-ink"
              >
                <span className="link-draw">Configurar</span>
              </button>
            </div>
          </m.section>
        )}
      </AnimatePresence>
      {preferencesRequested && <CookiePreferences />}
    </>
  );
}
