import Image from "next/image";

import detalhe from "@/assets/images/gestante-detalhe.png";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { finalCta } from "@/content/copy";

/**
 * Fechamento da página: volta à gestante da capa, em detalhe, sobre o verde
 * da marca, como uma contracapa. No desktop, o recorte atravessa as bordas
 * de cima e de baixo da seção; no mobile, ele se dissolve no fundo.
 */
export function FinalCta() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="on-dark relative isolate overflow-hidden bg-forest text-paper"
    >
      <div className="mx-auto grid max-w-[90rem] grid-cols-12 gap-x-6 px-gutter">
        <div className="relative z-10 col-span-12 pt-section pb-[19rem] sm:col-span-8 md:col-span-7 md:pb-section">
          <h2
            id="contato-titulo"
            className="text-[clamp(2.5rem,1.6rem+3.6vw,5rem)] leading-[1] font-[360] tracking-[-0.025em]"
          >
            {finalCta.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-8 max-w-[40ch] text-lead text-sage-light">
            {finalCta.text}
          </p>
          <WhatsAppCta variant="inverse" className="mt-10">
            {finalCta.cta}
          </WhatsAppCta>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 bottom-0 h-[20rem] w-[14rem] [mask-image:linear-gradient(180deg,transparent,#000_35%)] md:inset-y-0 md:right-[6%] md:h-auto md:w-[34%] md:[mask-image:none] lg:right-[8%] lg:w-[30%]">
        <Image
          src={detalhe}
          alt={finalCta.imageAlt}
          sizes="(min-width: 768px) 50vw, 60vw"
          className="absolute top-0 left-0 h-[125%] w-auto max-w-none md:top-[-4%] md:h-[135%]"
        />
      </div>
    </section>
  );
}
