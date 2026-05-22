export const hero = {
  eyebrow: "Plataforma de orquestração com IA",
  headline: "A inteligência por trás das operações que escalam.",
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
    title: "Workflow",
    subtitle: "Onboarding automatizado",
    status: "Em execução",
    nodes: [
      { id: "intake", label: "Capturar lead", role: "trigger" },
      { id: "enrich", label: "Enriquecer dados", role: "agent" },
      { id: "score", label: "Score com IA", role: "model" },
      { id: "route", label: "Roteamento humano", role: "human" },
      { id: "notify", label: "Notificar Slack", role: "action" },
    ],
  },
} as const;
