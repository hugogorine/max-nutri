import Image from "next/image";

import figos from "@/assets/images/figos-linho.jpg";
import gestante from "@/assets/images/gestante-recorte.png";
import { HeroParallax } from "@/components/sections/hero-parallax";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { hero, trimesters } from "@/content/copy";
import { cn } from "@/lib/utils";

type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>;

/**
 * Capa da página. A composição segue a lógica de um pôster editorial:
 * fundo de estúdio, o "40" (semanas de gestação) atrás da gestante e o
 * recorte dela na frente, o que cria profundidade sem moldura.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-backdrop"
    >
      {/* Luz de estúdio atrás da figura */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_65%_at_74%_42%,#f4f0eb_0%,rgb(244_240_235/0)_70%),linear-gradient(180deg,#ebe5de_0%,#e7e0d8_100%)]"
      />

      {/* Grão de impressão sobre fundo, numeral e fotos (o texto fica acima) */}
      <div aria-hidden="true" className="grain absolute inset-0 z-20" />

      <div className="relative mx-auto grid min-h-[max(100svh,40rem)] max-w-[90rem] grid-cols-12 px-gutter lg:min-h-[max(100svh,46rem)]">
        {/* Camada visual: numeral, recorte e still life */}
        <HeroParallax className="pointer-events-none absolute inset-0">
          {/* Numeral no mobile: inteiro, ao lado do rosto */}
          <div
            aria-hidden="true"
            className="absolute top-[4.5rem] left-gutter font-serif text-[min(16rem,31svh,61vw)] leading-[0.82] md:text-[min(23rem,33svh)] font-[330] tracking-[-0.04em] text-forest lg:hidden"
          >
            <span className="hero-digit" style={{ "--d": "620ms" } as CSSVars}>
              4
            </span>
            <span className="hero-digit" style={{ "--d": "480ms" } as CSSVars}>
              0
            </span>
            <span className="hero-fade absolute top-[94%] left-[0.06em] font-serif text-[1.25rem] tracking-normal italic">
              {hero.numeralCaption}
            </span>
          </div>

          <div className="absolute top-16 right-[-4%] h-[min(48svh,30rem)] aspect-[0.6] md:right-[8%] md:h-[min(54svh,40rem)] overflow-hidden [mask-image:linear-gradient(180deg,#000_84%,transparent_100%)] [container-type:size] sm:right-[6%] lg:top-auto lg:right-[7%] lg:bottom-0 lg:h-[86%] lg:aspect-[955/2112] lg:overflow-visible lg:[mask-image:none] xl:right-[10%]">
            {/* Numeral no desktop: atrás da figura, sangrando na borda */}
            <div
              aria-hidden="true"
              className="absolute top-[5%] right-[-66%] hidden font-serif text-[70cqh] leading-[0.8] font-[330] tracking-[-0.04em] whitespace-nowrap text-forest [translate:calc(var(--mx,0)*-16px)_calc(var(--my,0)*-10px)] lg:block"
            >
              <span className="hero-digit" style={{ "--d": "620ms" } as CSSVars}>
                4
              </span>
              <span className="hero-digit" style={{ "--d": "480ms" } as CSSVars}>
                0
              </span>
              <span
                className="hero-fade absolute top-[36%] left-[10%] font-serif text-[1.5rem] leading-none tracking-normal italic"
                style={{ "--d": "1300ms" } as CSSVars}
              >
                {hero.numeralCaption}
              </span>
            </div>

            <div className="hero-figure absolute inset-0 z-10 [translate:calc(var(--mx,0)*-5px)_calc(var(--my,0)*-3px)]">
              <Image
                src={gestante}
                alt={hero.figureAlt}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 26vw, (min-width: 768px) 44vw, 60vw"
                className="object-cover object-top lg:object-contain lg:object-bottom"
              />
            </div>
          </div>

          <figure
            className="hero-fade absolute right-[max(1.5rem,3vw)] bottom-[7%] z-20 hidden w-[clamp(8.5rem,10.5vw,11rem)] xl:block [translate:calc(var(--mx,0)*10px)_calc(var(--my,0)*8px)]"
            style={{ "--d": "1150ms" } as CSSVars}
          >
            <div className="hero-drift">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] shadow-[0_24px_40px_-24px_rgb(37_37_34/0.55)]">
                <Image
                  src={figos}
                  alt={hero.insetAlt}
                  fill
                  sizes="12vw"
                  placeholder="blur"
                  className="object-cover object-[58%_50%]"
                />
              </div>
              <figcaption className="mt-3 max-w-[16ch] text-caption text-ink-soft">
                {hero.insetCaption}
              </figcaption>
            </div>
          </figure>
        </HeroParallax>


        {/* Textos */}
        <div className="relative z-30 col-span-12 flex flex-col justify-end pt-[calc(4rem+min(48svh,30rem)*0.96)] pb-28 md:pt-[calc(4rem+min(54svh,40rem)*0.96)] lg:col-span-7 lg:justify-center lg:pt-28 lg:pb-36">
          <p
            className="hero-fade font-serif text-[1.25rem] italic text-forest lg:text-[1.375rem]"
            style={{ "--d": "80ms" } as CSSVars}
          >
            {hero.label}
          </p>
          <h1
            id="hero-title"
            className="mt-3 font-serif text-display font-[360] tracking-[-0.025em] text-forest lg:mt-7"
          >
            {hero.titleLines.map((line, index) => (
              <span key={line} className="hero-line">
                <span style={{ "--i": index } as CSSVars}>{line}</span>
              </span>
            ))}
          </h1>
          <p
            className="hero-fade mt-5 max-w-[39ch] text-lead text-ink-soft lg:mt-9"
            style={{ "--d": "620ms" } as CSSVars}
          >
            {hero.lead}
          </p>
          <div
            className="hero-fade mt-7 flex flex-wrap items-center gap-x-9 gap-y-3 lg:mt-11"
            style={{ "--d": "760ms" } as CSSVars}
          >
            <WhatsAppCta>{hero.primaryCta}</WhatsAppCta>
            <a
              href="#acompanhamento"
              className="py-2 text-body font-medium text-ink"
            >
              <span className="link-draw">{hero.secondaryCta}</span>
            </a>
          </div>
        </div>

        <WeekRuler />
      </div>
    </section>
  );
}

/** Régua das 40 semanas, dividida nos três trimestres, e o pós-parto. */
function WeekRuler() {
  const weeks = Array.from({ length: 40 }, (_, index) => index + 1);
  const marks = new Set<number>([1, ...trimesters.map((t) => t.start), 40]);
  // As 40 semanas ocupam 80% da régua; os 20% finais são do pós-parto,
  // espaço suficiente para o rótulo caber até em telas de 320px.
  const weeksSpan = 80;
  const at = (week: number) => ((week - 1) / 39) * weeksSpan;

  return (
    <div
      aria-hidden="true"
      className="hero-fade absolute right-gutter bottom-6 left-gutter z-30 text-ink-soft lg:right-auto lg:bottom-8 lg:w-[min(40rem,46%)]"
      style={{ "--d": "900ms" } as CSSVars}
    >
      <div className="relative h-14">
        {trimesters.map((trimester) => (
          <span
            key={trimester.label}
            className="absolute top-0 pl-2 text-[0.6875rem] whitespace-nowrap sm:text-caption"
            style={{ left: `${at(trimester.start)}%` }}
          >
            {trimester.label}
          </span>
        ))}
        {/* Alinhado ao fim da régua: nunca passa da margem da tela */}
        <span className="absolute top-0 right-0 text-[0.6875rem] whitespace-nowrap sm:text-caption">
          pós-parto
        </span>

        <svg
          className="absolute bottom-5 left-0 h-3 w-full overflow-visible"
          viewBox="0 0 100 12"
          preserveAspectRatio="none"
        >
          {weeks.map((week) => (
            <line
              key={week}
              x1={at(week)}
              x2={at(week)}
              y1={marks.has(week) ? -18 : 5}
              y2={12}
              stroke="currentColor"
              strokeOpacity={marks.has(week) ? 0.7 : 0.35}
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <line
            x1={weeksSpan + 3}
            x2="100"
            y1="12"
            y2="12"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1"
            strokeDasharray="2 4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div
          className="hero-rule absolute bottom-5 left-0 h-px bg-current opacity-60"
          style={{ width: `${weeksSpan}%` }}
        />

        {[...marks].map((week) => (
          <span
            key={week}
            className={cn(
              "absolute bottom-0 text-[0.6875rem] leading-none tabular-nums",
              week !== 1 && "-translate-x-1/2",
            )}
            style={{ left: `${at(week)}%` }}
          >
            {week === 1 ? "semana 1" : week}
          </span>
        ))}
      </div>
    </div>
  );
}
