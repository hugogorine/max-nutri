"use client";

import { useConsent } from "@/components/consent/consent-provider";
import { cn } from "@/lib/utils";

/** Reabre as preferências de cookies a qualquer momento (rodapé e políticas). */
export function CookieSettingsButton({
  className,
  children = "Preferências de cookies",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { setPreferencesOpen } = useConsent();
  return (
    <button
      type="button"
      onClick={() => setPreferencesOpen(true)}
      className={cn("text-left", className)}
    >
      {children}
    </button>
  );
}
