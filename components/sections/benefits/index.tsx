import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { benefits } from "@/lib/copy/benefits";
import { cn } from "@/lib/utils";

const layoutClasses: Record<number, string> = {
  0: "md:col-span-2 lg:col-span-2 lg:row-span-2",
  1: "md:col-span-1 lg:col-span-1",
  2: "md:col-span-1 lg:col-span-1",
  3: "md:col-span-2 lg:col-span-2",
  4: "md:col-span-2 lg:col-span-1",
};

export function Benefits() {
  return (
    <Section id="beneficios">
      <Container>
        <SectionHeader
          eyebrow={benefits.eyebrow}
          title={benefits.headline}
          description={benefits.subheadline}
        />
        <ul
          role="list"
          className="mt-14 grid auto-rows-[minmax(0,1fr)] gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.items.map(({ icon: Icon, title, description, size }, idx) => {
            const isLarge = size === "lg";
            return (
              <Reveal
                as="li"
                key={title}
                delay={idx * 60}
                className={cn(
                  "group border-border/60 bg-surface/60 hover:border-accent/60 hover:shadow-lifted relative flex flex-col overflow-hidden rounded-[var(--radius-lg)] border p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 sm:p-7",
                  isLarge && "lg:p-9",
                  layoutClasses[idx],
                )}
              >
                <div
                  aria-hidden
                  className="from-accent/15 via-accent/0 to-accent/0 pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div
                  aria-hidden
                  className="border-border bg-bg-elevated text-accent group-hover:border-accent/60 group-hover:bg-accent/10 mb-5 inline-grid h-11 w-11 place-items-center rounded-[var(--radius-md)] border transition-colors"
                >
                  <Icon className={cn("h-5 w-5", isLarge && "lg:h-6 lg:w-6")} />
                </div>
                <h3
                  className={cn(
                    "text-fg font-semibold tracking-tight",
                    isLarge ? "text-lg sm:text-xl" : "text-base",
                  )}
                >
                  {title}
                </h3>
                <p
                  className={cn(
                    "text-fg-muted mt-2 text-pretty",
                    isLarge ? "text-sm sm:text-[15px] sm:leading-relaxed" : "text-sm",
                  )}
                >
                  {description}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
