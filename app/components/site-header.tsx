// Purpose: Sticky site header with primary nav, utilities, CTA, and homepage hero theme.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  headerCtaCompactClass,
  headerCtaFullClass,
  headerShellClass,
  type HeaderTheme,
} from "../lib/header-styles";
import { useHashScrollSync } from "../lib/use-location-hash";
import { ActiveSectionContext, useActiveSection } from "../lib/use-active-section";
import { homeSectionIds, primaryNav } from "../lib/site-nav";
import { SiteHeaderBrand } from "./site-header-brand";
import { SiteHeaderGuidesNav } from "./site-header-guides-nav";
import { SiteHeaderMobileSheet } from "./site-header-mobile-sheet";
import { SiteHeaderNavLink } from "./site-header-nav-link";
import { SiteHeaderUtilities } from "./site-header-utilities";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const theme: HeaderTheme = isHome && !scrolled ? "hero" : "default";
  const activeHash = useActiveSection(homeSectionIds, isHome);

  useHashScrollSync();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ActiveSectionContext.Provider value={activeHash}>
      <header className={headerShellClass(theme, scrolled)}>
      <div className="mx-auto flex h-header-height w-full max-w-container-max items-center justify-between gap-stack-sm px-margin-mobile md:gap-2 lg:gap-gutter md:px-margin-desktop">
        <SiteHeaderBrand theme={theme} />

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 md:flex lg:gap-1"
          aria-label="Primary"
        >
          {primaryNav.map((item) =>
            "guidesMenu" in item && item.guidesMenu ? (
              <SiteHeaderGuidesNav key={item.href} theme={theme} />
            ) : (
              <SiteHeaderNavLink
                key={item.href}
                href={item.href}
                label={item.label}
                shortLabel={"shortLabel" in item ? item.shortLabel : undefined}
                layout="desktop"
                theme={theme}
              />
            ),
          )}
        </nav>

        <div className="relative z-[60] flex shrink-0 items-center gap-1 sm:gap-stack-sm">
          <SiteHeaderUtilities
            className="flex md:hidden"
            theme={theme}
            variant="whatsapp"
          />
          <SiteHeaderUtilities className="hidden md:flex" theme={theme} />

          <Link
            href="/#contact"
            className={headerCtaCompactClass(theme)}
            aria-label="Free Assessment"
          >
            Assessment
          </Link>
          <Link href="/#contact" className={headerCtaFullClass(theme)}>
            Free Assessment
          </Link>

          {/* Spacer for portaled mobile menu button (see SiteHeaderMobileSheet) */}
          <div className="h-11 w-11 shrink-0 md:hidden" aria-hidden="true" />
        </div>
      </div>
      </header>
      <SiteHeaderMobileSheet />
    </ActiveSectionContext.Provider>
  );
}
