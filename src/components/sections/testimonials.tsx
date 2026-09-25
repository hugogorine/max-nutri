"use client";

import { useState } from "react";
import { AnimatePresence, m } from "motion/react";

import { testimonials } from "@/content/copy";
import { site } from "@/content/site";

export function Testimonials() {
  const { items } = testimonials;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const current = items[index];

  const go = (step: number) => {
    setDirection(step);
    setIndex((value) => (value + step + items.length) % items.length);
  };

  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-titulo"
      className="bg-paper py-section"
    >
      <div className="mx-auto grid max-w-[90rem] grid-cols-12 gap-x-6 gap-y-12 px-gutter">
        <div className="col-span-12 lg:col-span-3">
          <h2
            id="depoimentos-titulo"
            className="max-w-[12ch] font-serif text-[clamp(1.75rem,1.4rem+1.4vw,2.5rem)] leading-[1.08] text-forest"
          >
            {testimonials.title}
          </h2>
          {site.testimonialsAreDemo && (
            <p className="mt-5 max-w-[34ch] border-l border-clay/60 pl-4 text-caption text-ink-soft">
              {testimonials.demoNotice}
            </p>
          )}
        </div>

        <div
          className="col-span-12 lg:col-span-8 lg:col-start-5"
          role="group"
          aria-roledescription="carrossel"
          aria-label="Depoimentos"
        >
          <span
            aria-hidden="true"
            className="block h-[0.5em] font-serif text-[clamp(7rem,5rem+8vw,12rem)] leading-[0.9] text-rose select-none"
          >
            “
          </span>

          <div className="grid min-h-[17rem] sm:min-h-[15rem] lg:min-h-[19rem]" aria-live="polite">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <m.figure
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -24 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                aria-roledescription="depoimento"
                aria-label={`${index + 1} de ${items.length}`}
              >
                <blockquote className="max-w-[30ch] font-serif text-[clamp(1.625rem,1.2rem+1.7vw,2.625rem)] leading-[1.22] tracking-[-0.01em] text-ink italic">
                  <p>{current.quote}</p>
                </blockquote>
                <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-medium text-ink">{current.name}</span>
                  <span className="text-small text-ink-soft">{current.phase}</span>
                </figcaption>
              </m.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Depoimento anterior"
              className="grid size-12 place-items-center rounded-[2px] border border-forest/70 text-forest transition-colors duration-300 hover:border-forest hover:bg-forest hover:text-paper"
            >
              <Arrow className="size-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próximo depoimento"
              className="grid size-12 place-items-center rounded-[2px] border border-forest/70 text-forest transition-colors duration-300 hover:border-forest hover:bg-forest hover:text-paper"
            >
              <Arrow className="size-5" />
            </button>
            <p className="ml-3 text-small text-ink-soft tabular-nums" aria-hidden="true">
              {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 12h15M13.5 6.5L19 12l-5.5 5.5" />
    </svg>
  );
}
