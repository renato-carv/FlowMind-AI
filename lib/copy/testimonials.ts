export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  initials: string;
};

export const testimonials = {
  eyebrow: "Depoimentos",
  headline: "Times que decidiram parar de remendar automações.",
  subheadline:
    "Operações de alta performance escolhem FlowMind para tirar o trabalho repetitivo do caminho — e devolver tempo às pessoas.",
  items: [
    {
      quote:
        "Reduzimos o ciclo de qualificação de leads de 36 horas para 12 minutos sem perder nenhum critério humano que importava.",
      author: "Ana Beatriz Cardoso",
      role: "VP de Operações, Nimbus Logística",
      initials: "AC",
    },
    {
      quote:
        "A trilha de auditoria nativa salvou a gente em duas revisões regulatórias. É a primeira ferramenta de IA que o jurídico aprovou sem rodeios.",
      author: "Rafael Munhoz",
      role: "CTO, Banco Vértice",
      initials: "RM",
    },
    {
      quote:
        "Em três meses migramos 47 automações de Zapier, scripts soltos e RPA pra FlowMind. O custo operacional caiu 62%.",
      author: "Júlia Marques",
      role: "Diretora de Plataforma, Mira Saúde",
      initials: "JM",
    },
    {
      quote:
        "Os agentes especialistas viraram parte do time. Eles tocam o trabalho braçal e nos pingam quando precisam de decisão.",
      author: "Eduardo Tanaka",
      role: "Head de Sucesso, Lume",
      initials: "ET",
    },
    {
      quote:
        "Versionar fluxo como código foi o que destravou nosso compliance. Hoje rodamos canary releases de automação em produção.",
      author: "Marina Costa",
      role: "Engenheira-chefe, Atrio",
      initials: "MC",
    },
    {
      quote:
        "Saímos do PoC para 12 workflows críticos em um trimestre. Nenhuma outra plataforma nos deu essa velocidade com governança.",
      author: "Diego Aragão",
      role: "Chief of Staff, Polaris Energia",
      initials: "DA",
    },
  ] satisfies Testimonial[],
} as const;
