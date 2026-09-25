"use client";

import { useEffect } from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/contact";

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    // Detalhes só no console (e em um serviço de monitoramento, se houver).
    console.error(error);
  }, [error]);

  return (
    <main
      id="conteudo"
      className="flex min-h-svh items-center bg-backdrop"
    >
      <div className="mx-auto w-full max-w-[90rem] px-gutter py-24">
        <p className="font-serif text-[1.25rem] text-forest italic">
          Algo saiu do esperado
        </p>
        <h1 className="mt-5 max-w-[16ch] text-h2 font-[360] tracking-[-0.02em] text-forest">
          Não foi possível carregar esta parte do site.
        </h1>
        <p className="mt-6 max-w-[46ch] text-lead text-ink-soft">
          Tente de novo em alguns instantes. Se o problema continuar, o
          agendamento pelo WhatsApp segue funcionando normalmente.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => retry()}
            className={buttonVariants({ size: "lg" })}
          >
            Tentar de novo
          </button>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            Agendar pelo WhatsApp
          </a>
          <Link href="/" className="px-2 py-3 text-body font-medium text-ink">
            <span className="link-draw">Voltar para o início</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
