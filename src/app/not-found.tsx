import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/site/footer";
import { SimpleHeader } from "@/components/site/simple-header";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <SimpleHeader />
      <main
        id="conteudo"
        tabIndex={-1}
        className="flex min-h-[80svh] items-center bg-backdrop outline-none"
      >
        <div className="mx-auto w-full max-w-[90rem] px-gutter pt-32 pb-24">
          <p className="font-serif text-[1.25rem] text-forest italic">
            Erro 404
          </p>
          <h1 className="mt-5 max-w-[14ch] text-display font-[360] tracking-[-0.025em] text-forest">
            Esta página não está aqui.
          </h1>
          <p className="mt-8 max-w-[44ch] text-lead text-ink-soft">
            O endereço pode ter mudado ou estar digitado de outro jeito. Volte
            para o início ou fale comigo pelo WhatsApp.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/" className={buttonVariants({ size: "lg" })}>
              Voltar para o início
            </Link>
            <WhatsAppCta variant="outline">Falar pelo WhatsApp</WhatsAppCta>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
