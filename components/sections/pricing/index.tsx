import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
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

        <ul role="list" className="mt-16 grid items-stretch gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
          {pricing.plans.map((plan, idx) => (
            <Reveal
              as="li"
              key={plan.id}
              delay={idx * 80}
              className={cn(
                "relative flex h-full flex-col gap-6 rounded-[var(--radius-lg)] border p-8 transition-colors",
                plan.featured
                  ? "border-accent/60 bg-surface shadow-lifted z-10 md:-translate-y-3"
                  : "border-border/60 bg-surface/50 hover:border-border",
              )}
            >
              {plan.featured ? (
                <>
                  <span
                    aria-hidden
                    className="from-accent/0 via-accent to-accent/0 absolute inset-x-8 -top-px h-px bg-gradient-to-r"
                  />
                  <span className="bg-accent-warm text-accent-warm-fg shadow-soft absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide uppercase">
                    Mais popular
                  </span>
                </>
              ) : null}

              <div>
                <div className="text-fg-muted text-xs font-medium tracking-wider uppercase">
                  {plan.name}
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-fg text-4xl font-semibold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-fg-muted text-sm">/{plan.cadence}</span>
                </div>
                <p className="text-fg-muted mt-3 text-sm text-pretty">{plan.description}</p>
              </div>

              <Button
                href={plan.ctaHref}
                size="md"
                variant={plan.featured ? "primary" : "ghost"}
                className="w-full justify-center"
              >
                {plan.ctaLabel}
              </Button>

              <ul role="list" className="border-border/60 flex flex-col gap-3 border-t pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        plan.featured ? "text-accent" : "text-fg-muted",
                      )}
                      aria-hidden
                    />
                    <span className="text-fg-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
