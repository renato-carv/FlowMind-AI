export const howItWorks = {
  eyebrow: "Como funciona",
  headline: "Do problema ao fluxo em produção, em quatro passos.",
  subheadline:
    "Um modelo mental simples — definir, orquestrar, executar, medir — que escala da automação mais simples até o workflow mais crítico.",
  steps: [
    {
      number: "01",
      icon: "lightbulb" as const,
      title: "Definir",
      description:
        "Descreva o objetivo, os dados de entrada e as regras de negócio. A FlowMind sugere o esqueleto do fluxo automaticamente.",
    },
    {
      number: "02",
      icon: "git-branch" as const,
      title: "Orquestrar",
      description:
        "Combine modelos, ferramentas internas, APIs e revisores humanos em um canvas com versionamento por branch.",
    },
    {
      number: "03",
      icon: "play" as const,
      title: "Executar",
      description:
        "Rode em produção com isolamento por ambiente, retries inteligentes e fallback automático para humanos quando preciso.",
    },
    {
      number: "04",
      icon: "line-chart" as const,
      title: "Medir",
      description:
        "Dashboards de qualidade, custo e latência em tempo real. Exporte para sua stack de observabilidade favorita.",
    },
  ],
} as const;

export type HowItWorksStepIcon = (typeof howItWorks.steps)[number]["icon"];
