// Purpose: Wordmark + monogram link for the site header and mobile sheet.
import Link from "next/link";
import type { HeaderTheme } from "../lib/header-styles";
import { headerFocusRing } from "../lib/header-styles";
import { SiteHeaderLogoMark } from "./site-header-logo-mark";

type SiteHeaderBrandProps = {
  theme?: HeaderTheme;
  onNavigate?: () => void;
  className?: string;
};

export function SiteHeaderBrand({
  theme = "default",
  onNavigate,
  className = "",
}: SiteHeaderBrandProps) {
  const wordmarkClass =
    theme === "hero"
      ? "text-on-primary"
      : "text-primary";

  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label="USD Immigration home"
      className={`flex min-w-0 max-w-[min(100%,14rem)] items-center gap-2 rounded-sm transition-opacity duration-150 hover:opacity-85 sm:max-w-none ${headerFocusRing} ${className}`}
    >
      <SiteHeaderLogoMark theme={theme} />
      <span
        className={`truncate font-headline text-headline-md font-semibold ${wordmarkClass}`}
      >
        USD Immigration
      </span>
    </Link>
  );
}
