// Purpose: Sync URL hash with React state and scroll in-page targets past the sticky header.
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

export function useHashScrollSync(): void {
  const pathname = usePathname();
  const hash = useLocationHash();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [pathname, hash]);
}
