"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import { WhatsAppIcon } from "@/components/site/icons";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { buttonVariants } from "@/components/ui/button";
import { navigation, site } from "@/content/site";
import { whatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";

const loadMobileMenu = () => import("@/components/site/mobile-menu");
const MobileMenu = dynamic(() => loadMobileMenu().then((mod) => mod.MobileMenu), {
  ssr: false,
});

/** Todas as seções da página, em ordem; só algumas aparecem no menu. */
const sectionIds = [
  "inicio",
  "sobre",
  "acompanhamento",
  "beneficios",
  "para-quem-e",
  "depoimentos",
  "faq",
  "contato",
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  // O menu só é baixado no primeiro toque; depois fica montado para animar a saída.
  const [menuRequested, setMenuRequested] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
      setActiveId(findActiveSection());
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-out-quint",
        scrolled
          ? "bg-paper/92 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-[90rem] items-center gap-6 px-gutter lg:h-[4.5rem]"
      >
        <Link
          href="/#inicio"
          className="mr-auto font-serif text-[1.1875rem] leading-none tracking-[-0.01em] text-forest lg:text-[1.3125rem]"
        >
          {site.name}
        </Link>

        <ul className="hidden items-center gap-7 xl:flex">
          {navigation.map((item) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className="group relative py-2 text-small text-ink"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 bottom-0.5 h-px origin-left bg-current transition-transform duration-500 ease-out-expo",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden sm:block">
          <WhatsAppCta size="md">Agendar consulta</WhatsAppCta>
        </div>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar consulta pelo WhatsApp (abre em nova aba)"
          className={cn(buttonVariants({ size: "icon" }), "sm:hidden")}
        >
          <WhatsAppIcon className="size-5" />
        </a>

        <button
          ref={menuButton}
          type="button"
          aria-label="Abrir menu"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          onPointerEnter={loadMobileMenu}
          onTouchStart={loadMobileMenu}
          onFocus={loadMobileMenu}
          onClick={() => {
            setMenuRequested(true);
            setMenuOpen(true);
          }}
          className="-mr-2 grid size-11 place-items-center text-forest xl:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <path d="M3 9h18M3 15h12" />
          </svg>
        </button>

        {menuRequested && (
          <MobileMenu
            open={menuOpen}
            onOpenChange={setMenuOpen}
            returnFocusTo={menuButton}
          />
        )}
      </nav>
    </header>
  );
}

/**
 * Última seção cujo topo já passou de 40% da tela. Se for uma seção fora
 * do menu (como "Para quem é"), nenhum link fica marcado.
 */
function findActiveSection() {
  const line = window.innerHeight * 0.4;
  let current: string | null = null;
  for (const id of sectionIds) {
    const element = document.getElementById(id);
    if (element && element.getBoundingClientRect().top <= line) current = id;
  }
  const inMenu = navigation.some((item) => item.href === `#${current}`);
  return inMenu ? current : null;
}
