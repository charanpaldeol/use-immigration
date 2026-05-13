import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

export default function OinpGuidePage() {
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
              OINP 2026: Complete Niagara Guide
            </h1>
            <p className="mt-stack-md max-w-3xl font-body text-body-lg text-on-primary/90">
              Stream-by-stream planning for skilled workers, students, and
              employers looking to use Ontario nomination pathways effectively.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-container-max px-margin-mobile py-section-padding md:px-margin-desktop">
          <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-institutional)]">
            <h2 className="font-headline text-headline-md font-semibold text-primary">
              Program Snapshot
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              OINP is a provincial pathway that can increase certainty for
              applicants who align with Ontario priorities. In 2026, strong
              demand persists in healthcare, trades, technology, and
              employer-supported roles across regional communities like Niagara.
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
              Niagara offers strong employer demand, practical living costs, and
              reliable regional infrastructure for new permanent residents.
              Applicants and sponsoring employers can often build stronger cases
              when applications clearly connect role demand, community fit, and
              retention potential in the region.
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
