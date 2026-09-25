import type { VariantProps } from "class-variance-authority";

import { WhatsAppIcon } from "@/components/site/icons";
import { buttonVariants } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";

type WhatsAppCtaProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
  className?: string;
  message?: string;
};

/** Botão principal de conversão: abre o WhatsApp com a mensagem pronta. */
export function WhatsAppCta({
  children,
  className,
  variant,
  size = "lg",
  message,
}: WhatsAppCtaProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <WhatsAppIcon className="size-5 transition-transform duration-500 ease-out-expo group-hover/button:-rotate-12" />
      <span>{children}</span>
      <span className="sr-only"> (abre o WhatsApp em uma nova aba)</span>
    </a>
  );
}
