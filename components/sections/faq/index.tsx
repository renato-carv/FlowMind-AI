"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { faq } from "@/lib/copy/faq";

export function Faq() {
  return (
    <Section id="faq">
      <Container>
        <SectionHeader eyebrow={faq.eyebrow} title={faq.headline} description={faq.subheadline} />
        <div className="mx-auto mt-14 max-w-3xl">
          <Accordion.Root
            type="single"
            collapsible
            className="divide-[hsl(var(--border-subtle))] divide-y"
          >
            {faq.items.map((item, idx) => (
              <Accordion.Item key={item.question} value={`item-${idx}`} className="group">
                <Accordion.Header asChild>
                  <h3>
                    <Accordion.Trigger className="text-fg hover:text-accent focus-visible:ring-ring group flex w-full items-center justify-between gap-6 py-6 text-left text-base font-medium transition-colors focus-visible:rounded-md focus-visible:ring-2 focus-visible:outline-none sm:text-lg">
                      <span className="text-pretty">{item.question}</span>
                      <span
                        aria-hidden
                        className="border-border/70 text-fg-muted group-hover:border-accent/60 group-hover:text-accent group-data-[state=open]:border-accent/60 group-data-[state=open]:bg-accent/10 group-data-[state=open]:text-accent inline-grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ease-out group-data-[state=open]:rotate-180"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </Accordion.Trigger>
                  </h3>
                </Accordion.Header>
                <Accordion.Content className="text-fg-muted overflow-hidden text-[15px] leading-relaxed motion-safe:data-[state=closed]:animate-[faq-collapse_220ms_ease-out] motion-safe:data-[state=open]:animate-[faq-expand_240ms_ease-out]">
                  <p className="pr-12 pb-6 text-pretty">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </Container>
    </Section>
  );
}
