"use client";

import { motion, useReducedMotion } from "motion/react";
import { Bot, MousePointerClick, Send, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { hero } from "@/lib/copy/hero";

type NodeRole = (typeof hero.mockup.nodes)[number]["role"];

const iconByRole: Record<NodeRole, LucideIcon> = {
  trigger: MousePointerClick,
  agent: Bot,
  tool: Wrench,
  output: Send,
};

const tintByRole: Record<NodeRole, string> = {
  trigger: "text-accent-warm",
  agent: "text-accent",
  tool: "text-accent",
  output: "text-accent-warm",
};

const VIEWBOX_W = 480;
const VIEWBOX_H = 360;

const nodePositions: ReadonlyArray<{ cx: number; cy: number }> = [
  { cx: 88, cy: 90 },
  { cx: 360, cy: 110 },
  { cx: 120, cy: 250 },
  { cx: 380, cy: 270 },
];

const connectors: ReadonlyArray<{ from: number; to: number; d: string }> = [
  { from: 0, to: 1, d: "M 132 90 C 220 90, 260 100, 318 108" },
  { from: 1, to: 2, d: "M 348 138 C 280 180, 200 210, 152 234" },
  { from: 2, to: 3, d: "M 162 256 C 240 262, 290 268, 340 270" },
];

const PATH_STAGGER = 0.2;
const PATH_DURATION = 0.9;

export function WorkflowMockupSvg() {
  const prefersReduced = useReducedMotion() ?? false;
  const nodes = hero.mockup.nodes;

  return (
    <div className="relative">
      <span className="sr-only">{hero.mockup.a11yDescription}</span>

      <div
        aria-hidden
        className="absolute -inset-x-10 -inset-y-16 -z-10 opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(40% 50% at 30% 30%, hsl(var(--accent) / 0.35), transparent), radial-gradient(40% 50% at 80% 70%, hsl(var(--glow) / 0.3), transparent)",
        }}
      />

      <div
        className="glass shadow-lifted relative overflow-hidden rounded-[var(--radius-xl)]"
        aria-hidden
      >
        <div className="border-border/60 flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="text-fg-muted text-xs">
            <span className="font-mono">flowmind.ai</span>
            <span className="text-fg-subtle mx-2">·</span>
            <span>{hero.mockup.title}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300 ring-1 ring-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            {hero.mockup.status}
          </span>
        </div>

        <div className="relative p-5 sm:p-6">
          <svg
            viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
            className="block h-auto w-full"
            role="presentation"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="fm-edge" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.85" />
                <stop offset="100%" stopColor="hsl(var(--glow))" stopOpacity="0.65" />
              </linearGradient>
              <filter id="fm-soft" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g stroke="url(#fm-edge)" strokeWidth={2} fill="none" strokeLinecap="round">
              {connectors.map((edge, idx) => (
                <motion.path
                  key={`edge-${edge.from}-${edge.to}`}
                  d={edge.d}
                  initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={
                    prefersReduced
                      ? { duration: 0 }
                      : {
                          duration: PATH_DURATION,
                          delay: idx * PATH_STAGGER,
                          ease: "easeInOut",
                        }
                  }
                />
              ))}
            </g>

            {nodes.map((node, idx) => {
              const pos = nodePositions[idx];
              if (!pos) return null;
              return (
                <motion.g
                  key={node.id}
                  initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={
                    prefersReduced
                      ? { duration: 0 }
                      : {
                          duration: 0.35,
                          delay: idx * PATH_STAGGER + 0.05,
                          ease: "easeOut",
                        }
                  }
                >
                  <motion.circle
                    cx={pos.cx}
                    cy={pos.cy}
                    r={28}
                    fill="hsl(var(--surface-elevated))"
                    stroke="hsl(var(--border))"
                    strokeWidth={1.5}
                    filter="url(#fm-soft)"
                    animate={prefersReduced ? undefined : { scale: [1, 1.04, 1] }}
                    style={{ originX: `${pos.cx}px`, originY: `${pos.cy}px` }}
                    transition={
                      prefersReduced
                        ? undefined
                        : {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.35,
                          }
                    }
                  />
                  <circle
                    cx={pos.cx}
                    cy={pos.cy}
                    r={28}
                    fill="none"
                    stroke="hsl(var(--accent) / 0.35)"
                    strokeWidth={1}
                  />
                </motion.g>
              );
            })}
          </svg>

          <div className="pointer-events-none absolute inset-0 p-5 sm:p-6">
            <div className="relative h-full w-full">
              {nodes.map((node, idx) => {
                const pos = nodePositions[idx];
                if (!pos) return null;
                const Icon = iconByRole[node.role];
                const tint = tintByRole[node.role];
                const leftPct = (pos.cx / VIEWBOX_W) * 100;
                const topPct = (pos.cy / VIEWBOX_H) * 100;
                return (
                  <div
                    key={`label-${node.id}`}
                    className="absolute flex flex-col items-center gap-1.5 text-center"
                    style={{
                      left: `${leftPct}%`,
                      top: `${topPct}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <span className="bg-bg-elevated/90 ring-border/80 grid h-9 w-9 place-items-center rounded-full ring-1 backdrop-blur">
                      <Icon className={`h-4 w-4 ${tint}`} aria-hidden />
                    </span>
                    <span className="text-fg bg-bg/70 ring-border/60 pointer-events-none mt-1 inline-block rounded-md px-1.5 py-0.5 font-mono text-[10px] tracking-wide uppercase ring-1 backdrop-blur">
                      {node.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-border/60 bg-border/60 grid grid-cols-2 gap-px border-t sm:grid-cols-4">
          {nodes.map((node) => (
            <div key={`legend-${node.id}`} className="bg-bg-elevated/80 px-3 py-2.5">
              <div className="text-fg-subtle font-mono text-[10px] tracking-wider uppercase">
                {node.label}
              </div>
              <div className="text-fg-muted mt-0.5 text-[11px] leading-tight">{node.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkflowMockupSvg;
