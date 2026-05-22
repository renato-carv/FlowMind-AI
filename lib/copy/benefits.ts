import { Bot, GitBranch, Layers, ShieldCheck, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type BenefitSize = "lg" | "sm";

export type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
  size: BenefitSize;
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
        "Conecte gatilhos, modelos, ferramentas e humanos em fluxos versionados, com replay e ramificações condicionais. Sem código quebrado em produção e sem caixa-preta no meio do caminho.",
      size: "lg",
    },
    {
      icon: Layers,
      title: "Integrações nativas",
      description: "100+ conectores prontos para SaaS, bancos, filas e modelos. SDK aberto.",
      size: "sm",
    },
    {
      icon: ShieldCheck,
      title: "Governança séria",
      description: "Auditoria, SSO, RBAC e isolamento por workspace. Pronto para compliance.",
      size: "sm",
    },
    {
      icon: Bot,
      title: "Agentes inteligentes",
      description:
        "Especialistas com ferramentas próprias, memória persistente e políticas de aprovação configuráveis no mesmo fluxo.",
      size: "lg",
    },
    {
      icon: GitBranch,
      title: "Versionamento como código",
      description: "Branches, ambientes dev/stage/prod e rollback em um clique.",
      size: "sm",
    },
  ] satisfies Benefit[],
} as const;
