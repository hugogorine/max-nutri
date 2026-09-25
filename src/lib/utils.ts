type ClassValue = string | false | null | undefined;

/**
 * Junta classes condicionais. Não resolve conflitos do Tailwind (como o
 * tailwind-merge faria): o projeto evita passar classes que se sobrepõem,
 * e isso economiza um motor de ~26 KB no JavaScript enviado ao navegador.
 * Para variações de um componente, crie uma variante em vez de sobrescrever.
 */
export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}
