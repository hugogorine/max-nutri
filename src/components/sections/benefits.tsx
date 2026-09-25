import limoes from "@/assets/images/limoes-linho.jpg";
import { EditorialImage } from "@/components/site/editorial-image";
import { benefits } from "@/content/copy";

export function Benefits() {
  return (
    <section
      id="beneficios"
      aria-labelledby="beneficios-titulo"
      className="bg-paper py-section"
    >
      <div className="mx-auto grid max-w-[90rem] grid-cols-12 gap-x-6 gap-y-14 px-gutter lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <h2
          id="beneficios-titulo"
          className="col-span-12 max-w-[15ch] text-h2 font-[360] tracking-[-0.02em] text-forest lg:col-span-5"
        >
          {benefits.title}
        </h2>

        <ul className="col-span-12 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:pt-3">
          {benefits.items.map((item) => (
            <li
              key={item.title}
              className="grid gap-3 py-8 first:pt-0 sm:grid-cols-2 sm:gap-8 lg:block lg:py-11"
            >
              <h3 className="text-h3 text-forest">{item.title}</h3>
              <p className="max-w-[44ch] text-ink-soft lg:mt-3">{item.text}</p>
            </li>
          ))}
        </ul>

        <EditorialImage
          src={limoes}
          alt={benefits.imageAlt}
          caption={benefits.imageCaption}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 70vw, 100vw"
          className="col-span-12 sm:col-span-9 sm:col-start-4 lg:sticky lg:top-28 lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:self-start"
          frameClassName="aspect-[4/3] lg:aspect-[5/6]"
          imageClassName="object-[50%_62%]"
        />
      </div>
    </section>
  );
}
