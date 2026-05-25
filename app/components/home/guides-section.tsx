// Purpose: Homepage featured 2026 immigration guide cards.
import Link from "next/link";
import { HOME_GUIDES } from "../../lib/home-content";
import { Eyebrow } from "./eyebrow";

export function GuidesSection() {
  return (
    <section
      id="insights"
      className="scroll-mt-header-scroll-offset border-y border-outline-variant bg-surface-container-low py-section-padding"
    >
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-section-padding flex flex-col justify-between gap-stack-md sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Eyebrow>2026 Guides</Eyebrow>
            <h2 className="mt-stack-sm font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
              2026 Immigration Guides
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant md:text-body-lg">
              Start with a direct pathway answer, then follow a clear action
              checklist.
            </p>
          </div>
          <Link
            href="/guides"
            className="shrink-0 self-start border-b-2 border-secondary pb-1 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary transition-colors hover:text-secondary-container sm:self-auto"
          >
            View All Guides
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {HOME_GUIDES.map((guide) => (
            <article
              key={guide.title}
              className="group flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-8 transition-colors hover:border-primary-container/40"
            >
              <Eyebrow>Cornerstone Guide</Eyebrow>
              <h3 className="mt-stack-sm font-headline text-headline-md font-semibold leading-tight text-primary">
                {guide.title}
              </h3>
              <p className="mt-stack-sm flex-1 font-body text-body-md text-on-surface-variant">
                {guide.body}
              </p>
              <Link
                href={guide.href}
                className="mt-stack-lg inline-flex items-center gap-2 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary transition-colors hover:text-secondary-container"
              >
                Open guide
                <span
                  className="material-symbols-outlined text-lg"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
