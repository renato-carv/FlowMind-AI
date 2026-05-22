import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg hover:bg-accent-strong shadow-soft hover:shadow-lifted ring-1 ring-inset ring-white/10",
  secondary:
    "bg-surface text-fg hover:bg-surface-elevated ring-1 ring-inset ring-border hover:ring-border",
  ghost:
    "bg-transparent text-fg hover:bg-surface ring-1 ring-inset ring-transparent hover:ring-border/70",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm rounded-[var(--radius-sm)]",
  md: "h-11 px-5 text-sm rounded-[var(--radius-md)]",
  lg: "h-12 px-6 text-base rounded-[var(--radius-md)]",
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

type SharedProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonElementProps = SharedProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof SharedProps> & {
    href?: undefined;
  };

type AnchorElementProps = SharedProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof SharedProps | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonElementProps | AnchorElementProps;

function getClasses(variant: Variant, size: Size, className?: string) {
  return cn(base, sizeStyles[size], variantStyles[variant], className);
}

export function Button(props: ButtonProps) {
  if ("href" in props && typeof props.href === "string") {
    const { href, variant = "primary", size = "md", className, children, ...rest } = props;
    const classes = getClasses(variant, size, className);
    const external = /^(https?:)?\/\//.test(href) || href.startsWith("mailto:");
    if (external) {
      return (
        <a className={classes} href={href} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link className={classes} href={href} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = getClasses(variant, size, className);
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
