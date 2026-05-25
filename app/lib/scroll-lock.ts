// Purpose: Lock body scroll when overlays open; compensate for scrollbar width.
export function lockBodyScroll(): () => void {
  const previousOverflow = document.body.style.overflow;
  const previousPaddingRight = document.body.style.paddingRight;
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  document.body.style.overflow = "hidden";
  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }

  return () => {
    document.body.style.overflow = previousOverflow;
    document.body.style.paddingRight = previousPaddingRight;
  };
}
