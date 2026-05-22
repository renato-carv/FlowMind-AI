"use client";

import dynamic from "next/dynamic";

function WorkflowMockupSkeleton() {
  return (
    <div className="relative" aria-hidden>
      <div
        className="absolute -inset-x-10 -inset-y-16 -z-10 opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(40% 50% at 30% 30%, hsl(var(--accent) / 0.25), transparent), radial-gradient(40% 50% at 80% 70%, hsl(var(--glow) / 0.2), transparent)",
        }}
      />
      <div className="glass shadow-lifted relative overflow-hidden rounded-[var(--radius-xl)]">
        <div className="border-border/60 flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/40" />
          </div>
          <span className="bg-surface h-3 w-32 rounded" />
          <span className="bg-surface h-4 w-20 rounded-full" />
        </div>
        <div className="p-5 sm:p-6">
          <div className="aspect-[4/3] w-full" />
        </div>
        <div className="border-border/60 bg-border/60 grid grid-cols-2 gap-px border-t sm:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="bg-bg-elevated/80 px-3 py-2.5">
              <div className="bg-surface h-2 w-12 rounded" />
              <div className="bg-surface mt-2 h-2 w-20 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const WorkflowMockupSvg = dynamic(
  () =>
    import("./workflow-mockup-svg").then((mod) => ({
      default: mod.WorkflowMockupSvg,
    })),
  {
    ssr: false,
    loading: () => <WorkflowMockupSkeleton />,
  },
);

export function WorkflowMockup() {
  return <WorkflowMockupSvg />;
}
