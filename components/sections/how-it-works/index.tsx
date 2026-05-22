import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { howItWorks } from "@/lib/copy/how-it-works";

export function HowItWorks() {
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

        <ol
          role="list"
          className="border-border/60 bg-border/60 relative mt-14 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border sm:grid-cols-2 lg:grid-cols-4"
        >
          {howItWorks.steps.map((step, idx) => (
            <li key={step.number} className="bg-bg-elevated/80 relative flex flex-col gap-4 p-6">
              <div className="flex items-center gap-3">
                <span className="text-accent font-mono text-xs tracking-wider">{step.number}</span>
                <span className="bg-border/60 h-px flex-1" />
                {idx === howItWorks.steps.length - 1 ? null : (
                  <span aria-hidden className="text-fg-subtle">
                    →
                  </span>
                )}
              </div>
              <h3 className="text-fg text-lg font-semibold">{step.title}</h3>
              <p className="text-fg-muted text-sm text-pretty">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
