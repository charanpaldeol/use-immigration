// Purpose: This file creates the top bar of the website, including the brand name, navigation links, and main action button.
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { headerFocusRing } from "../lib/header-styles";
import { primaryNav } from "../lib/site-nav";
import { SiteHeaderGuidesNav } from "./site-header-guides-nav";
import { SiteHeaderMobileSheet } from "./site-header-mobile-sheet";
import { SiteHeaderNavLink } from "./site-header-nav-link";
import { SiteHeaderUtilities } from "./site-header-utilities";

const assessmentCtaClassName = `rounded bg-primary-container px-5 py-2.5 font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary shadow-[var(--shadow-institutional)] transition-opacity duration-200 hover:opacity-90 ${headerFocusRing}`;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-outline-variant bg-surface transition-[box-shadow] duration-200 ${
        scrolled
          ? "shadow-none"
          : "shadow-[var(--shadow-institutional)]"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-container-max items-center justify-between gap-stack-sm px-4 transition-[height] duration-200 md:gap-gutter md:px-margin-desktop ${
          scrolled ? "h-14" : "h-14 md:h-16"
        }`}
      >
        <Link
          href="/"
          className={`shrink-0 font-headline text-headline-md font-semibold text-primary ${headerFocusRing} rounded-sm`}
        >
          USD Immigration
        </Link>

        <nav
          className="hidden items-center gap-gutter md:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) =>
            "guidesMenu" in item && item.guidesMenu ? (
              <SiteHeaderGuidesNav key={item.href} />
            ) : (
              <SiteHeaderNavLink
                key={item.href}
                href={item.href}
                label={item.label}
                layout="desktop"
              />
            ),
          )}
        </nav>

        <div className="flex items-center gap-stack-sm">
          <SiteHeaderUtilities className="hidden lg:flex" />

          <Link
            href="/#contact"
            className={`hidden sm:inline-flex ${assessmentCtaClassName}`}
          >
            Free Assessment
          </Link>

          <SiteHeaderMobileSheet />
        </div>
      </div>
    </header>
  );
}
