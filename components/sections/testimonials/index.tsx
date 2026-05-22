import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { testimonials } from "@/lib/copy/testimonials";

export function Testimonials() {
  return (
    <Section id="depoimentos">
      <Container>
        <SectionHeader
          eyebrow={testimonials.eyebrow}
          title={testimonials.headline}
          description={testimonials.subheadline}
        />
        <ul role="list" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <li
              key={item.author}
              className="border-border/60 bg-surface/60 relative flex h-full flex-col gap-5 rounded-[var(--radius-lg)] border p-6"
            >
              <Quote className="text-accent/70 h-5 w-5" aria-hidden />
              <blockquote className="text-fg text-sm leading-relaxed text-pretty sm:text-[15px]">
                “{item.quote}”
              </blockquote>
              <div className="border-border/60 mt-auto flex items-center gap-3 border-t pt-4">
                <span
                  aria-hidden
                  className="from-accent/40 to-accent-warm/40 text-fg ring-border grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br text-xs font-semibold ring-1"
                >
                  {item.initials}
                </span>
                <div className="min-w-0">
                  <div className="text-fg truncate text-sm font-medium">{item.author}</div>
                  <div className="text-fg-muted truncate text-xs">{item.role}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
