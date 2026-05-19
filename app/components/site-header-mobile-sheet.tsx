// Purpose: This file creates the mobile navigation menu (a slide-in panel) opened from the site header.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { headerFocusRing } from "../lib/header-styles";
import { guidesNav, primaryNav } from "../lib/site-nav";
import { SiteHeaderNavLink } from "./site-header-nav-link";
import { SiteHeaderUtilities } from "./site-header-utilities";

const assessmentCtaClassName = `rounded bg-primary-container px-5 py-2.5 font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary shadow-[var(--shadow-institutional)] transition-opacity duration-200 hover:opacity-90 ${headerFocusRing}`;

export function SiteHeaderMobileSheet() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  useEffect(() => {
    if (open) return;
    menuButtonRef.current?.focus();
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((value) => !value)}
        className={`flex h-11 min-w-11 items-center justify-center gap-1.5 rounded border border-outline-variant bg-surface-container-lowest px-3 font-label text-label-md font-semibold tracking-[0.04em] text-primary transition-colors duration-200 hover:bg-surface-container-low ${headerFocusRing}`}
      >
        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
          {open ? "close" : "menu"}
        </span>
        <span>{open ? "Close" : "Menu"}</span>
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 z-[55] bg-inverse-surface/40"
            onClick={close}
          />
          <div
            id={panelId}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-y-0 right-0 z-[60] flex w-[min(100%,20rem)] translate-x-0 flex-col border-l border-outline-variant bg-surface-container-lowest shadow-[var(--shadow-institutional)] transition-transform duration-300 ease-out"
          >
            <div className="flex items-center justify-between border-b border-outline-variant px-4 py-3">
              <span className="font-label text-label-lg font-semibold tracking-[0.05em] text-primary">
                Menu
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className={`flex h-10 w-10 items-center justify-center rounded border border-outline-variant bg-surface text-primary transition-colors duration-200 hover:bg-surface-container-low ${headerFocusRing}`}
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-2" aria-label="Primary">
              {primaryNav.map((item) =>
                "guidesMenu" in item && item.guidesMenu ? (
                  <div key={item.href}>
                    <SiteHeaderNavLink
                      href={item.href}
                      label={item.label}
                      layout="mobile"
                      onNavigate={close}
                    />
                    <div className="border-b border-outline-variant/60 pb-2">
                      {guidesNav.map((guide) => (
                        <Link
                          key={guide.href}
                          href={guide.href}
                          onClick={close}
                          className={`block py-2 pl-8 pr-4 font-label text-label-md transition-colors duration-200 ${headerFocusRing} text-on-surface-variant hover:bg-surface-container-low hover:text-primary`}
                        >
                          {guide.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <SiteHeaderNavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    layout="mobile"
                    onNavigate={close}
                  />
                ),
              )}
            </nav>

            <div className="border-t border-outline-variant px-4 py-4">
              <SiteHeaderUtilities className="mb-stack-md justify-center" />
              <Link
                href="/#contact"
                onClick={close}
                className={`block w-full text-center ${assessmentCtaClassName}`}
              >
                Free Assessment
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
