"use client";

import { useEffect } from "react";

import { whatsappUrl } from "@/lib/contact";
import "./globals.css";

/**
 * Último recurso, quando até o layout raiz falha. Precisa ter <html> e <body>
 * próprios; usa fontes do sistema porque as da marca podem não ter carregado.
 */
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body className="bg-backdrop text-ink">
        <title>Algo saiu do esperado</title>
        <main className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-24 font-[Georgia,serif]">
          <h1 className="text-[clamp(2rem,1.5rem+2.5vw,3.25rem)] leading-tight text-forest">
            Não foi possível carregar o site agora.
          </h1>
          <p className="mt-6 max-w-[46ch] font-sans text-lg text-ink-soft">
            Tente de novo em alguns instantes. Se preferir, fale comigo
            diretamente pelo WhatsApp.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 font-sans">
            <button
              type="button"
              onClick={() => retry()}
              className="min-h-14 rounded-[2px] bg-forest px-7 font-medium text-paper"
            >
              Tentar de novo
            </button>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center rounded-[2px] border border-forest px-7 font-medium text-forest"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
