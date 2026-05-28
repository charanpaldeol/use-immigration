// Purpose: This file builds the Express Entry 2026 guide page for Canada-wide skilled-worker applicants.
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";

export const metadata: Metadata = {
  title: "Express Entry 2026 Guide: CRS, FSW, CEC & FSTP Strategy",
  description:
    "Canada-wide Express Entry strategy for 2026. CRS scoring, FSW, CEC, and FSTP eligibility, NOC alignment, draw trends, French-language category, and post-ITA document prep.",
  keywords: [
    "Express Entry 2026",
    "Express Entry Canada",
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
    "Niagara Express Entry",
    "Ontario Express Entry",
  ],
  alternates: { canonical: "/guides/express-entry-2026" },
  openGraph: {
    title: "Express Entry 2026: Canada Strategy Guide | USD Immigration",
    description:
      "CRS scoring, FSW/CEC/FSTP eligibility, NOC alignment, and post-ITA document prep for skilled workers across Canada.",
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
              Express Entry 2026: Canada Strategy Guide
            </h1>
            <p className="mt-stack-md max-w-3xl font-body text-body-lg text-on-primary/90">
              Express Entry is a strong route for qualified skilled workers
              across Canada. This guide shows what matters most in 2026. You
              leave with a clear filing sequence.
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
              Federal Skilled Sub-Programs
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              Three federal programs run through Express Entry. The Federal
              Skilled Worker (FSW) stream scores education, language, and skilled
              experience. The Federal Skilled Trades Program (FSTP) targets
              qualified trades. The Canadian Experience Class suits applicants
              with Canadian work history.
            </p>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              A high enough ranking earns an Invitation to Apply (ITA), which
              starts a strict document deadline. If you need to build experience
              first, the{" "}
              <Link
                href="/guides/work-permits-2026"
                className="font-semibold text-secondary underline-offset-2 hover:underline"
              >
                Work Permits 2026 guide
              </Link>{" "}
              shows routes that lead toward this stage.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Demand Across Canada
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              Skilled workers nationwide compete on CRS, occupation fit, and
              evidence quality. Regional labour markets — including Niagara and
              the GTA — can support hiring in healthcare and trades with strong
              provincial nominee alignment when settlement plans match the role.
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
