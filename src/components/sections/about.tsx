import retrato from "@/assets/images/retrato-nutricionista.jpg";
import { EditorialImage } from "@/components/site/editorial-image";
import { about } from "@/content/copy";
import { site } from "@/content/site";

export function About() {
  const facts = [
    { label: "Registro", value: `${site.profession} | ${site.registry}` },
    { label: "Formação", value: site.profile.education },
    { label: "Especialização", value: site.profile.specialization },
    { label: "Abordagem", value: site.profile.approach },
    { label: "Atendimento", value: site.profile.serviceFormat },
  ];

  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="bg-paper py-section"
    >
      <div className="mx-auto grid max-w-[90rem] grid-cols-12 gap-x-6 gap-y-14 px-gutter">
        <div className="col-span-12 md:col-span-5 lg:col-span-5">
          <EditorialImage
            src={retrato}
            alt={about.portraitAlt}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="md:sticky md:top-28"
            frameClassName="aspect-[4/5]"
            imageClassName="object-[50%_30%]"
          />
        </div>

        <div className="col-span-12 md:col-span-7 md:pl-[8%] lg:col-start-7 lg:col-span-6 lg:pl-0 lg:pt-24">
          <h2
            id="sobre-titulo"
            className="text-h2 font-[360] tracking-[-0.02em] text-forest"
          >
            {about.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p className="mt-10 max-w-[30ch] font-serif text-[clamp(1.375rem,1.2rem+0.7vw,1.75rem)] leading-[1.35] text-ink">
            {about.paragraphs[0]}
          </p>
          <p className="mt-6 max-w-[52ch] text-ink-soft">
            {about.paragraphs[1]}
          </p>

          <dl className="mt-14 border-t border-line">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid gap-1 border-b border-line py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
              >
                <dt className="text-small text-ink-soft">{fact.label}</dt>
                <dd className="text-small text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
