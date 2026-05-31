// Purpose: Typography helpers for long-form guide content.
import type { ReactNode } from "react";

export function GuideH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary first:mt-0">
      {children}
    </h2>
  );
}

export function GuideP({ children }: { children: ReactNode }) {
  return (
    <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
      {children}
    </p>
  );
}

export function GuideTable({ children }: { children: ReactNode }) {
  return (
    <div className="mt-stack-md overflow-x-auto rounded-lg border border-outline-variant">
      <table className="w-full min-w-[520px] border-collapse font-body text-body-sm text-on-surface-variant">
        {children}
      </table>
    </div>
  );
}

export function GuideOl({ children }: { children: ReactNode }) {
  return (
    <ol className="mt-stack-md list-decimal space-y-2 pl-6 font-body text-body-md text-on-surface-variant">
      {children}
    </ol>
  );
}

export function GuideUl({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-stack-md list-disc space-y-2 pl-6 font-body text-body-md text-on-surface-variant">
      {children}
    </ul>
  );
}

export function GuideExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-secondary underline-offset-2 hover:underline"
    >
      {children}
    </a>
  );
}
