// Purpose: Collapsible 2026 Guides section inside the mobile navigation sheet.
"use client";

import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { headerFocusRing } from "../lib/header-styles";
import { isGuidesNavActive } from "../lib/site-nav";
import { SiteHeaderGuidesMenu } from "./site-header-guides-menu";
import { SiteHeaderNavLink } from "./site-header-nav-link";

type SiteHeaderMobileGuidesProps = {
  open: boolean;
  onNavigate: () => void;
};

export function SiteHeaderMobileGuides({
  open,
  onNavigate,
}: SiteHeaderMobileGuidesProps) {
  const pathname = usePathname();
  const panelId = useId();
  const guidesActive = isGuidesNavActive(pathname);
  const [expanded, setExpanded] = useState(guidesActive);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (isGuidesNavActive(pathname)) {
      setExpanded(true);
    }
  }

  return (
    <div className="border-b border-outline-variant/60">
      <div className="flex items-stretch">
        <SiteHeaderNavLink
          href="/guides"
          label="2026 Guides"
          layout="mobile"
          onNavigate={onNavigate}
          className="min-w-0 flex-1"
        />
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          aria-label={
            expanded ? "Collapse 2026 Guides" : "Expand 2026 Guides"
          }
          tabIndex={open ? 0 : -1}
          onClick={() => setExpanded((value) => !value)}
          className={`flex w-12 shrink-0 items-center justify-center text-primary transition-colors duration-150 hover:bg-surface-container-low motion-reduce:transition-none ${headerFocusRing}`}
        >
          <span
            className={`material-symbols-outlined text-[22px] transition-transform duration-150 motion-reduce:transition-none ${
              expanded ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            expand_more
          </span>
        </button>
      </div>

      <div
        id={panelId}
        hidden={!expanded}
        className="border-t border-outline-variant/40 pb-1"
      >
        <SiteHeaderGuidesMenu
          pathname={pathname}
          layout="mobile"
          onNavigate={onNavigate}
          tabIndex={open && expanded ? 0 : -1}
        />
      </div>
    </div>
  );
}
