// Purpose: Primary navigation links and active-state helpers for the site header.
export const primaryNav = [
  { href: "/#services", label: "Services" },
  { href: "/guides", label: "2026 Guides", guidesMenu: true },
  { href: "/#process", label: "How We Work", shortLabel: "Process" },
  { href: "/about", label: "About Us" },
] as const;

// In-page section ids for the homepage scroll-spy, derived from the nav hashes
// (e.g. "/#services" -> "services") so the two stay in sync.
export const homeSectionIds = primaryNav
  .filter((item) => item.href.startsWith("/#"))
  .map((item) => item.href.slice(2));

export const guidesNav = [
  { href: "/guides/express-entry-2026", label: "Express Entry 2026" },
  { href: "/guides/oinp-2026-niagara", label: "OINP Niagara 2026" },
  { href: "/guides/tr-to-pr-2026", label: "TR to PR 2026" },
  { href: "/guides/work-permits-2026", label: "Work Permits 2026" },
  { href: "/guides/pr-citizenship-2026", label: "PR & Citizenship 2026" },
  { href: "/guides/humanitarian-appeals-2026", label: "Humanitarian & Appeals 2026" },
  { href: "/guides", label: "All 2026 Guides" },
] as const;

export function isNavLinkActive(
  pathname: string,
  hash: string,
  href: string,
): boolean {
  if (href.startsWith("/#")) {
    return pathname === "/" && hash === href.slice(1);
  }
  if (href === "/guides") {
    return pathname === "/guides" || pathname.startsWith("/guides/");
  }
  return pathname === href;
}

export function isGuidesNavActive(pathname: string): boolean {
  return pathname === "/guides" || pathname.startsWith("/guides/");
}

export function isGuideChildActive(pathname: string, href: string): boolean {
  return (
    pathname === href ||
    (href !== "/guides" && pathname.startsWith(`${href}/`))
  );
}
