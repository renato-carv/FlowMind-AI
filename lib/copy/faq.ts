export type FaqItem = {
  question: string;
  answer: string;
};

export const faq = {
  eyebrow: "FAQ",
  headline: "Tudo que perguntam antes de assinar.",
  subheadline: "Não achou sua resposta? Chama a gente em contato@flowmind.ai.",
  items: [
    {
      question: "A FlowMind substitui as ferramentas que já uso?",
      answer:
        "Não. A gente conecta. FlowMind orquestra modelos de IA, suas APIs internas, ferramentas SaaS, bancos e revisores humanos no mesmo fluxo. Os investimentos que sua empresa já fez continuam valendo.",
    },
    {
      question: "Quais modelos de IA são suportados?",
      answer:
        "Suportamos os principais provedores comerciais (OpenAI, Anthropic, Google, AWS Bedrock) e self-hosted (Llama, Mistral, vLLM, Ollama). Você pode usar diferentes modelos no mesmo fluxo e trocar com um clique.",
    },
    {
      question: "Como funciona a governança das automações?",
      answer:
        "Toda execução é versionada e auditável. Você define ambientes, políticas de aprovação, RBAC granular e quais ações exigem revisão humana. Exportamos logs estruturados para Datadog, Grafana, Splunk e similares.",
    },
    {
      question: "Os meus dados ficam isolados?",
      answer:
        "Sim. Cada workspace é isolado em nível lógico e, no plano Enterprise, em nível de rede (VPC dedicada). Sem treinamento cruzado com dados de outros clientes — nunca.",
    },
    {
      question: "Onde os dados são processados?",
      answer:
        "Você escolhe a região: São Paulo, Virgínia ou Frankfurt no plano Pro. Enterprise pode adicionar regiões privadas. Atendemos LGPD e estamos em processo de SOC 2 tipo II.",
    },
    {
      question: "Quanto tempo leva pra colocar em produção?",
      answer:
        "Times saem do cadastro para o primeiro fluxo em produção em um dia. Casos com integrações customizadas e governança pesada normalmente levam de duas a quatro semanas.",
    },
    {
      question: "Posso testar antes de comprar?",
      answer:
        "Sim. O plano Starter é grátis e suficiente para validar os primeiros casos de uso. Quando quiser escalar, conversamos sem pressão.",
    },
    {
      question: "Como funciona o suporte?",
      answer:
        "Starter tem suporte por e-mail em 48 horas. Pro tem prioritário em 4 horas durante a semana. Enterprise tem customer success dedicado e SLA personalizado.",
    },
  ] satisfies FaqItem[],
} as const;
