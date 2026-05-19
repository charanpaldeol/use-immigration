// Purpose: Shared primary navigation links for the site header and footer.
export const primaryNav = [
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/guides", label: "2026 Guides", guidesMenu: true },
  { href: "/#contact", label: "Contact" },
] as const;

export const guidesNav = [
  { href: "/guides/express-entry-2026", label: "Express Entry 2026" },
  { href: "/guides/oinp-2026-niagara", label: "OINP Niagara 2026" },
  { href: "/guides/tr-to-pr-2026", label: "TR to PR 2026" },
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
