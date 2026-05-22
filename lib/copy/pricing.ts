export type Plan = {
  id: "starter" | "pro" | "enterprise";
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

export const pricing = {
  eyebrow: "Planos",
  headline: "Comece pequeno. Escale sem reescrever nada.",
  subheadline:
    "Sem cobrança por usuário oculta, sem surpresa no fim do mês. Você paga pelo trabalho que a plataforma executa.",
  plans: [
    {
      id: "starter",
      name: "Starter",
      price: "R$ 0",
      cadence: "para começar",
      description: "Para times pequenos validando os primeiros fluxos com IA.",
      features: [
        "Até 3 fluxos em produção",
        "5.000 execuções/mês",
        "Conectores essenciais",
        "Suporte por e-mail em 48h",
      ],
      ctaLabel: "Começar grátis",
      ctaHref: "mailto:contato@flowmind.ai?subject=Quero%20o%20plano%20Starter",
    },
    {
      id: "pro",
      name: "Pro",
      price: "R$ 1.490",
      cadence: "por mês",
      description: "Para operações que rodam IA com SLA, observabilidade e controle.",
      features: [
        "Fluxos ilimitados em produção",
        "100.000 execuções/mês",
        "Ambientes dev/stage/prod",
        "SSO, RBAC e trilhas de auditoria",
        "Suporte prioritário em 4h",
      ],
      ctaLabel: "Falar com vendas",
      ctaHref: "mailto:contato@flowmind.ai?subject=Quero%20o%20plano%20Pro",
      featured: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Sob medida",
      cadence: "para escala global",
      description: "Para companhias com requisitos avançados de compliance e escala.",
      features: [
        "Volume e SLA personalizados",
        "VPC dedicada e on-prem",
        "Conectores e modelos privados",
        "Compliance review e DPA",
        "Customer success dedicado",
      ],
      ctaLabel: "Conversar com o time",
      ctaHref: "mailto:contato@flowmind.ai?subject=Quero%20o%20plano%20Enterprise",
    },
  ] satisfies Plan[],
} as const;
