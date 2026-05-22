import { Bot, CircleDot, Cpu, MousePointerClick, Send, Sparkles, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { hero } from "@/lib/copy/hero";
import { cn } from "@/lib/utils";

const iconByRole: Record<string, LucideIcon> = {
  trigger: MousePointerClick,
  agent: Bot,
  model: Cpu,
  human: User,
  action: Send,
};

const tintByRole: Record<string, string> = {
  trigger: "text-accent-warm",
  agent: "text-accent",
  model: "text-accent-warm",
  human: "text-fg",
  action: "text-accent",
};

export function WorkflowMockup() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-x-10 -inset-y-16 -z-10 opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(40% 50% at 30% 30%, hsl(var(--accent) / 0.35), transparent), radial-gradient(40% 50% at 80% 70%, hsl(var(--glow) / 0.3), transparent)",
        }}
      />
      <div className="glass shadow-lifted relative overflow-hidden rounded-[var(--radius-xl)]">
        <div className="border-border/60 flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="text-fg-muted text-xs">
            <span className="font-mono">flowmind.ai</span>
            <span className="text-fg-subtle mx-2">·</span>
            <span>workspace</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300 ring-1 ring-emerald-500/20">
              <CircleDot className="h-3 w-3" aria-hidden />
              {hero.mockup.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]">
          <aside className="border-border/60 hidden border-r p-4 md:block">
            <div className="text-fg-subtle text-[11px] tracking-wider uppercase">Workflows</div>
            <ul className="mt-3 flex flex-col gap-1 text-sm">
              {["Onboarding lead", "Cobrança SMB", "Pesquisa rival", "QA de tickets"].map(
                (label, i) => (
                  <li
                    key={label}
                    className={cn(
                      "flex items-center justify-between rounded-md px-2 py-1.5",
                      i === 0
                        ? "bg-accent/10 text-fg ring-accent/20 ring-1"
                        : "text-fg-muted hover:bg-surface",
                    )}
                  >
                    <span className="truncate">{label}</span>
                    {i === 0 ? <Sparkles className="text-accent h-3.5 w-3.5" aria-hidden /> : null}
                  </li>
                ),
              )}
            </ul>
            <div className="border-border/60 bg-bg/40 text-fg-muted mt-6 rounded-lg border p-3 text-xs">
              <div className="text-fg">Sucesso</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-fg text-2xl font-semibold tabular-nums">98.7%</span>
                <span className="text-emerald-300">+2.1%</span>
              </div>
              <div className="text-fg-subtle">Últimas 24h</div>
            </div>
          </aside>

          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-fg-subtle text-[11px] tracking-wider uppercase">
                  {hero.mockup.title}
                </div>
                <h3 className="text-fg mt-1 text-base font-semibold">{hero.mockup.subtitle}</h3>
              </div>
              <div className="text-fg-muted text-xs">
                Última execução · <span className="text-fg">há 12s</span>
              </div>
            </div>

            <ol className="mt-5 flex flex-col gap-2.5">
              {hero.mockup.nodes.map((node, idx) => {
                const Icon = iconByRole[node.role] ?? Bot;
                const tint = tintByRole[node.role] ?? "text-accent";
                return (
                  <li
                    key={node.id}
                    className="border-border/60 bg-bg-elevated/60 flex items-center gap-3 rounded-lg border p-3"
                  >
                    <span
                      aria-hidden
                      className="bg-surface ring-border grid h-9 w-9 place-items-center rounded-md ring-1"
                    >
                      <Icon className={cn("h-4 w-4", tint)} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-fg truncate text-sm font-medium">{node.label}</span>
                        <span className="text-fg-subtle text-[11px]">
                          {idx === 2 ? "1.2s" : "—"}
                        </span>
                      </div>
                      <div className="text-fg-muted mt-0.5 text-xs">
                        {idx === 0 && "Formulário · webhook"}
                        {idx === 1 && "Clearbit · CNPJ.ws · LinkedIn"}
                        {idx === 2 && "gpt-4.1-mini · score 0.82"}
                        {idx === 3 && "SDR · revisão em 4h SLA"}
                        {idx === 4 && "Slack #vendas · template lead-hot"}
                      </div>
                    </div>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[11px]",
                        idx < 3
                          ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20"
                          : idx === 3
                            ? "bg-amber-500/10 text-amber-200 ring-1 ring-amber-500/20"
                            : "bg-surface text-fg-muted ring-border ring-1",
                      )}
                    >
                      {idx < 3 ? "ok" : idx === 3 ? "aguardando" : "pendente"}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
