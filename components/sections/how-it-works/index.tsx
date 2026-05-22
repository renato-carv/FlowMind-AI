import { GitBranch, Lightbulb, LineChart, Play } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { howItWorks, type HowItWorksStepIcon } from "@/lib/copy/how-it-works";

const iconByKey: Record<HowItWorksStepIcon, LucideIcon> = {
  lightbulb: Lightbulb,
  "git-branch": GitBranch,
  play: Play,
  "line-chart": LineChart,
};

const REVEAL_STAGGER_MS = 120;

export function HowItWorks() {
  const steps = howItWorks.steps;

  return (
    <Section id="como-funciona" className="relative">
      <div
        aria-hidden
        className="via-border absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent to-transparent"
      />
      <Container>
        <SectionHeader
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.headline}
          description={howItWorks.subheadline}
        />

        <div className="relative mt-14">
          <svg
            aria-hidden
            className="absolute inset-x-0 top-[1.125rem] hidden h-px w-full lg:block"
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
          >
            <line
              x1="60"
              y1="1"
              x2="940"
              y2="1"
              stroke="hsl(var(--border))"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
          </svg>

          <ol role="list" className="relative grid gap-10 sm:gap-12 lg:grid-cols-4 lg:gap-8">
            <span
              aria-hidden
              className="bg-border/70 absolute top-0 bottom-0 left-[1.125rem] w-px lg:hidden"
            />

            {steps.map((step, idx) => {
              const Icon = iconByKey[step.icon];
              return (
                <Reveal
                  key={step.number}
                  as="li"
                  delay={idx * REVEAL_STAGGER_MS}
                  className="relative pl-14 lg:pl-0"
                >
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="border-accent-warm/40 bg-accent-warm/10 text-accent-warm ring-bg absolute top-0 left-0 grid h-9 w-9 place-items-center rounded-full border font-mono text-xs ring-4 lg:relative lg:top-auto lg:left-auto"
                      >
                        {step.number}
                      </span>
                      <span className="border-border/60 bg-bg-elevated/80 text-accent-warm hidden h-9 w-9 place-items-center rounded-md border lg:grid">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                    </div>

                    <div className="flex items-center gap-3 lg:hidden">
                      <span className="border-border/60 bg-bg-elevated/80 text-accent-warm grid h-9 w-9 shrink-0 place-items-center rounded-md border">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <h3 className="text-fg text-lg font-semibold">{step.title}</h3>
                    </div>

                    <h3 className="text-fg hidden text-lg font-semibold lg:block">{step.title}</h3>

                    <p className="text-fg-muted text-sm text-pretty">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
