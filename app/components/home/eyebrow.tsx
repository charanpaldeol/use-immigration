// Purpose: Shared uppercase label used in homepage section headers.
import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "light" | "dark";
};

export function Eyebrow({ children, tone = "light" }: EyebrowProps) {
  return (
    <p
      className={`font-label text-label-md font-semibold uppercase tracking-[0.12em] ${
        tone === "dark" ? "text-on-primary/70" : "text-secondary"
      }`}
    >
      {children}
    </p>
  );
}
