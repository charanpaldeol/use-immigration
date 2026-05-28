// Purpose: Mobile slide-in navigation; menu control is portaled to body for reliable touch on iOS.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { getFocusableElements, trapTabKey } from "../lib/focus-trap";
import { lockBodyScroll } from "../lib/scroll-lock";
import { headerCtaClassName } from "../lib/header-styles";
import { headerFocusRing } from "../lib/header-styles";
import { primaryNav } from "../lib/site-nav";
import { SiteHeaderBrand } from "./site-header-brand";
import { SiteHeaderMobileGuides } from "./site-header-mobile-guides";
import { SiteHeaderNavLink } from "./site-header-nav-link";
import { SiteHeaderUtilities } from "./site-header-utilities";

const menuButtonClassName = `pointer-events-auto flex h-11 min-w-11 cursor-pointer items-center justify-center rounded border border-outline-variant bg-surface-container-lowest text-primary [-webkit-tap-highlight-color:transparent] [touch-action:manipulation] transition-colors duration-150 hover:bg-surface-container-low hover:text-secondary motion-reduce:transition-none ${headerFocusRing}`;

function subscribeClientOnly() {
  return () => {};
}

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SiteHeaderMobileSheet() {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(subscribeClientOnly, () => true, () => false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => true,
  );
  const pathname = usePathname();
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prevPathnameRef = useRef(pathname);
  const suppressClickRef = useRef(false);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((value) => !value), []);

  const activateToggle = useCallback(() => {
    suppressClickRef.current = true;
    toggle();
    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 400);
  }, [toggle]);

  useEffect(() => {
    if (prevPathnameRef.current === pathname) return;
    prevPathnameRef.current = pathname;
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    return lockBodyScroll();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      const panel = panelRef.current;
      if (panel) trapTabKey(panel, event);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      requestAnimationFrame(() => {
        const panel = panelRef.current;
        const focusTarget =
          closeButtonRef.current ??
          (panel ? getFocusableElements(panel)[0] : null);
        focusTarget?.focus();
      });
      return;
    }

    const previous = previousFocusRef.current;
    previousFocusRef.current = null;
    requestAnimationFrame(() => {
      if (menuToggleRef.current?.isConnected) {
        menuToggleRef.current.focus();
      } else {
        previous?.focus();
      }
    });
  }, [open]);

  const [panelEntered, setPanelEntered] = useState(false);

  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => setPanelEntered(true));
    // Reset on teardown (close/unmount) so the slide-in re-arms for the next open.
    return () => {
      cancelAnimationFrame(frame);
      setPanelEntered(false);
    };
  }, [open]);

  const panelMotionClass = reducedMotion
    ? "translate-x-0"
    : `transition-transform duration-200 ease-out motion-reduce:transition-none ${
        panelEntered ? "translate-x-0" : "translate-x-full"
      }`;

  const overlay =
    open && mounted ? (
      <div className="fixed inset-0 z-[200] md:hidden" role="presentation">
        <button
          type="button"
          aria-label="Close navigation menu"
          className="absolute inset-0 cursor-pointer [-webkit-tap-highlight-color:transparent] [touch-action:manipulation] bg-inverse-surface/40"
          onPointerUp={(event) => {
            if (event.button !== 0) return;
            close();
          }}
        />

        <div
          id={panelId}
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`fixed inset-y-0 right-0 z-[201] flex w-[min(100%,20rem)] flex-col border-l border-outline-variant bg-surface-container-lowest pt-[env(safe-area-inset-top,0px)] shadow-[var(--shadow-institutional)] ${panelMotionClass}`}
        >
          <div className="flex h-header-height shrink-0 items-center justify-between gap-2 border-b border-outline-variant px-margin-mobile">
            <SiteHeaderBrand onNavigate={close} className="min-w-0 flex-1" />
            <button
              ref={closeButtonRef}
              type="button"
              onPointerUp={(event) => {
                if (event.button !== 0) return;
                close();
              }}
              aria-label="Close menu"
              className={`${menuButtonClassName} bg-surface`}
            >
              <span className="material-symbols-outlined pointer-events-none text-[22px]">
                close
              </span>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-2" aria-label="Primary">
            {primaryNav.map((item) =>
              "guidesMenu" in item && item.guidesMenu ? (
                <SiteHeaderMobileGuides
                  key={item.href}
                  open={open}
                  onNavigate={close}
                />
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

          <div className="shrink-0 border-t border-outline-variant px-margin-mobile py-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
            <SiteHeaderUtilities className="mb-stack-md justify-center" />
            <Link
              href="/#contact"
              onClick={close}
              className={`block w-full text-center [-webkit-tap-highlight-color:transparent] [touch-action:manipulation] ${headerCtaClassName}`}
            >
              Free Assessment
            </Link>
          </div>
        </div>
      </div>
    ) : null;

  const menuToggle =
    mounted ? (
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[210] pt-[env(safe-area-inset-top,0px)] md:hidden">
        <div className="mx-auto flex h-header-height w-full max-w-container-max items-center justify-end px-margin-mobile">
          <button
            ref={menuToggleRef}
            type="button"
            aria-expanded={open}
            aria-controls={open ? panelId : undefined}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className={menuButtonClassName}
            onPointerUp={(event) => {
              if (event.button !== 0) return;
              event.stopPropagation();
              activateToggle();
            }}
            onClick={(event) => {
              if (suppressClickRef.current) event.preventDefault();
            }}
          >
            <span
              className="material-symbols-outlined pointer-events-none text-[22px]"
              aria-hidden="true"
            >
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
    ) : null;

  if (!mounted) return null;

  return (
    <>
      {createPortal(menuToggle, document.body)}
      {overlay ? createPortal(overlay, document.body) : null}
    </>
  );
}
