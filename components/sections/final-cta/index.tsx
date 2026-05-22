import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { finalCta } from "@/lib/copy/final-cta";

export function FinalCta() {
  return (
    <Section
      bleed
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden py-24 sm:py-32 lg:py-36"
    >
      <div aria-hidden className="gradient-accent absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="bg-grid absolute inset-0 -z-10 opacity-40"
        style={{ maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)" }}
      />
      <div
        aria-hidden
        className="bg-bg/40 absolute inset-x-0 top-0 -z-10 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, hsl(var(--accent) / 0.6), transparent)",
        }}
      />

      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>{finalCta.eyebrow}</Eyebrow>
          <h2
            id="final-cta-heading"
            className="text-fg text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]"
          >
            {finalCta.headline}
          </h2>
          <p className="text-fg-muted max-w-2xl text-base text-pretty sm:text-lg">
            {finalCta.subheadline}
          </p>
          <div className="mt-4">
            <Button href={finalCta.primaryCta.href} size="lg" variant="primary">
              {finalCta.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
