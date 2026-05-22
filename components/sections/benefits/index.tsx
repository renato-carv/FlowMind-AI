import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { benefits } from "@/lib/copy/benefits";

export function Benefits() {
  return (
    <Section id="beneficios">
      <Container>
        <SectionHeader
          eyebrow={benefits.eyebrow}
          title={benefits.headline}
          description={benefits.subheadline}
        />
        <ul role="list" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map(({ icon: Icon, title, description }, idx) => (
            <Reveal
              as="li"
              key={title}
              delay={idx * 60}
              className="group border-border/60 bg-surface/60 hover:border-border relative overflow-hidden rounded-[var(--radius-lg)] border p-6 transition-colors"
            >
              <div
                aria-hidden
                className="bg-accent/0 group-hover:bg-accent/20 pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl transition-colors duration-500"
              />
              <div
                aria-hidden
                className="border-border bg-bg-elevated text-accent mb-5 inline-grid h-10 w-10 place-items-center rounded-[var(--radius-sm)] border"
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-fg text-base font-semibold">{title}</h3>
              <p className="text-fg-muted mt-2 text-sm text-pretty">{description}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
