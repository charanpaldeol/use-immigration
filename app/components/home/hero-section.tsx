// Purpose: Homepage hero with primary CTAs and proof-point sidebar.
import Link from "next/link";
import { HOME_PROOF_POINTS } from "../../lib/home-content";
import { Eyebrow } from "./eyebrow";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary-container">
      <div className="mx-auto max-w-container-max px-margin-mobile py-section-padding md:px-margin-desktop">
        <div className="grid items-center gap-gutter lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="mb-stack-sm inline-flex items-center gap-2 rounded-full border border-on-primary/15 bg-on-primary/10 px-4 py-1.5 font-label text-label-md font-semibold uppercase tracking-[0.12em] text-on-primary backdrop-blur-sm">
              <span
                className="h-1.5 w-1.5 rounded-full bg-secondary"
                aria-hidden="true"
              />
              Honest Advice Before You Apply
            </span>
            <h1 className="max-w-3xl font-headline text-headline-lg-mobile font-bold text-on-primary md:text-display-lg">
              Know Your Best Path Forward in Canada
            </h1>
            <p className="mt-stack-md max-w-xl font-body text-body-lg text-on-primary/90">
              Most people qualify for more than one pathway — and the wrong choice
              costs time and money. We tell you which one fits, and what it takes
              to get there.
            </p>
            <div
              id="assessment"
              className="mt-stack-lg flex scroll-mt-header-scroll-offset flex-wrap gap-stack-md"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded bg-secondary px-8 py-4 font-label text-label-lg font-semibold text-on-primary shadow-[var(--shadow-institutional)] transition-colors hover:bg-secondary-container"
              >
                Book Free Assessment
                <span
                  className="material-symbols-outlined text-lg"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded border border-on-primary/40 px-8 py-4 font-label text-label-lg font-semibold text-on-primary transition-colors hover:border-on-primary hover:bg-on-primary hover:text-primary-container"
              >
                Explore 2026 Guides
              </Link>
            </div>
            <div className="mt-stack-lg flex flex-wrap gap-x-gutter gap-y-stack-md border-t border-on-primary/15 pt-stack-lg">
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined material-symbols-filled text-2xl text-secondary"
                  aria-hidden="true"
                >
                  verified
                </span>
                <span className="font-label text-label-md font-semibold text-on-primary">
                  Licensed Canadian Consultants
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined material-symbols-filled text-2xl text-secondary"
                  aria-hidden="true"
                >
                  trending_up
                </span>
                <span className="font-label text-label-md font-semibold text-on-primary">
                  Trusted by Hundreds of Clients
                </span>
              </div>
            </div>
          </div>

          <aside className="rounded-xl border border-on-primary/15 bg-on-primary/[0.04] p-8 backdrop-blur-sm">
            <Eyebrow tone="dark">Why Clients Choose Us</Eyebrow>
            <ul className="mt-stack-md divide-y divide-on-primary/10">
              {HOME_PROOF_POINTS.map((point) => (
                <li
                  key={point.label}
                  className="flex items-start gap-stack-md py-stack-md first:pt-0 last:pb-0"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded border border-on-primary/15 bg-on-primary/5 text-on-primary"
                    aria-hidden="true"
                  >
                    <span className="material-symbols-outlined text-[22px]">
                      {point.icon}
                    </span>
                  </span>
                  <div>
                    <p className="font-label text-label-lg font-semibold text-on-primary">
                      {point.label}
                    </p>
                    <p className="mt-stack-sm font-body text-body-md text-on-primary/70">
                      {point.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
