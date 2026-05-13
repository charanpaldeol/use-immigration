import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

export default function ExpressEntryGuidePage() {
  return (
    <>
      <SiteHeader />
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
              A practical overview of CRS scoring, in-demand occupations, and
              application sequencing for skilled professionals planning a move
              to Canada.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-container-max px-margin-mobile py-section-padding md:px-margin-desktop">
          <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-institutional)]">
            <h2 className="font-headline text-headline-md font-semibold text-primary">
              What Changes in 2026
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              Express Entry remains one of Canada&apos;s main pathways for skilled
              workers. In 2026, applicants should expect continued emphasis on
              occupation demand, language performance, and profile quality.
              Federal priorities continue to favor economic immigration streams,
              making accurate profile setup and supporting evidence essential.
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
              Niagara continues to present practical benefits for settlement
              planning: lower cost pressure compared with larger cities, growing
              labor demand in healthcare and skilled trades, and strong regional
              employer ecosystems. These factors can support long-term retention
              and improve pathway selection when paired with OINP options.
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
