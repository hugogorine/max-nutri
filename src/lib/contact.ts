import { site } from "@/content/site";

/** Um valor ainda não preenchido: vazio ou escrito entre colchetes. */
export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return true;
  return /\[[^\]]*\]/.test(value);
}

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

/**
 * Link do WhatsApp com a mensagem pré-preenchida.
 *
 * Sem número configurado, o link abre o WhatsApp com a mensagem pronta
 * para a pessoa escolher o contato, em vez de apontar para um número inválido.
 */
export function whatsappUrl(message: string = site.contact.whatsappMessage) {
  const number = digitsOnly(site.contact.whatsappNumber);
  const text = encodeURIComponent(message);
  const hasValidNumber = number.length >= 10 && number.length <= 15;
  return hasValidNumber
    ? `https://wa.me/${number}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export function instagramUrl() {
  const handle = site.contact.instagram.replace(/^@/, "");
  return isPlaceholder(handle) ? null : `https://www.instagram.com/${handle}/`;
}

export function emailUrl() {
  const email = site.contact.email;
  return isPlaceholder(email) ? null : `mailto:${email}`;
}
