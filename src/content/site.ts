/**
 * Dados da profissional e canais de contato.
 *
 * Tudo que estiver entre colchetes é placeholder e deve ser trocado pela
 * informação real antes da publicação. Enquanto um contato estiver com
 * placeholder, o site mostra o texto sem gerar um link quebrado.
 *
 * O número de WhatsApp fica na variável de ambiente
 * NEXT_PUBLIC_WHATSAPP_NUMBER (veja .env.example).
 */
export const site = {
  name: "[Nome da Nutricionista]",
  profession: "Nutricionista",
  registry: "CRN [XXXXX]",
  specialty: "Nutricionista para gestantes",

  /** URL pública do site, usada em metadados, sitemap e Open Graph. */
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  contact: {
    /** Somente dígitos, com código do país e DDD. Ex.: 55 + DDD + número. */
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
    whatsappMessage:
      "Olá! Conheci seu trabalho pelo site e gostaria de saber mais sobre o acompanhamento nutricional para gestantes.",
    /** Nome de usuário do Instagram, sem @. */
    instagram: "[seuperfil]",
    email: "[seu@email.com.br]",
  },

  profile: {
    education: "[Graduação em Nutrição, instituição e ano]",
    specialization: "[Especialização, instituição e ano]",
    approach:
      "Individual, com base em evidências científicas e alinhada ao seu pré-natal.",
    serviceFormat: "[Online, presencial em (cidade) ou ambos]",
  },

  /**
   * Controla o aviso de conteúdo demonstrativo nos depoimentos.
   * Troque para false quando os relatos reais estiverem publicados.
   */
  testimonialsAreDemo: true,

  legal: {
    /** Data da última atualização das políticas. */
    updatedAt: "[dd/mm/aaaa]",
    /** Responsável pelo tratamento de dados (pessoa física ou jurídica). */
    controller: "[Nome completo ou razão social, CPF ou CNPJ]",
  },
} as const;

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Acompanhamento", href: "#acompanhamento" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
] as const;
