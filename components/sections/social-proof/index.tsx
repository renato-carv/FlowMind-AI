import { Container } from "@/components/ui/container";
import { Eyebrow, Section } from "@/components/ui/section";
import { socialProof } from "@/lib/copy/social-proof";

export function SocialProof() {
  return (
    <Section
      aria-labelledby="social-proof-heading"
      className="border-border/60 border-y py-14 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="flex flex-col items-center gap-3 text-center">
          <Eyebrow>{socialProof.eyebrow}</Eyebrow>
          <h2
            id="social-proof-heading"
            className="text-fg-muted max-w-2xl text-sm font-medium tracking-tight text-balance sm:text-base"
          >
            {socialProof.headline}
          </h2>
        </div>

        <ul
          role="list"
          className="mt-10 grid grid-cols-3 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-10"
        >
          {socialProof.logos.map((logo) => {
            const aspect = logo.width / logo.height;
            return (
              <li key={logo.name} className="flex items-center justify-center">
                <span
                  role="img"
                  aria-label={logo.name}
                  className="text-fg-muted hover:text-fg block h-7 opacity-70 transition-opacity duration-200 hover:opacity-100"
                  style={{
                    width: `${aspect * 1.75}rem`,
                    backgroundColor: "currentColor",
                    WebkitMaskImage: `url(${logo.src})`,
                    maskImage: `url(${logo.src})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
              </li>
            );
          })}
        </ul>

        <dl className="mt-12 grid grid-cols-1 divide-y divide-[hsl(var(--border-subtle))] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {socialProof.metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center px-4 py-5 text-center sm:py-2"
            >
              <dt className="text-fg text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">
                {metric.value}
              </dt>
              <dd className="text-fg-muted mt-2 max-w-[18ch] text-sm text-pretty">
                {metric.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
