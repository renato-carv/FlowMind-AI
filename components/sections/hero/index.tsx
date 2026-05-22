import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { hero } from "@/lib/copy/hero";
import { WorkflowMockup } from "./workflow-mockup";

export function Hero() {
  return (
    <Section
      bleed
      className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36"
    >
      <div aria-hidden className="gradient-accent absolute inset-0 -z-20" />
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-5 lg:gap-12 xl:gap-16">
          <div className="flex flex-col items-start gap-6 lg:col-span-3">
            <span className="border-accent-warm/40 bg-accent-warm/10 text-accent-warm inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] tracking-[0.18em] uppercase">
              <span aria-hidden className="bg-accent-warm h-1.5 w-1.5 rounded-full" />
              {hero.eyebrow}
            </span>

            <h1 className="text-fg text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.75rem] lg:leading-[1.04]">
              {hero.headline.lead} <span className="gradient-text">{hero.headline.highlight}</span>
              {hero.headline.tail}
            </h1>

            <p className="text-fg-muted max-w-xl text-base text-pretty sm:text-lg">
              {hero.subheadline}
            </p>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button href={hero.primaryCta.href} size="lg" variant="primary">
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href={hero.secondaryCta.href} size="lg" variant="ghost">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <dl className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              {hero.proofPoints.map((point) => (
                <div
                  key={point.label}
                  className="border-border/60 bg-surface/50 rounded-[var(--radius-md)] border p-4"
                >
                  <dt className="text-fg text-2xl font-semibold tracking-tight">{point.value}</dt>
                  <dd className="text-fg-muted mt-1 text-xs">{point.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative order-last lg:order-none lg:col-span-2 xl:-mr-12 2xl:-mr-20">
            <WorkflowMockup />
          </div>
        </div>
      </Container>
    </Section>
  );
}
