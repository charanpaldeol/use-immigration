// Purpose: Header navigation link with active state for routes and in-page hashes.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import {
  desktopNavLinkBase,
  desktopNavLinkStateClass,
  headerFocusRing,
  type HeaderTheme,
} from "../lib/header-styles";
import { ActiveSectionContext } from "../lib/use-active-section";
import { isNavLinkActive } from "../lib/site-nav";

type SiteHeaderNavLinkProps = {
  href: string;
  label: string;
  shortLabel?: string;
  layout: "desktop" | "mobile";
  theme?: HeaderTheme;
  onNavigate?: () => void;
  className?: string;
};

export function SiteHeaderNavLink({
  href,
  label,
  shortLabel,
  layout,
  theme = "default",
  onNavigate,
  className = "",
}: SiteHeaderNavLinkProps) {
  const pathname = usePathname();
  const activeHash = useContext(ActiveSectionContext);
  const active = isNavLinkActive(pathname, activeHash, href);
  const ariaCurrent = active ? "page" : undefined;

  if (layout === "desktop") {
    return (
      <Link
        href={href}
        onClick={onNavigate}
        aria-current={ariaCurrent}
        className={`${desktopNavLinkBase} ${headerFocusRing} ${desktopNavLinkStateClass(theme, active)} ${className}`}
      >
        {shortLabel ? (
          <>
            <span className="lg:hidden">{shortLabel}</span>
            <span className="hidden lg:inline">{label}</span>
          </>
        ) : (
          label
        )}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={ariaCurrent}
      className={`block min-h-11 px-margin-mobile py-3 font-label text-label-lg transition-colors duration-150 motion-reduce:transition-none ${headerFocusRing} ${
        active
          ? "border-l-[3px] border-secondary bg-surface-container-low pl-[calc(var(--spacing-margin-mobile)-3px)] font-semibold text-primary"
          : "text-on-surface hover:bg-surface-container-low hover:text-primary"
      } ${className}`}
    >
      {label}
    </Link>
  );
}
