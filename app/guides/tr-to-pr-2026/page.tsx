import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

export default function TrToPrGuidePage() {
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
              TR to PR Pathway 2026
            </h1>
            <p className="mt-stack-md max-w-3xl font-body text-body-lg text-on-primary/90">
              Fast-track transition planning for temporary residents who want to
              move from valid work status to permanent residence.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-container-max px-margin-mobile py-section-padding md:px-margin-desktop">
          <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-institutional)]">
            <h2 className="font-headline text-headline-md font-semibold text-primary">
              Who This Pathway Serves
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              TR to PR options are designed for people already contributing to
              Canada&apos;s labor market, often with an existing employer record
              and verified Canadian work experience. For many applicants, this
              pathway can reduce uncertainty compared with starting from zero.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Eligibility Priorities
            </h2>
            <ul className="mt-stack-md space-y-2 font-body text-body-md text-on-surface-variant">
              <li>- Valid temporary status and qualifying Canadian experience.</li>
              <li>- Correct NOC alignment and work-history evidence.</li>
              <li>- Required language test results for target stream.</li>
              <li>- Complete records for identity, employment, and compliance.</li>
            </ul>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Niagara Opportunity
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              Niagara employers continue to recruit in healthcare, hospitality,
              logistics, and trades. For temporary workers already employed in
              the region, strong local work history can support practical PR
              planning when paired with the correct stream and timeline.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Ready-to-Apply Checklist
            </h2>
            <ol className="mt-stack-md space-y-2 font-body text-body-md text-on-surface-variant">
              <li>1. Verify your pathway and intake timing.</li>
              <li>2. Gather complete employer letters and pay records.</li>
              <li>3. Schedule language testing if required.</li>
              <li>4. Build a filing timeline for submission readiness.</li>
            </ol>

            <Link
              href="/#contact"
              className="mt-stack-lg inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 font-label text-label-lg font-semibold tracking-[0.05em] text-on-secondary"
            >
              Check Eligibility
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
