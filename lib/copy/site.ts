export const nav = {
  links: [
    { href: "#beneficios", label: "Benefícios" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#planos", label: "Planos" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: {
    href: "mailto:contato@flowmind.ai?subject=Quero%20conhecer%20o%20FlowMind%20AI",
    label: "Falar com vendas",
  },
  signIn: { href: "mailto:contato@flowmind.ai", label: "Entrar" },
} as const;

export const footer = {
  tagline:
    "Plataforma de orquestração de IA para times que querem ir mais rápido sem perder o controle.",
  columns: [
    {
      title: "Produto",
      links: [
        { href: "#beneficios", label: "Benefícios" },
        { href: "#como-funciona", label: "Como funciona" },
        { href: "#planos", label: "Planos" },
        { href: "#faq", label: "FAQ" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { href: "mailto:contato@flowmind.ai", label: "Fale com a gente" },
        { href: "mailto:imprensa@flowmind.ai", label: "Imprensa" },
        { href: "mailto:juridico@flowmind.ai", label: "Jurídico" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { href: "#", label: "Status" },
        { href: "#", label: "Segurança" },
        { href: "#", label: "Política de privacidade" },
      ],
    },
  ],
  legal: "© 2026 FlowMind AI. Todos os direitos reservados.",
} as const;
