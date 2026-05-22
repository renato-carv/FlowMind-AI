export const hero = {
  eyebrow: "Plataforma de orquestração com IA",
  headline: {
    lead: "A inteligência por trás das operações que",
    highlight: "escalam",
    tail: ".",
  },
  subheadline:
    "FlowMind AI conecta seus times, dados e agentes inteligentes em fluxos auditáveis — para você automatizar o trabalho complexo sem perder o controle.",
  primaryCta: {
    href: "mailto:contato@flowmind.ai?subject=Quero%20uma%20demo%20do%20FlowMind%20AI",
    label: "Agendar demonstração",
  },
  secondaryCta: {
    href: "#como-funciona",
    label: "Como funciona",
  },
  proofPoints: [
    { value: "10×", label: "mais rápido para lançar workflows" },
    { value: "98%", label: "redução em retrabalho manual" },
    { value: "SOC 2", label: "tipo II em andamento" },
  ],
  mockup: {
    title: "Workflow ao vivo",
    status: "Em execução",
    a11yDescription:
      "Diagrama de fluxo com quatro nós conectados: gatilho, agente, ferramenta e saída.",
    nodes: [
      {
        id: "trigger",
        role: "trigger" as const,
        label: "Trigger",
        sublabel: "Webhook recebido",
      },
      {
        id: "agent",
        role: "agent" as const,
        label: "Agente",
        sublabel: "Decide o próximo passo",
      },
      {
        id: "tool",
        role: "tool" as const,
        label: "Ferramenta",
        sublabel: "Consulta CRM · API",
      },
      {
        id: "output",
        role: "output" as const,
        label: "Saída",
        sublabel: "Notifica Slack #vendas",
      },
    ],
  },
} as const;
