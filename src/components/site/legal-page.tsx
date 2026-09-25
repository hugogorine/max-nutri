import { Footer } from "@/components/site/footer";
import { SimpleHeader } from "@/components/site/simple-header";
import { site } from "@/content/site";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SimpleHeader />
      <main id="conteudo" tabIndex={-1} className="bg-paper outline-none">
        <article className="mx-auto grid max-w-[90rem] grid-cols-12 gap-x-6 gap-y-12 px-gutter pt-36 pb-section lg:pt-44">
          <header className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-12">
              <h1 className="max-w-[12ch] text-h2 font-[360] tracking-[-0.02em] text-forest">
                {title}
              </h1>
              <p className="mt-6 text-small text-ink-soft">
                Última atualização: {site.legal.updatedAt}
              </p>
            </div>
          </header>
          <div className="legal-prose col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="lead">{intro}</p>
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
