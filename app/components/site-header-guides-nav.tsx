"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerFocusRing } from "../lib/header-styles";
import { guidesNav, isGuidesNavActive } from "../lib/site-nav";

export function SiteHeaderGuidesNav() {
  const pathname = usePathname();
  const active = isGuidesNavActive(pathname);

  return (
    <div className="group relative">
      <Link
        href="/guides"
        aria-current={active ? "page" : undefined}
        aria-haspopup="true"
        className={`inline-flex items-center gap-0.5 font-label text-label-lg font-semibold tracking-[0.05em] transition-colors duration-200 ${headerFocusRing} ${
          active
            ? "text-primary underline decoration-secondary decoration-2 underline-offset-[6px]"
            : "text-on-surface-variant hover:text-secondary"
        }`}
      >
        2026 Guides
        <span
          className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden="true"
        >
          expand_more
        </span>
      </Link>

      <div className="pointer-events-none absolute left-0 top-full z-50 pt-2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="min-w-[15.5rem] rounded-lg border border-outline-variant bg-surface-container-lowest py-2">
          {guidesNav.map((item) => {
            const childActive =
              pathname === item.href ||
              (item.href !== "/guides" && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={childActive ? "page" : undefined}
                className={`block px-4 py-2 font-label text-label-lg transition-colors duration-200 ${headerFocusRing} ${
                  childActive
                    ? "bg-surface-container-low font-semibold text-primary"
                    : "text-on-surface hover:bg-surface-container-low"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
