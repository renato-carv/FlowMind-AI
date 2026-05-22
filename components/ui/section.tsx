import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  bleed?: boolean;
};

export function Section({ className, bleed = false, ...props }: SectionProps) {
  return (
    <section
      className={cn("scroll-mt-header relative", bleed ? "" : "py-20 sm:py-24 lg:py-32", className)}
      {...props}
    />
  );
}

type EyebrowProps = ComponentPropsWithoutRef<"span">;

export function Eyebrow({ className, ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        "border-border/70 bg-surface/70 text-fg-muted inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase",
        className,
      )}
      {...props}
    />
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-3xl items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-fg text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="text-fg-muted max-w-2xl text-base text-pretty sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
