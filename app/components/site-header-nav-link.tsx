"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { headerFocusRing } from "../lib/header-styles";
import { isNavLinkActive } from "../lib/site-nav";

export function useLocationHash(): string {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  return hash;
}

type SiteHeaderNavLinkProps = {
  href: string;
  label: string;
  layout: "desktop" | "mobile";
  onNavigate?: () => void;
};

export function SiteHeaderNavLink({
  href,
  label,
  layout,
  onNavigate,
}: SiteHeaderNavLinkProps) {
  const pathname = usePathname();
  const hash = useLocationHash();
  const active = isNavLinkActive(pathname, hash, href);
  const ariaCurrent = active ? "page" : undefined;

  if (layout === "desktop") {
    return (
      <Link
        href={href}
        onClick={onNavigate}
        aria-current={ariaCurrent}
        className={`font-label text-label-lg font-semibold tracking-[0.05em] transition-colors duration-200 ${headerFocusRing} ${
          active
            ? "text-primary underline decoration-secondary decoration-2 underline-offset-[6px]"
            : "text-on-surface-variant hover:text-secondary"
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={ariaCurrent}
      className={`block px-4 py-2 font-label text-label-lg transition-colors duration-200 ${headerFocusRing} ${
        active
          ? "bg-surface-container-low font-semibold text-primary"
          : "text-on-surface hover:bg-surface-container-low"
      }`}
    >
      {label}
    </Link>
  );
}
