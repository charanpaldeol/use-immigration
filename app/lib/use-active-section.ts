// Purpose: Scroll-spy that reports the homepage section under the viewport reading line, shared via context.
"use client";

import { createContext, useEffect, useState } from "react";

// Active in-page hash (e.g. "#services") for the section currently under the
// viewport reading line, or "" when none. Drives the header nav highlight on
// the homepage. Kept in "#id" form so it slots into isNavLinkActive unchanged.
export const ActiveSectionContext = createContext<string>("");

// A thin horizontal band just above the viewport center. A section becomes
// active while it crosses this band, so the highlight tracks scrolling without
// depending on URL hash changes (which Next's client navigation does not emit).
const READING_LINE_MARGIN = "-40% 0px -50% 0px";

export function useActiveSection(
  sectionIds: readonly string[],
  enabled: boolean,
): string {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    if (!enabled) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const intersecting = new Set<string>();

    // When more than one section straddles the band mid-handoff, prefer the
    // topmost (smallest live top) so the outgoing section stays lit until it
    // fully clears the band — avoids flicker between adjacent sections.
    const recompute = () => {
      let activeId = "";
      let smallestTop = Infinity;
      intersecting.forEach((id) => {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top < smallestTop) {
          smallestTop = top;
          activeId = id;
        }
      });
      setActiveHash(activeId ? `#${activeId}` : "");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        }
        recompute();
      },
      { rootMargin: READING_LINE_MARGIN, threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    // Reset on teardown (e.g. navigating off the homepage) so a later remount
    // starts clean instead of flashing a stale highlight.
    return () => {
      observer.disconnect();
      setActiveHash("");
    };
  }, [sectionIds, enabled]);

  return activeHash;
}
