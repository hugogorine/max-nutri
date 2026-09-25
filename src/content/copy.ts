import { site } from "@/content/site";

/**
 * Textos da página. Revise com a profissional antes de publicar:
 * a publicidade em nutrição segue o Código de Ética do CFN, que veda
 * promessa de resultado e divulgação de resultados de pacientes.
 */

export const hero = {
  label: "Nutricionista para gestantes",
  titleLines: ["Uma gestação", "bem nutrida,", "semana a semana."],
  lead: "Acompanhamento nutricional individual do primeiro trimestre ao pós-parto, com um plano que se ajusta a cada fase e à sua rotina.",
  primaryCta: "Agendar minha consulta",
  secondaryCta: "Conhecer o acompanhamento",
  numeralCaption: "semanas",
  insetCaption: "Cada trimestre pede ajustes no prato.",
  figureAlt:
    "Gestante de perfil, de olhos fechados e sorrindo, com as mãos sob a barriga.",
  insetAlt: "Figos cortados ao meio sobre um tecido de linho claro.",
};

/** Marcos da linha do tempo da gestação, em semanas. */
export const trimesters = [
  { label: "1º trimestre", start: 1 },
  { label: "2º trimestre", start: 14 },
  { label: "3º trimestre", start: 28 },
] as const;

export const about = {
  titleLines: ["Mais do que alimentação.", "Um cuidado para cada fase."],
  paragraphs: [
    `Sou ${site.name}, nutricionista com atuação voltada à gestação e ao pós-parto. Meu trabalho é ajudar você a comer bem numa fase de muitas mudanças, com orientações que cabem na sua rotina.`,
    "Cada consulta começa pela escuta: sua história, seus exames, seus horários, suas preferências e o que tem sido difícil. A partir disso, construímos juntas um plano possível, revisto a cada fase.",
  ],
  portraitAlt: `Retrato de ${site.name}, sorrindo, em luz natural.`,
};

export const journey = {
  title: "Um acompanhamento que muda junto com você.",
  intro:
    "A gestação não é uma fase só. As necessidades mudam de um trimestre para o outro, e o plano acompanha essas mudanças, consulta a consulta.",
  steps: [
    {
      title: "Primeira consulta",
      when: "No início do acompanhamento",
      text: "Avaliação individual e compreensão da rotina: histórico, exames, hábitos, preferências e sintomas. É aqui que entendemos o seu momento.",
    },
    {
      title: "Plano personalizado",
      when: "Depois da avaliação",
      text: "Uma estratégia alimentar pensada para a fase da gestação em que você está, com orientações práticas para o dia a dia.",
    },
    {
      title: "Acompanhamento",
      when: "Ao longo dos trimestres",
      text: "Retornos para ajustar o plano conforme a gestação avança, os exames mudam e novas necessidades aparecem.",
    },
    {
      title: "Pós-parto",
      when: "Depois do nascimento",
      text: "Orientações para a nova fase, considerando a recuperação, a rotina com o bebê e a amamentação, quando for o caso.",
    },
  ],
  cta: "Agendar a primeira consulta",
};

export const benefits = {
  title: "O que o acompanhamento pode trazer para a sua rotina.",
  items: [
    {
      title: "Alimentação adequada para cada fase",
      text: "Orientações que consideram as mudanças de cada trimestre e as suas necessidades individuais.",
    },
    {
      title: "Uma rotina alimentar mais organizada",
      text: "Refeições planejadas de acordo com seus horários, sua fome e o que é possível na sua semana.",
    },
    {
      title: "Estratégias para sintomas comuns",
      text: "Sugestões práticas para momentos como enjoo, azia ou intestino preso, sempre avaliadas caso a caso.",
    },
    {
      title: "Acompanhamento individualizado",
      text: "Nada de plano pronto: cada orientação parte da sua história, dos seus exames e das suas preferências.",
    },
    {
      title: "Orientação a partir das suas necessidades",
      text: "Informação clara e confiável para decidir o que comer com mais tranquilidade e menos dúvida.",
    },
  ],
  imageAlt: "Limões inteiros e fatiados sobre um tecido claro, com pequenas flores.",
  imageCaption: "Pequenos ajustes, pensados para a sua rotina.",
};

export const audience = {
  title: "Para quem é o acompanhamento",
  items: [
    {
      question: "Você está no início da gestação?",
      answer:
        "A primeira consulta ajuda a entender o que muda na alimentação desde as primeiras semanas.",
    },
    {
      question: "Está com dificuldade para organizar sua alimentação?",
      answer:
        "Montamos juntas uma rotina possível, que respeita seus horários, sua fome e suas preferências.",
    },
    {
      question: "Quer entender melhor suas necessidades nutricionais?",
      answer:
        "Você recebe orientações claras sobre o que cada fase costuma pedir, sempre a partir da sua avaliação.",
    },
    {
      question: "Está buscando acompanhamento individualizado?",
      answer:
        "Cada orientação parte da sua história, dos seus exames e da sua rotina, e muda quando você muda.",
    },
  ],
  closing:
    "Se você se viu em alguma dessas perguntas, a primeira consulta é um bom começo.",
  cta: "Agendar minha consulta",
  imageAlt: "Gestante de vestido verde com as mãos sobre a barriga.",
};

export const testimonials = {
  title: "Relatos de quem passou por aqui",
  demoNotice:
    "Conteúdo demonstrativo. Substitua por relatos reais, publicados com autorização por escrito das pacientes e sem mencionar resultados.",
  items: [
    {
      quote:
        "Eu chegava às consultas cheia de dúvidas e saía com um plano que cabia na minha rotina de trabalho. Pela primeira vez, comer bem pareceu possível.",
      name: "Mariana",
      phase: "2º trimestre",
    },
    {
      quote:
        "Nos meses de enjoo, ter orientações práticas fez diferença. Eu me senti ouvida, sem julgamento nenhum.",
      name: "Camila",
      phase: "1º trimestre",
    },
    {
      quote:
        "O cuidado continuou depois do parto, quando tudo mudou de novo. Ter esse acompanhamento naquela fase foi muito importante para mim.",
      name: "Beatriz",
      phase: "Pós-parto",
    },
  ],
};

export const faq = {
  title: "Perguntas frequentes",
  aside: "Não encontrou a sua dúvida?",
  asideCta: "Fale comigo pelo WhatsApp",
  items: [
    {
      question: "Quando devo procurar uma nutricionista durante a gestação?",
      answer:
        "Você pode buscar acompanhamento em qualquer fase: no planejamento, logo no início da gestação ou já nos últimos meses. Começar cedo dá mais tempo para ajustar a alimentação com calma, mas não existe momento tarde demais para começar.",
    },
    {
      question: "Como funciona a primeira consulta?",
      answer:
        "É uma conversa detalhada sobre a sua história, rotina, preferências, sintomas e exames recentes. Se você tiver exames, leve-os ou envie antes. Ao final, combinamos os próximos passos e a entrega do seu plano.",
    },
    {
      question: "O acompanhamento é personalizado?",
      answer:
        "Sim. As orientações partem da sua avaliação individual e levam em conta a fase da gestação, seus exames, sua rotina e suas preferências alimentares. Não existe plano pronto.",
    },
    {
      question: "As consultas podem ser online?",
      answer: `Os formatos de atendimento disponíveis são: ${site.profile.serviceFormat}. Você escolhe o que funciona melhor para a sua rotina já no primeiro contato.`,
    },
    {
      question: "Como funciona o acompanhamento ao longo da gestação?",
      answer:
        "Depois da primeira consulta, os retornos são marcados conforme a sua necessidade e a fase da gestação. Em cada encontro, revisamos o plano, conversamos sobre sintomas e exames e ajustamos o que for preciso. O acompanhamento pode continuar no pós-parto.",
    },
    {
      question: "O acompanhamento nutricional substitui o pré-natal?",
      answer:
        "Não. O acompanhamento nutricional complementa o pré-natal feito com a sua equipe de saúde e não substitui consultas, exames ou orientações médicas.",
    },
  ],
};

export const finalCta = {
  titleLines: ["Cuide da sua alimentação", "com orientação para cada fase."],
  text: "Conte em que fase da gestação você está e combinamos juntas o melhor horário para a primeira consulta.",
  cta: "Quero agendar minha consulta",
  imageAlt: "Detalhe das mãos de uma gestante apoiadas sob a barriga.",
};
