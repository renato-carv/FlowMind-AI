import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { finalCta } from "@/lib/copy/final-cta";

export function FinalCta() {
  return (
    <Section className="pt-8 pb-24 sm:pt-12 sm:pb-32">
      <Container>
        <div className="border-border/60 bg-bg-elevated relative overflow-hidden rounded-[var(--radius-xl)] border px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <div aria-hidden className="gradient-accent absolute inset-0 -z-10 opacity-90" />
          <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-30" />

          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Eyebrow>{finalCta.eyebrow}</Eyebrow>
            <h2 className="text-fg text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {finalCta.headline}
            </h2>
            <p className="text-fg-muted max-w-2xl text-base text-pretty sm:text-lg">
              {finalCta.subheadline}
            </p>
            <div className="mt-2 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button href={finalCta.primaryCta.href} size="lg" variant="primary">
                {finalCta.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href={finalCta.secondaryCta.href} size="lg" variant="ghost">
                {finalCta.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
