import { RiseInView } from "@/components/site/rise-in-view";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { journey } from "@/content/copy";

export function Journey() {
  return (
    <section
      id="acompanhamento"
      aria-labelledby="acompanhamento-titulo"
      className="on-dark bg-forest py-section text-paper"
    >
      <div className="mx-auto max-w-[90rem] px-gutter">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <h2
            id="acompanhamento-titulo"
            className="col-span-12 max-w-[16ch] text-h2 font-[360] tracking-[-0.02em] lg:col-span-7"
          >
            {journey.title}
          </h2>
          <p className="col-span-12 max-w-[40ch] self-end text-lead text-sage-light md:col-span-8 lg:col-span-4 lg:col-start-9">
            {journey.intro}
          </p>
        </div>

        <ol className="mt-20 border-t border-paper/20 lg:mt-28">
          {journey.steps.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-12 gap-x-6 gap-y-3 border-b border-paper/20 pt-8 pb-10 lg:items-end lg:pt-10 lg:pb-12"
            >
              <span
                aria-hidden="true"
                className="col-span-12 font-serif text-[clamp(5.5rem,3.2rem+9vw,11rem)] leading-[0.9] font-[300] tracking-[-0.04em] text-sage sm:col-span-4 lg:col-span-3"
              >
                <RiseInView className="-mb-[0.14em] pt-[0.06em]" delay={0.05}>
                  {String(index + 1).padStart(2, "0")}
                </RiseInView>
              </span>
              <div className="col-span-12 sm:col-span-8 lg:col-span-4">
                <p className="text-small text-sage-light">{step.when}</p>
                <h3 className="mt-2 text-h3 text-paper">
                  <span className="sr-only">Etapa {index + 1}: </span>
                  {step.title}
                </h3>
              </div>
              <p className="col-span-12 max-w-[46ch] text-paper/80 sm:col-span-8 sm:col-start-5 lg:col-span-4 lg:col-start-9">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
          <WhatsAppCta variant="inverse">{journey.cta}</WhatsAppCta>
        </div>
      </div>
    </section>
  );
}
