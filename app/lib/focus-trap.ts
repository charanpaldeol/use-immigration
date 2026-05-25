// Purpose: Trap Tab focus within a container and restore focus on teardown.
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((el) => {
    if (el.hasAttribute("disabled") || el.tabIndex === -1) return false;
    if (el.getAttribute("aria-hidden") === "true") return false;
    if (typeof el.checkVisibility === "function") {
      return el.checkVisibility();
    }
    const style = window.getComputedStyle(el);
    return style.visibility !== "hidden" && style.display !== "none";
  });
}

export function trapTabKey(
  container: HTMLElement,
  event: KeyboardEvent,
): void {
  if (event.key !== "Tab") return;

  const focusable = getFocusableElements(container);
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement as HTMLElement | null;

  if (event.shiftKey) {
    if (active === first || !container.contains(active)) {
      event.preventDefault();
      last.focus();
    }
    return;
  }

  if (active === last || !container.contains(active)) {
    event.preventDefault();
    first.focus();
  }
}
