// Purpose: Desktop "2026 Guides" menu with hover, click, keyboard, and outside-dismiss.
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
import {
  desktopNavLinkBase,
  desktopNavLinkStateClass,
  headerFocusRing,
  type HeaderTheme,
} from "../lib/header-styles";
import { isGuidesNavActive } from "../lib/site-nav";
import { SiteHeaderGuidesMenu } from "./site-header-guides-menu";

const HOVER_CLOSE_MS = 120;

function subscribeHoverCapability(onStoreChange: () => void) {
  const mq = window.matchMedia("(hover: hover)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getHoverCapability() {
  return window.matchMedia("(hover: hover)").matches;
}

type SiteHeaderGuidesNavProps = {
  theme?: HeaderTheme;
};

export function SiteHeaderGuidesNav({ theme = "default" }: SiteHeaderGuidesNavProps) {
  const pathname = usePathname();
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const canHover = useSyncExternalStore(
    subscribeHoverCapability,
    getHoverCapability,
    () => false,
  );
  const active = isGuidesNavActive(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpen(false), HOVER_CLOSE_MS);
  }, [clearCloseTimer]);

  const closeMenu = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) {
      toggleRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open, closeMenu]);

  useEffect(() => () => clearCloseTimer(), [clearCloseTimer]);

  const onMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }
    if (!open && (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      setOpen(true);
      return;
    }
    if (!open) return;

    const items = rootRef.current?.querySelectorAll<HTMLElement>(
      '[role="menuitem"]',
    );
    if (!items?.length) return;

    const currentIndex = Array.from(items).indexOf(
      document.activeElement as HTMLElement,
    );

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = items[(currentIndex + 1) % items.length];
      next?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const prev =
        items[(currentIndex - 1 + items.length) % items.length];
      prev?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      items[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      items[items.length - 1]?.focus();
    }
  };

  return (
    <div
      ref={rootRef}
      className="relative focus-within:z-50"
      onFocusCapture={() => {
        if (!canHover) setOpen(true);
      }}
      onMouseEnter={() => {
        if (!canHover) return;
        clearCloseTimer();
        setOpen(true);
      }}
      onMouseLeave={() => {
        if (!canHover) return;
        scheduleClose();
      }}
      onKeyDown={onMenuKeyDown}
    >
      <div className="inline-flex items-center">
        <Link
          href="/guides"
          aria-current={active ? "page" : undefined}
          className={`${desktopNavLinkBase} ${headerFocusRing} ${desktopNavLinkStateClass(theme, active)}`}
        >
          2026 Guides
        </Link>
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-haspopup="menu"
          aria-label={open ? "Close 2026 Guides menu" : "Open 2026 Guides menu"}
          onClick={() => setOpen((value) => !value)}
          className={`-ml-1 flex h-11 min-w-11 items-center justify-center rounded ${headerFocusRing} ${desktopNavLinkStateClass(theme, active)}`}
        >
          <span
            className={`material-symbols-outlined text-[18px] transition-transform duration-150 motion-reduce:transition-none ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            expand_more
          </span>
        </button>
      </div>

      <div
        aria-hidden={!open}
        className={`absolute left-0 top-full z-50 transition-opacity duration-150 motion-reduce:transition-none ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        {...(!open ? { inert: true } : {})}
      >
        {/* Invisible bridge prevents hover flicker in the gap */}
        <div className="h-2 w-full" aria-hidden="true" />
        <div
          id={menuId}
          role="menu"
          aria-label="2026 Guides"
          className="min-w-[15.5rem] overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest py-1 shadow-[var(--shadow-institutional)]"
        >
          <SiteHeaderGuidesMenu
            pathname={pathname}
            layout="dropdown"
            theme="default"
            tabIndex={open ? 0 : -1}
          />
        </div>
      </div>
    </div>
  );
}
