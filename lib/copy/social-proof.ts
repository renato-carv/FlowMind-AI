export type SocialProofLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export type SocialProofMetric = {
  value: string;
  label: string;
};

export const socialProof = {
  eyebrow: "Quem confia",
  headline: "Operações que já rodam em produção com FlowMind AI.",
  logos: [
    { name: "Northwind Labs", src: "/logos/northwind.svg", width: 132, height: 28 },
    { name: "Helios", src: "/logos/helios.svg", width: 110, height: 28 },
    { name: "Aurora Bank", src: "/logos/aurora.svg", width: 140, height: 28 },
    { name: "Vega Health", src: "/logos/vega.svg", width: 124, height: 28 },
    { name: "Orbit Retail", src: "/logos/orbit.svg", width: 120, height: 28 },
    { name: "Quanta Logistics", src: "/logos/quanta.svg", width: 140, height: 28 },
  ] satisfies SocialProofLogo[],
  metrics: [
    { value: "10k+", label: "Workflows orquestrados / mês" },
    { value: "99,9%", label: "Uptime medido nos últimos 90 dias" },
    { value: "< 2s", label: "p95 de latência fim-a-fim" },
  ] satisfies SocialProofMetric[],
} as const;
