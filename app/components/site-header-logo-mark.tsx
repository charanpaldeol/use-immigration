// Purpose: Monogram mark paired with the USD Immigration wordmark in the header.
import type { HeaderTheme } from "../lib/header-styles";

type SiteHeaderLogoMarkProps = {
  theme?: HeaderTheme;
  className?: string;
};

export function SiteHeaderLogoMark({
  theme = "default",
  className = "",
}: SiteHeaderLogoMarkProps) {
  const shellClass =
    theme === "hero"
      ? "border-on-primary/25 bg-on-primary text-primary-container"
      : "border-outline-variant bg-primary-container text-on-primary";

  return (
    <span
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded border font-headline text-[11px] font-bold leading-none tracking-tight ${shellClass} ${className}`}
      aria-hidden="true"
    >
      USD
    </span>
  );
}
