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
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion.Root
            type="single"
            collapsible
            className="divide-border/60 border-border/60 bg-surface/40 divide-y overflow-hidden rounded-[var(--radius-lg)] border"
          >
            {faq.items.map((item, idx) => (
              <Accordion.Item key={item.question} value={`item-${idx}`} className="group">
                <Accordion.Header asChild>
                  <h3>
                    <Accordion.Trigger className="text-fg hover:bg-surface focus-visible:ring-ring flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-[15px] font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset">
                      <span>{item.question}</span>
                      <ChevronDown
                        aria-hidden
                        className="text-fg-muted h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                      />
                    </Accordion.Trigger>
                  </h3>
                </Accordion.Header>
                <Accordion.Content className="text-fg-muted overflow-hidden text-sm data-[state=closed]:animate-none data-[state=open]:animate-none">
                  <p className="px-5 pt-1 pb-5 leading-relaxed text-pretty">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </Container>
    </Section>
  );
}
