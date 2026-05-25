// Purpose: Shared guide links for desktop dropdown and mobile accordion.
import Link from "next/link";
import type { HeaderTheme } from "../lib/header-styles";
import { headerFocusRing } from "../lib/header-styles";
import { guidesNav, isGuideChildActive } from "../lib/site-nav";

type SiteHeaderGuidesMenuProps = {
  pathname: string;
  layout: "dropdown" | "mobile";
  theme?: HeaderTheme;
  onNavigate?: () => void;
  tabIndex?: number;
};

export function SiteHeaderGuidesMenu({
  pathname,
  layout,
  theme = "default",
  onNavigate,
  tabIndex,
}: SiteHeaderGuidesMenuProps) {
  const mobileActiveClass =
    "border-l-[3px] border-secondary bg-surface-container-low pl-[calc(2.5rem-3px)] font-semibold text-primary";
  const mobileInactiveClass =
    "pl-10 text-on-surface-variant hover:bg-surface-container-low hover:text-primary";

  return (
    <>
      {guidesNav.map((item) => {
        const childActive = isGuideChildActive(pathname, item.href);

        if (layout === "dropdown") {
          const inactiveClass =
            theme === "hero"
              ? "text-on-primary hover:bg-on-primary/10 hover:text-on-primary"
              : "text-on-surface hover:bg-surface-container-low hover:text-secondary";

          return (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              tabIndex={tabIndex}
              aria-current={childActive ? "page" : undefined}
              onClick={onNavigate}
              className={`block px-4 py-2.5 font-label text-label-lg transition-colors duration-150 motion-reduce:transition-none ${headerFocusRing} ${
                childActive
                  ? "bg-surface-container-low font-semibold text-primary"
                  : inactiveClass
              }`}
            >
              {item.label}
            </Link>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            role="menuitem"
            tabIndex={tabIndex}
            aria-current={childActive ? "page" : undefined}
            onClick={onNavigate}
            className={`block min-h-11 py-3 pr-margin-mobile font-label text-label-md transition-colors duration-150 motion-reduce:transition-none ${headerFocusRing} ${
              childActive ? mobileActiveClass : mobileInactiveClass
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
