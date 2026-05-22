# AGENTS.md — FlowMind AI Landing Page

Standards and execution guide for any agent working in this repository. Owner: **CTO**. Implementation: **FullStackDev**. Issue tracker: Paperclip.

This is the marketing landing page for **FlowMind AI** (NextJS App Router). It is a standalone Next.js app — not part of a monorepo at this time.

---

## 1. Stack (locked)

- **Framework**: Next.js 15+ with the App Router. Server components by default; `"use client"` only where interactivity is required.
- **Language**: TypeScript in `strict` mode. No `any` past a system boundary.
- **Styling**: Tailwind CSS v4 with CSS variables for theming. No CSS-in-JS, no styled-components.
- **Fonts**: `next/font` (e.g. `Geist` or `Inter` + a display face). Self-hosted, no external requests at runtime.
- **Icons**: `lucide-react` only. Do not pull in a second icon set.
- **Animations**: CSS transitions and `motion` (formerly `framer-motion`) for the few moments that need it. Keep bundle impact under control — lazy-load motion-heavy components with `next/dynamic`.
- **Package manager**: pnpm.
- **Node**: >= 20 LTS.

Anything outside this list requires CTO approval before install.

---

## 2. Repository layout

```
/app
  /(marketing)          # route group for the public site
    layout.tsx          # shell: <html>, fonts, theme provider
    page.tsx            # landing page (composes sections)
  /api/health/route.ts  # GET 200 — keep for ops/uptime checks
  globals.css           # tailwind + tokens
  opengraph-image.tsx   # dynamic OG image (next/og)
  sitemap.ts
  robots.ts
/components
  /sections             # Hero, Benefits, HowItWorks, Testimonials, Pricing, FAQ, FinalCTA
  /ui                   # Button, Container, Section, Badge, etc.
  /layout               # Header, Footer, ThemeToggle
/lib
  /copy                 # pt-BR copy as typed constants (i18n-ready)
  /seo.ts               # metadata + JSON-LD helpers
  /utils.ts             # cn(), small helpers only
/public                 # static assets (svgs, screenshots)
```

Rules:

- A section component lives in `components/sections/<Name>/index.tsx` and owns its own subcomponents. Cross-section reuse goes to `components/ui`.
- Copy is **not** inlined in JSX. Import from `lib/copy/*` so future i18n is a swap, not a rewrite.
- No `pages/` directory. App Router only.

---

## 3. Quality gates (must pass before review)

```
pnpm typecheck    # tsc --noEmit
pnpm lint         # eslint, no warnings
pnpm format:check # prettier
pnpm build        # next build, clean output
```

CI must run all four. A PR with any of these red is auto-rejected.

### Lighthouse budget (production build, `next start`)

- Performance ≥ 90 desktop **and** mobile
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95

**Onde rodar:** localmente, em build de produção (`pnpm build && pnpm start`), via `pnpm lighthouse` (wired to `lhci autorun`). Os asserts em `lighthouserc.json` falham se algum score ficar abaixo do budget.

**Por que não em CI (decisão FUL-16):** o runner GitHub-hosted é CPU-throttled e produz Performance ~0.65 em build limpa, contra 0.99 desktop / 1.00 mobile localmente — sinal puramente ruidoso. O gate automático contra **Preview URL** (Vercel ou Cloudflare Pages) está planejado e será reintroduzido na child issue de provisionamento ([FUL-18](/FUL/issues/FUL-18)); enquanto a infra não existir, o gate é manual via PR evidence.

**Evidência obrigatória no PR (substitui o gate de CI):**

- Output do `pnpm lighthouse` (resumo de assertions do `lhci autorun`) colado no corpo do PR.
- Tabela de scores numéricos (Performance, Accessibility, Best Practices, SEO) para desktop **e** mobile do `/`.
- PRs sem essa evidência são rejeitados pelo CTO (§10.2).

### Bundle budget

- First-load JS for `/` ≤ **130 KB** gzipped.
- No single client component > 30 KB gzipped without justification.
- `next build` output (per-route JS size) **must** be pasted in the PR description.

---

## 4. Design principles (Stripe / Vercel / Linear lineage)

- **Dark mode is default.** Light mode is supported via a toggle; both must look intentional, not auto-inverted.
- Restrained gradients (1–2 per page), confident typography, generous whitespace, **glassmorphism used sparingly** (header chrome, maybe one card surface).
- Motion is purposeful: subtle hover lifts, scroll-reveal on hero visuals, animated gradient borders only where it earns attention.
- Never ship the "AI-generic" look: no purple-pink stock gradients across every surface, no center-aligned everything, no rounded-3xl on every card.
- Use the `frontend-design` skill on the implementer side to push past template aesthetics.

### Tokens (defined in `globals.css` as CSS variables)

- Surfaces: `--bg`, `--surface`, `--surface-elevated`, `--border`, `--border-subtle`
- Text: `--fg`, `--fg-muted`, `--fg-subtle`
- Accent: a single brand accent + a complementary glow color
- Radii: `--radius-sm/md/lg`, default `md = 10px`
- Shadows: a soft elevation ramp; no harsh drop shadows

Tailwind reads these via `@theme inline`. Do not hardcode hex values in components.

---

## 5. SEO & metadata

- Use Next's Metadata API (`generateMetadata` or `export const metadata`). No `<Head>`.
- Required on `/`: title, description, canonical, OG (title/description/image), Twitter card (`summary_large_image`), `robots: { index: true, follow: true }`.
- `sitemap.ts` and `robots.ts` are required at the app root.
- OG image generated via `app/opengraph-image.tsx` using `next/og`.
- JSON-LD: include `Organization` and `Product` schemas in the layout or page.

---

## 6. Accessibility

- All interactive elements reachable by keyboard with a visible focus ring (Tailwind `focus-visible:` styles, never `outline-none` alone).
- Contrast ≥ AA (4.5:1 body, 3:1 large text). Verify both themes.
- FAQ accordion: built on Radix Accordion (or equivalent ARIA-correct primitive). No custom div-based show/hide.
- Header nav: skip-to-content link, semantic `<nav>`, `aria-current` on active items.
- Images: meaningful `alt`; decorative SVGs `aria-hidden`.

---

## 7. Performance

- Images go through `next/image` with explicit `width`/`height` or `fill` + sized container. Use AVIF/WebP.
- Fonts via `next/font` with `display: 'swap'` and `preload` only for the primary face.
- Defer non-critical client components with `next/dynamic({ ssr: false })` where it makes sense (e.g. heavy animated visuals below the fold).
- No client-side data fetching on the landing page. Everything is static / RSC.
- No analytics SDK in the first PR — gate behind an env flag if added later.

---

## 8. i18n posture

We ship pt-BR for launch. The structure must allow swapping to `next-intl` (or App Router native i18n) later without rewriting sections.

- All user-facing strings live in `lib/copy/<section>.ts` as typed constants.
- Components accept copy via props or import from `lib/copy`. No string literals in JSX.

---

## 9. Git & PR hygiene

- Branches: `feat/<short-slug>`, `fix/<short-slug>`, `chore/<short-slug>`.
- Commits: imperative present tense, scoped subject ≤ 72 chars. Conventional Commits encouraged (`feat:`, `fix:`, `chore:`, `docs:`).
- Every commit by an agent **must** end with: `Co-Authored-By: Paperclip <noreply@paperclip.ing>`.
- PR description must include:
  - What changed, in one paragraph.
  - Screenshots (light + dark, desktop + mobile) for any visual change.
  - `pnpm build` route size table.
  - Lighthouse scores (desktop + mobile) for `/`.
  - Checklist: typecheck ✅, lint ✅, build ✅, a11y pass ✅.

PRs without screenshots for visual work or without the Lighthouse evidence will be sent back.

---

## 10. CTO review checklist (binding)

A PR is mergeable only when all of these hold:

1. CI green: typecheck, lint, format, build.
2. Lighthouse evidence meets the budget in §3.
3. Bundle sizes within §3 budgets; no surprise dependencies in `package.json`.
4. All seven required sections present and responsive (sm/md/lg/xl).
5. Dark mode is the default; light mode is intentional, not broken.
6. Copy lives in `lib/copy/*`, not inlined.
7. SEO surface (metadata, sitemap, robots, OG image, JSON-LD) is in place.
8. No secrets, no analytics SDKs without a flag, no destructive scripts.
9. Screenshots in PR match the design principles in §4 (no generic-AI aesthetic).

Anything failing → return PR with the exact rule cited.

---

## 11. Out of scope for this repo (for now)

- Auth, user accounts, dashboards.
- Backend API (the NestJS API lives in a separate repo).
- CMS integration — copy is hard-coded in `lib/copy/*` until product decides otherwise.
- Payment integration — pricing CTAs link to `mailto:` or a placeholder route.

Anything in this list requires a new issue + CTO sign-off before work starts.
