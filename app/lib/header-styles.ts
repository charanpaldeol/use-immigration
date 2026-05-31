// Purpose: Shared focus-ring, nav link utilities, and header theme classes.
export type HeaderTheme = "default" | "hero";

export const headerFocusRing =
  "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]";

/** Shared shell for every desktop nav item (single link or link + chevron). */
export const desktopNavItemWrapper =
  "inline-flex min-h-11 items-center rounded border-b-2 pb-0.5";

export const desktopNavLinkBase =
  "inline-flex items-center rounded px-2.5 py-1.5 font-label text-label-lg font-semibold tracking-[0.05em] transition-[color,background-color,box-shadow,border-color] duration-150 motion-reduce:transition-none";

/** Applied on the nav item wrapper so one indicator spans label + optional icon. */
export const desktopNavLinkActive =
  "border-secondary text-primary";

export const desktopNavLinkInactive =
  "border-transparent text-on-surface-variant hover:bg-surface-container-low hover:text-secondary";

export const desktopNavLinkActiveHero =
  "border-secondary text-on-primary";

export const desktopNavLinkInactiveHero =
  "border-transparent text-on-primary/85 hover:bg-on-primary/10 hover:text-on-primary";

export const desktopNavChevronButton = `inline-flex h-11 w-9 shrink-0 items-center justify-center rounded bg-transparent text-inherit ${headerFocusRing}`;

export function desktopNavLinkStateClass(
  theme: HeaderTheme,
  active: boolean,
): string {
  const state = (() => {
    if (theme === "hero") {
      return active ? desktopNavLinkActiveHero : desktopNavLinkInactiveHero;
    }
    return active ? desktopNavLinkActive : desktopNavLinkInactive;
  })();
  return `${desktopNavItemWrapper} ${state}`;
}

/** Child link/button inside a nav item wrapper — no per-child underline. */
export const desktopNavLinkChildClass = "no-underline decoration-transparent";

export function headerShellClass(theme: HeaderTheme, scrolled: boolean): string {
  const base =
    "header-glass-blur sticky top-0 z-50 w-full transition-[box-shadow,background-color,border-color] duration-200 motion-reduce:transition-none";

  if (theme === "hero" && !scrolled) {
    return `${base} border-b border-on-primary/15 bg-primary-container/90 text-on-primary shadow-none supports-[backdrop-filter]:bg-primary-container/85`;
  }

  return `${base} border-b border-outline-variant bg-surface/95 shadow-none supports-[backdrop-filter]:bg-surface/90 ${
    scrolled ? "shadow-[var(--shadow-institutional)]" : ""
  }`;
}

const headerCtaSharedClassName = `items-center justify-center rounded px-5 py-2.5 font-label text-label-lg font-semibold tracking-[0.05em] shadow-[var(--shadow-institutional)] transition-[opacity,background-color] duration-150 motion-reduce:transition-none ${headerFocusRing}`;

export const headerCtaClassName = `inline-flex bg-primary-container text-on-primary hover:bg-primary ${headerCtaSharedClassName}`;

export const headerCtaClassNameHero = `inline-flex bg-secondary text-on-secondary hover:bg-secondary-container ${headerCtaSharedClassName}`;

export function headerCtaClass(theme: HeaderTheme): string {
  return theme === "hero" ? headerCtaClassNameHero : headerCtaClassName;
}

export const headerCtaCompactClassName = `inline-flex items-center justify-center rounded bg-primary-container px-3 py-2 font-label text-label-md font-semibold tracking-[0.05em] text-on-primary shadow-[var(--shadow-institutional)] transition-[opacity,background-color] duration-150 hover:bg-primary motion-reduce:transition-none sm:hidden ${headerFocusRing}`;

export const headerCtaCompactClassNameHero = `inline-flex items-center justify-center rounded bg-secondary px-3 py-2 font-label text-label-md font-semibold tracking-[0.05em] text-on-secondary shadow-[var(--shadow-institutional)] transition-[opacity,background-color] duration-150 hover:bg-secondary-container motion-reduce:transition-none sm:hidden ${headerFocusRing}`;

export function headerCtaCompactClass(theme: HeaderTheme): string {
  return theme === "hero" ? headerCtaCompactClassNameHero : headerCtaCompactClassName;
}

export const headerCtaFullClassName = `hidden sm:inline-flex bg-primary-container text-on-primary hover:bg-primary ${headerCtaSharedClassName}`;

export const headerCtaFullClassNameHero = `hidden sm:inline-flex bg-secondary text-on-secondary hover:bg-secondary-container ${headerCtaSharedClassName}`;

export function headerCtaFullClass(theme: HeaderTheme): string {
  return theme === "hero" ? headerCtaFullClassNameHero : headerCtaFullClassName;
}

export const utilityButtonClassName = `appearance-none select-none flex h-11 min-w-11 items-center justify-center rounded border border-outline-variant bg-surface-container-lowest text-primary transition-colors duration-150 hover:bg-surface-container-low hover:text-secondary motion-reduce:transition-none ${headerFocusRing}`;

export const utilityButtonClassNameHero = `appearance-none select-none flex h-11 min-w-11 items-center justify-center rounded border border-on-primary/20 bg-on-primary/10 text-on-primary transition-colors duration-150 hover:bg-on-primary/15 hover:text-on-primary motion-reduce:transition-none ${headerFocusRing}`;

export function utilityButtonClass(theme: HeaderTheme): string {
  return theme === "hero" ? utilityButtonClassNameHero : utilityButtonClassName;
}
