type ClassValue = string | number | null | false | undefined | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const walk = (v: ClassValue) => {
    if (!v && v !== 0) return;
    if (Array.isArray(v)) {
      v.forEach(walk);
      return;
    }
    out.push(String(v));
  };
  inputs.forEach(walk);
  return out.join(" ");
}

export const SITE = {
  name: "FlowMind AI",
  domain: "flowmind.ai",
  url: "https://flowmind.ai",
  tagline: "Orquestre o trabalho da sua equipe com IA",
  description:
    "FlowMind AI é a plataforma de automação que conecta processos, dados e agentes de IA para sua equipe entregar mais com menos atrito.",
  email: "contato@flowmind.ai",
} as const;
