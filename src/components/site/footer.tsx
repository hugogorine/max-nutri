import Link from "next/link";

import { CookieSettingsButton } from "@/components/consent/cookie-settings-button";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "@/components/site/icons";
import { site } from "@/content/site";
import { emailUrl, instagramUrl, whatsappUrl } from "@/lib/contact";

export function Footer() {
  const year = new Date().getFullYear();
  const instagram = instagramUrl();
  const email = emailUrl();

  const contacts = [
    {
      label: "Instagram",
      detail: `@${site.contact.instagram.replace(/^@/, "")}`,
      href: instagram,
      icon: InstagramIcon,
    },
    {
      label: "WhatsApp",
      detail: "Agendar consulta",
      href: whatsappUrl(),
      icon: WhatsAppIcon,
    },
    {
      label: "E-mail",
      detail: site.contact.email,
      href: email,
      icon: MailIcon,
    },
  ];

  return (
    <footer className="on-dark bg-forest-deep text-paper">
      <div className="mx-auto max-w-[90rem] px-gutter pt-20 pb-10 lg:pt-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 lg:col-span-5">
            <p className="font-serif text-[2rem] leading-tight tracking-[-0.01em]">
              {site.name}
            </p>
            <p className="mt-3 text-small text-sage-light">
              {site.profession} | {site.registry}
            </p>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <h2 className="font-sans text-small text-sage-light">Contato</h2>
            <ul className="mt-5 space-y-1">
              {contacts.map(({ label, detail, href, icon: Icon }) => {
                const content = (
                  <>
                    <Icon className="size-5 shrink-0 text-sage" />
                    <span>
                      <span className="sr-only">{label}: </span>
                      {detail}
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex min-h-11 items-center gap-3 transition-colors hover:text-sage-light"
                      >
                        {content}
                      </a>
                    ) : (
                      <span className="flex min-h-11 items-center gap-3 text-paper/70">
                        {content}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <nav
            aria-label="Informações legais"
            className="col-span-12 sm:col-span-6 lg:col-span-3"
          >
            <h2 className="font-sans text-small text-sage-light">Privacidade</h2>
            <ul className="mt-5 space-y-1">
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="flex min-h-11 items-center transition-colors hover:text-sage-light"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-cookies"
                  className="flex min-h-11 items-center transition-colors hover:text-sage-light"
                >
                  Política de Cookies
                </Link>
              </li>
              <li>
                <CookieSettingsButton className="flex min-h-11 items-center transition-colors hover:text-sage-light" />
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-8 text-caption text-paper/70 md:flex-row md:justify-between">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p>
            As informações deste site não substituem uma consulta individual.
          </p>
        </div>
      </div>
    </footer>
  );
}
