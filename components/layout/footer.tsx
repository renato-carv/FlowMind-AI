import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { footer } from "@/lib/copy/site";

export function Footer() {
  return (
    <footer className="border-border/60 bg-bg-elevated relative border-t">
      <Container className="grid gap-12 py-14 sm:py-16 lg:grid-cols-3 lg:gap-10 lg:py-20">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-fg-muted max-w-xs text-sm text-pretty">{footer.tagline}</p>
        </div>

        <nav
          aria-label="Rodapé"
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2 lg:gap-10"
        >
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-fg text-xs font-semibold tracking-wider uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-fg-muted hover:text-fg rounded-sm text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Container>

      <div className="border-border/60 border-t">
        <Container className="text-fg-subtle flex flex-col items-start justify-between gap-2 py-6 text-xs sm:flex-row sm:items-center">
          <span>{footer.legal}</span>
          <span>{footer.location}</span>
        </Container>
      </div>
    </footer>
  );
}
