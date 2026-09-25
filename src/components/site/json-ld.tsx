import { faq } from "@/content/copy";
import { site } from "@/content/site";
import { instagramUrl } from "@/lib/contact";

/**
 * Dados estruturados (schema.org). Não inclui endereço nem área de
 * atendimento: esses campos só devem entrar com informação real.
 */
export function JsonLd() {
  const url = site.url.replace(/\/$/, "");
  const sameAs = [instagramUrl()].filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#site`,
        url,
        name: site.name,
        inLanguage: "pt-BR",
      },
      {
        "@type": "Person",
        "@id": `${url}/#profissional`,
        name: site.name,
        jobTitle: site.profession,
        knowsAbout: [
          "Nutrição na gestação",
          "Nutrição no pós-parto",
          "Alimentação materna",
        ],
        ...(sameAs.length > 0 && { sameAs }),
      },
      {
        "@type": "Service",
        "@id": `${url}/#acompanhamento`,
        name: "Acompanhamento nutricional para gestantes",
        serviceType: "Acompanhamento nutricional",
        audience: {
          "@type": "PeopleAudience",
          audienceType: "Gestantes e puérperas",
        },
        provider: { "@id": `${url}/#profissional` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // O conteúdo vem de arquivos do próprio projeto; o replace evita que
      // um "<" nos textos feche a tag de script.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
