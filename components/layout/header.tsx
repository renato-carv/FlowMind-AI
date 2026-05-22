"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { nav } from "@/lib/copy/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "border-border/60 border-b backdrop-blur-md" : "border-b border-transparent",
      )}
      style={
        scrolled ? { backgroundColor: "hsl(var(--bg) / 0.78)" } : { backgroundColor: "transparent" }
      }
    >
      <a
        href="#conteudo"
        className="focus:bg-accent focus:text-accent-fg sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:px-3 focus:py-1.5 focus:text-sm focus:font-medium"
      >
        Pular para o conteúdo
      </a>
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="FlowMind AI — voltar ao topo"
          className="rounded-md outline-none"
        >
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-fg-muted hover:text-fg rounded-md px-3 py-2 text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link
            href={nav.signIn.href}
            className="text-fg-muted hover:text-fg rounded-md px-3 py-2 text-sm transition-colors"
          >
            {nav.signIn.label}
          </Link>
          <Button href={nav.cta.href} size="sm" variant="primary">
            {nav.cta.label}
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="border-border/70 bg-surface/60 text-fg-muted hover:text-fg inline-grid h-9 w-9 place-items-center rounded-[var(--radius-sm)] border"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-border/60 bg-bg border-t md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-fg-muted hover:bg-surface hover:text-fg rounded-md px-3 py-3 text-base transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-border/60 mt-2 flex flex-col gap-2 border-t pt-3">
              <Button
                href={nav.cta.href}
                variant="primary"
                size="md"
                className="w-full justify-center"
              >
                {nav.cta.label}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
