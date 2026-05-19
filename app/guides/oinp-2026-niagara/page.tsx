import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";

export const metadata: Metadata = {
  title: "OINP 2026 Niagara Guide: Streams, Eligibility & Process",
  description:
    "Complete 2026 OINP guide for Niagara applicants. Employer Job Offer, In-Demand Skills, International Student, and Entrepreneur streams with stream-fit and filing checklists.",
  keywords: [
    "OINP 2026",
    "Ontario Immigrant Nominee Program",
    "OINP Niagara",
    "OINP Employer Job Offer",
    "OINP In-Demand Skills",
    "OINP International Student",
    "OINP Entrepreneur",
    "OINP Foreign Worker",
    "Ontario PNP",
    "Provincial Nominee Program Ontario",
    "OINP allocation 2026",
    "Niagara nomination",
  ],
  alternates: { canonical: "/guides/oinp-2026-niagara" },
  openGraph: {
    title: "OINP 2026: Complete Niagara Guide | USD Immigration",
    description:
      "Ontario Immigrant Nominee Program 2026 guide for Niagara: Employer Job Offer, In-Demand Skills, International Student, and Entrepreneur streams.",
    url: "/guides/oinp-2026-niagara",
    type: "article",
    siteName: "USD Immigration",
    locale: "en_CA",
  },
};

export default function OinpGuidePage() {
  return (
    <>
      <main id="main-content" className="flex-1">
        <section className="bg-primary-container py-section-padding">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <p className="font-label text-label-md font-semibold uppercase tracking-[0.08em] text-on-primary/80">
              Cornerstone Guide
            </p>
            <h1 className="mt-2 font-headline text-headline-lg-mobile font-bold text-on-primary md:text-display-lg">
              OINP 2026: Complete Niagara Guide
            </h1>
            <p className="mt-stack-md max-w-3xl font-body text-body-lg text-on-primary/90">
              OINP is a direct route for Ontario-focused applicants.
              This guide shows where you fit and what to file next. It is built
              for workers, students, and employers in Niagara.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-container-max px-margin-mobile py-section-padding md:px-margin-desktop">
          <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-institutional)]">
            <h2 className="font-headline text-headline-md font-semibold text-primary">
              Program Snapshot
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              OINP rewards fit with Ontario labor demand.
              In 2026, demand remains strong in healthcare, trades, technology,
              and employer-supported roles. Stream choice must match evidence.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Main Streams to Evaluate
            </h2>
            <ul className="mt-stack-md space-y-2 font-body text-body-md text-on-surface-variant">
              <li>- Employer Job Offer stream for approved Ontario roles.</li>
              <li>- In-Demand Skills stream for qualifying occupations.</li>
              <li>- International Student options after eligible graduation.</li>
              <li>- Business-focused routes for qualified entrepreneurs.</li>
            </ul>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Why Niagara Matters
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              Niagara supports stable long-term settlement planning.
              Employer demand and regional fit strengthen nomination strategy.
              Cases perform better when role, location, and retention align.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Application Preparation Checklist
            </h2>
            <ol className="mt-stack-md space-y-2 font-body text-body-md text-on-surface-variant">
              <li>1. Confirm stream criteria and current intake conditions.</li>
              <li>2. Prepare language, education, and work records.</li>
              <li>3. Validate job offer terms where required.</li>
              <li>4. Build timeline from nomination to federal PR stage.</li>
            </ol>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              We do not force weak stream choices. If your profile does not fit,
              we say no and move to a better path.
            </p>

            <Link
              href="/#contact"
              className="mt-stack-lg inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 font-label text-label-lg font-semibold tracking-[0.05em] text-on-secondary"
            >
              Get OINP Assessment
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
