import gestanteVerde from "@/assets/images/gestante-vestido-verde.jpg";
import { EditorialImage } from "@/components/site/editorial-image";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { audience } from "@/content/copy";
import { cn } from "@/lib/utils";

/** Recuo alternado das perguntas no desktop, para um ritmo de revista. */
const indents = ["lg:ml-0", "lg:ml-[14%]", "lg:ml-[5%]", "lg:ml-[19%]"];

export function Audience() {
  return (
    <section
      id="para-quem-e"
      aria-labelledby="para-quem-titulo"
      className="relative bg-sage-wash py-section"
    >
      <div className="mx-auto grid max-w-[90rem] grid-cols-12 gap-x-6 gap-y-14 px-gutter">
        <div className="col-span-12 lg:col-span-7">
          <h2
            id="para-quem-titulo"
            className="text-h2 font-[360] tracking-[-0.02em] text-forest"
          >
            {audience.title}
          </h2>

          <ul className="mt-14 space-y-12 lg:mt-20 lg:space-y-16">
            {audience.items.map((item, index) => (
              <li
                key={item.question}
                className={cn("max-w-[34rem]", indents[index])}
              >
                <p className="font-serif text-[clamp(1.75rem,1.35rem+1.6vw,2.625rem)] leading-[1.1] tracking-[-0.015em] text-ink">
                  {item.question}
                </p>
                <p className="mt-4 max-w-[42ch] text-ink-soft">{item.answer}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 grid gap-10 sm:grid-cols-2 sm:items-end lg:col-span-4 lg:col-start-9 lg:flex lg:flex-col lg:items-stretch lg:justify-between lg:gap-14 lg:-mt-[calc(var(--spacing-section)*1.6)]">
          <EditorialImage
            src={gestanteVerde}
            alt={audience.imageAlt}
            sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
            frameClassName="aspect-[3/4] lg:aspect-[4/6]"
            imageClassName="object-[50%_40%]"
          />
          <div className="flex flex-col items-start gap-7 border-t border-forest/30 pt-8 lg:pb-2">
            <p className="max-w-[30ch] text-lead text-ink">{audience.closing}</p>
            <WhatsAppCta>{audience.cta}</WhatsAppCta>
          </div>
        </div>
      </div>
    </section>
  );
}
