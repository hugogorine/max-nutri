import Link from "next/link";

import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { site } from "@/content/site";

/** Cabeçalho das páginas internas (políticas, 404): marca, volta e agendamento. */
export function SimpleHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center gap-6 px-gutter lg:h-[4.5rem]">
        <Link
          href="/"
          className="mr-auto font-serif text-[1.1875rem] leading-none tracking-[-0.01em] text-forest lg:text-[1.3125rem]"
        >
          {site.name}
        </Link>
        <Link href="/" className="hidden py-2 text-small text-ink sm:inline">
          <span className="link-draw">Voltar para o início</span>
        </Link>
        <WhatsAppCta size="md">Agendar consulta</WhatsAppCta>
      </div>
    </header>
  );
}
