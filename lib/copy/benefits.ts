import { Bot, GitBranch, Layers, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const benefits = {
  eyebrow: "Benefícios",
  headline: "Tudo que sua operação precisa em um só lugar.",
  subheadline:
    "Da ingestão ao último handoff humano, a FlowMind AI cobre o ciclo completo com IA, observabilidade e governança nativas.",
  items: [
    {
      icon: Workflow,
      title: "Orquestração end-to-end",
      description:
        "Conecte gatilhos, modelos, ferramentas e humanos em fluxos versionados, com replay e ramificações condicionais.",
    },
    {
      icon: Bot,
      title: "Agentes inteligentes",
      description:
        "Crie agentes especialistas com ferramentas próprias, memória persistente e políticas de aprovação configuráveis.",
    },
    {
      icon: Layers,
      title: "Integrações nativas",
      description:
        "100+ conectores prontos para SaaS, bancos, filas e modelos de IA. Webhooks e SDK aberto para o que faltar.",
    },
    {
      icon: ShieldCheck,
      title: "Governança séria",
      description:
        "Trilhas de auditoria, SSO, RBAC granular e isolamento por workspace. Pronto para auditorias e compliance.",
    },
    {
      icon: Sparkles,
      title: "Produtividade composta",
      description:
        "Templates, blocos reutilizáveis e geração assistida transformam horas de configuração em minutos.",
    },
    {
      icon: GitBranch,
      title: "Versionamento como código",
      description:
        "Branches, revisões e ambientes (dev, stage, prod) com promoção controlada. Reverta um deploy ruim em um clique.",
    },
  ] satisfies Benefit[],
} as const;
