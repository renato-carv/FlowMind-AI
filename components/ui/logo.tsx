import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  withWordmark?: boolean;
};

export function Logo({ className, withWordmark = true }: LogoProps) {
  return (
    <span className={cn("text-fg inline-flex items-center gap-2", className)}>
      <span
        aria-hidden
        className="from-accent to-glow text-accent-fg shadow-soft relative grid h-7 w-7 place-items-center rounded-[8px] bg-gradient-to-br"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
          <path
            d="M5 6.5C5 5.67 5.67 5 6.5 5h5.5a4 4 0 014 4v2.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M19 17.5c0 .83-.67 1.5-1.5 1.5H12a4 4 0 01-4-4V12.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="6.5" cy="17.5" r="1.6" fill="currentColor" />
          <circle cx="17.5" cy="6.5" r="1.6" fill="currentColor" />
        </svg>
      </span>
      {withWordmark ? (
        <span className="text-[15px] font-semibold tracking-tight">
          FlowMind <span className="text-fg-muted">AI</span>
        </span>
      ) : null}
    </span>
  );
}
