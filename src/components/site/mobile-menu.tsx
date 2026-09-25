"use client";

import { useRef } from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { AnimatePresence, m } from "motion/react";

import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { navigation, site } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Menu em tela cheia do mobile. Fica num módulo separado, carregado só
 * quando a pessoa toca no botão de menu.
 */
export function MobileMenu({
  open,
  onOpenChange,
  returnFocusTo,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  returnFocusTo: React.RefObject<HTMLButtonElement | null>;
}) {
  // Link escolhido: a rolagem acontece depois que o menu termina de fechar
  // e libera o bloqueio de rolagem da página.
  const pendingHref = useRef<string | null>(null);

  const scrollToPending = () => {
    const href = pendingHref.current;
    pendingHref.current = null;
    if (!href) return;
    document.querySelector(href)?.scrollIntoView();
    window.history.replaceState(null, "", href);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence onExitComplete={scrollToPending}>
        {open && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Content
              forceMount
              asChild
              onCloseAutoFocus={(event) => {
                event.preventDefault();
                returnFocusTo.current?.focus({ preventScroll: true });
              }}
            >
              <m.div
                className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-paper"
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)" }}
                exit={{ clipPath: "inset(0 0 100% 0)" }}
                transition={{ duration: 0.7, ease }}
              >
                <DialogPrimitive.Title className="sr-only">Menu</DialogPrimitive.Title>
                <DialogPrimitive.Description className="sr-only">
                  Links para as seções da página e para o agendamento.
                </DialogPrimitive.Description>
                <div className="flex h-16 items-center px-gutter">
                  <span className="mr-auto font-serif text-[1.1875rem] leading-none text-forest">
                    {site.name}
                  </span>
                  <DialogPrimitive.Close
                    className="-mr-2 grid size-11 place-items-center text-forest"
                    aria-label="Fechar menu"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="size-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    >
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </DialogPrimitive.Close>
                </div>

                <ul className="mt-6 flex flex-col px-gutter">
                  {navigation.map((item, index) => (
                    <m.li
                      key={item.href}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease, delay: 0.18 + index * 0.05 }}
                      className="border-b border-line"
                    >
                      <a
                        href={item.href}
                        onClick={(event) => {
                          event.preventDefault();
                          pendingHref.current = item.href;
                          onOpenChange(false);
                        }}
                        className="flex items-baseline justify-between py-4 font-serif text-[2.25rem] leading-none text-forest"
                      >
                        {item.label}
                      </a>
                    </m.li>
                  ))}
                </ul>

                <m.div
                  className="mt-auto px-gutter pt-10 pb-[max(2rem,env(safe-area-inset-bottom))]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease, delay: 0.5 }}
                >
                  <WhatsAppCta className="w-full">Agendar minha consulta</WhatsAppCta>
                  <p className="mt-5 text-small text-ink-soft">
                    {site.profession} | {site.registry}
                  </p>
                </m.div>
              </m.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
