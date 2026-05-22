import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { pricing } from "@/lib/copy/pricing";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="planos">
      <Container>
        <SectionHeader
          eyebrow={pricing.eyebrow}
          title={pricing.headline}
          description={pricing.subheadline}
        />

        <ul role="list" className="mt-14 grid gap-6 md:grid-cols-3">
          {pricing.plans.map((plan) => (
            <li
              key={plan.id}
              className={cn(
                "bg-surface/60 relative flex flex-col gap-6 rounded-[var(--radius-lg)] border p-8",
                plan.featured
                  ? "border-accent/40 shadow-lifted md:-translate-y-2"
                  : "border-border/60",
              )}
            >
              {plan.featured ? (
                <span
                  aria-hidden
                  className="via-accent absolute inset-x-0 -top-px mx-auto h-px w-2/3 bg-gradient-to-r from-transparent to-transparent"
                />
              ) : null}
              {plan.featured ? (
                <span className="bg-accent/15 text-accent ring-accent/30 absolute top-4 right-4 rounded-full px-2.5 py-0.5 text-[11px] font-medium ring-1">
                  Recomendado
                </span>
              ) : null}

              <div>
                <div className="text-fg-muted text-xs tracking-wider uppercase">{plan.name}</div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-fg text-3xl font-semibold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-fg-muted text-sm">/{plan.cadence}</span>
                </div>
                <p className="text-fg-muted mt-3 text-sm text-pretty">{plan.description}</p>
              </div>

              <Button
                href={plan.ctaHref}
                size="md"
                variant={plan.featured ? "primary" : "secondary"}
                className="w-full justify-center"
              >
                {plan.ctaLabel}
              </Button>

              <ul role="list" className="border-border/60 flex flex-col gap-2.5 border-t pt-5">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-fg flex items-start gap-2.5 text-sm">
                    <Check className="text-accent mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    <span className="text-fg-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
