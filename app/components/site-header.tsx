// Purpose: This file creates the top bar of the website, including the brand name, navigation links, and main action button.
import Link from "next/link";
import { primaryNav } from "../lib/site-nav";
import { headerFocusRing, SiteHeaderNavLink } from "./site-header-nav-link";

const assessmentCtaClassName = `rounded bg-primary-container px-5 py-2.5 font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary shadow-[var(--shadow-institutional)] transition-opacity duration-200 hover:opacity-90 ${headerFocusRing}`;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface shadow-[var(--shadow-institutional)]">
      <div className="mx-auto flex h-14 w-full max-w-container-max items-center justify-between gap-stack-sm px-4 md:h-16 md:gap-gutter md:px-margin-desktop">
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
          {primaryNav.map((item) => (
            <SiteHeaderNavLink
              key={item.href}
              href={item.href}
              label={item.label}
              layout="desktop"
            />
          ))}
        </nav>

        <div className="flex items-center gap-stack-sm">
          <Link
            href="/#contact"
            className={`hidden sm:inline-flex ${assessmentCtaClassName}`}
          >
            Free Assessment
          </Link>

          <details className="group relative md:hidden">
            <summary
              aria-label="Toggle navigation menu"
              className={`flex h-11 min-w-11 list-none cursor-pointer items-center gap-1.5 rounded border border-outline-variant bg-surface-container-lowest px-3 font-label text-label-md font-semibold tracking-[0.04em] text-primary marker:hidden group-open:bg-surface-container-low [&::-webkit-details-marker]:hidden ${headerFocusRing}`}
            >
              <span className="material-symbols-outlined text-[18px]">menu</span>
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-52 rounded border border-outline-variant bg-surface-container-lowest py-2 shadow-[var(--shadow-institutional)]">
              {primaryNav.map((item) => (
                <SiteHeaderNavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  layout="mobile"
                />
              ))}
              <Link
                href="/#contact"
                className={`mt-1 block border-t border-outline-variant px-4 py-3 ${assessmentCtaClassName}`}
              >
                Free Assessment
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
