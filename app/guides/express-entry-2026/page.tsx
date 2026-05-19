import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";

export const metadata: Metadata = {
  title: "Express Entry 2026 Guide: CRS, FSW, CEC & FSTP Strategy",
  description:
    "Niagara-focused Express Entry strategy for 2026. CRS scoring, FSW, CEC, and FSTP eligibility, NOC alignment, draw trends, French-language category, and post-ITA document prep.",
  keywords: [
    "Express Entry 2026",
    "Express Entry Niagara",
    "CRS calculator",
    "Comprehensive Ranking System",
    "Federal Skilled Worker",
    "Canadian Experience Class",
    "Federal Skilled Trades",
    "FSW eligibility",
    "CEC eligibility",
    "NOC coding",
    "Express Entry draw trends 2026",
    "French-language Express Entry",
    "Senior Manager Express Entry 2026",
    "ITA preparation",
    "Express Entry profile",
  ],
  alternates: { canonical: "/guides/express-entry-2026" },
  openGraph: {
    title: "Express Entry 2026: Niagara Strategy Guide | USD Immigration",
    description:
      "CRS scoring, FSW/CEC/FSTP eligibility, NOC alignment, and post-ITA document prep for Niagara skilled workers.",
    url: "/guides/express-entry-2026",
    type: "article",
    siteName: "USD Immigration",
    locale: "en_CA",
  },
};

export default function ExpressEntryGuidePage() {
  return (
    <>
      <main id="main-content" className="flex-1">
        <section className="bg-primary-container py-section-padding">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <p className="font-label text-label-md font-semibold uppercase tracking-[0.08em] text-on-primary/80">
              Cornerstone Guide
            </p>
            <h1 className="mt-2 font-headline text-headline-lg-mobile font-bold text-on-primary md:text-display-lg">
              Express Entry 2026: Niagara Strategy Guide
            </h1>
            <p className="mt-stack-md max-w-3xl font-body text-body-lg text-on-primary/90">
              Express Entry is a strong route for qualified skilled workers.
              This guide shows what matters most in 2026. You leave with a clear
              filing sequence.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-container-max px-margin-mobile py-section-padding md:px-margin-desktop">
          <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-institutional)]">
            <h2 className="font-headline text-headline-md font-semibold text-primary">
              What Changes in 2026
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              Profile quality decides outcomes in 2026.
              Occupation alignment, language scores, and evidence accuracy drive
              selection. Weak records reduce your options.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Core Eligibility Workflow
            </h2>
            <ol className="mt-stack-md space-y-2 font-body text-body-md text-on-surface-variant">
              <li>1. Confirm program fit (FSW, FST, or CEC).</li>
              <li>2. Complete language testing and ECA requirements.</li>
              <li>3. Build an accurate profile with correct NOC coding.</li>
              <li>4. Enter the pool and monitor draw trends.</li>
              <li>5. Prepare post-ITA documents before invitation.</li>
            </ol>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Niagara Advantage
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              Niagara gives skilled workers a credible settlement path.
              The region supports hiring in healthcare and trades with lower
              cost pressure than major metros. That improves OINP alignment.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Next Step Checklist
            </h2>
            <ul className="mt-stack-md space-y-2 font-body text-body-md text-on-surface-variant">
              <li>- Validate your primary NOC before profile creation.</li>
              <li>- Set a target CRS range and identify score gaps.</li>
              <li>- Collect proof-of-funds and employment records early.</li>
              <li>- Book a consultation to select Express Entry vs OINP timing.</li>
            </ul>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              We do not submit incomplete files. If your documents are weak, we
              pause and fix readiness first.
            </p>

            <Link
              href="/#contact"
              className="mt-stack-lg inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 font-label text-label-lg font-semibold tracking-[0.05em] text-on-secondary"
            >
              Book Consultation
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
