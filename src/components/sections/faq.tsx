import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/content/copy";
import { whatsappUrl } from "@/lib/contact";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-titulo"
      className="bg-paper-deep py-section"
    >
      <div className="mx-auto grid max-w-[90rem] grid-cols-12 gap-x-6 gap-y-12 px-gutter">
        <div className="col-span-12 lg:col-span-4">
          <h2
            id="faq-titulo"
            className="max-w-[10ch] text-h2 font-[360] tracking-[-0.02em] text-forest"
          >
            {faq.title}
          </h2>
          <p className="mt-8 text-ink-soft">
            {faq.aside}{" "}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink"
            >
              <span className="link-draw">{faq.asideCta}</span>
              <span className="sr-only"> (abre o WhatsApp em uma nova aba)</span>
            </a>
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="col-span-12 lg:col-span-7 lg:col-start-6"
        >
          {faq.items.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
