"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealAs = "div" | "li" | "section" | "article";

type RevealProps<T extends RevealAs = "div"> = {
  as?: T;
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "style" | "children">;

export function Reveal<T extends RevealAs = "div">({
  as,
  children,
  delay = 0,
  className,
  style,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || revealed) return;

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "-10% 0px", threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [revealed]);

  const mergedStyle: CSSProperties = {
    transitionDelay: delay ? `${delay}ms` : undefined,
    willChange: revealed ? undefined : "opacity, transform",
    ...style,
  };

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "motion-safe:transition-[opacity,transform] motion-safe:duration-500 motion-safe:ease-out motion-safe:data-[revealed=false]:translate-y-3 motion-safe:data-[revealed=false]:opacity-0",
        className,
      )}
      data-revealed={revealed}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </Tag>
  );
}
