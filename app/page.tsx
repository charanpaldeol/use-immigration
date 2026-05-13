// Purpose: This file builds the Niagara-focused homepage for the firm's 2026 content rollout.
import Link from "next/link";
import { ContactSection } from "./components/contact-section";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <section className="bg-primary-container py-section-padding">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="max-w-3xl">
              <span className="mb-stack-md inline-block rounded border border-on-primary/30 bg-on-primary/10 px-3 py-1 font-label text-label-md font-semibold uppercase tracking-[0.1em] text-on-primary">
                Niagara Immigration Experts
              </span>
              <h1 className="mb-stack-lg font-headline text-headline-lg-mobile font-bold text-on-primary md:text-display-lg">
                Build Your Future in Canada
              </h1>
              <p className="mb-stack-lg max-w-2xl font-body text-body-lg text-on-primary/90">
                We help skilled workers, students, families, and business owners
                navigate Canadian immigration with clear strategy and
                step-by-step support. Based in Niagara Falls, we deliver
                practical pathways aligned with 2026 program priorities.
              </p>
              <div
                id="assessment"
                className="flex flex-wrap gap-stack-md scroll-mt-20"
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-4 font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary shadow-[var(--shadow-institutional)] transition-colors hover:bg-secondary-container"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/guides"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-on-primary px-8 py-4 font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary transition-colors hover:border-secondary hover:bg-secondary hover:text-on-primary"
                >
                  Explore 2026 Guides
                </Link>
              </div>
              <div className="mt-stack-lg flex flex-wrap gap-gutter border-t border-on-primary/20 pt-stack-lg">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined material-symbols-filled text-secondary text-2xl">
                    verified
                  </span>
                  <span className="font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary">
                    Licensed Canadian Consultants
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined material-symbols-filled text-secondary text-2xl">
                    trending_up
                  </span>
                  <span className="font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary">
                    Trusted by Hundreds of Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-container-max scroll-mt-20 px-margin-mobile py-section-padding md:px-margin-desktop"
        >
          <div className="mb-section-padding text-center">
            <h2 className="mb-stack-sm font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
              Core Immigration Services
            </h2>
            <p className="mx-auto max-w-xl font-body text-body-md text-on-surface-variant">
              Tailored guidance for work permits, permanent residence, student
              pathways, and family sponsorship across Canada.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            <article className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 shadow-[var(--shadow-institutional)]">
              <span className="material-symbols-outlined text-4xl text-primary">
                work
              </span>
              <h3 className="mt-3 font-headline text-headline-md font-semibold text-primary">
                Skilled Worker Pathways
              </h3>
              <p className="mt-2 font-body text-body-md text-on-surface-variant">
                Express Entry profile strategy, CRS improvement plans, and OINP
                stream selection for long-term success in Ontario.
              </p>
              <Link
                href="/guides/express-entry-2026"
                className="mt-4 inline-flex items-center gap-2 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
              >
                Read guide
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </Link>
            </article>
            <article className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 shadow-[var(--shadow-institutional)]">
              <span className="material-symbols-outlined text-4xl text-primary">
                school
              </span>
              <h3 className="mt-3 font-headline text-headline-md font-semibold text-primary">
                Students and Families
              </h3>
              <p className="mt-2 font-body text-body-md text-on-surface-variant">
                Study permits, spouse open work permits, and family sponsorship
                planning with practical timelines and documentation support.
              </p>
              <Link
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
              >
                Get assessment
                <span className="material-symbols-outlined text-lg">
                  chevron_right
                </span>
              </Link>
            </article>
            <article className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 shadow-[var(--shadow-institutional)]">
              <span className="material-symbols-outlined text-4xl text-primary">
                business_center
              </span>
              <h3 className="mt-3 font-headline text-headline-md font-semibold text-primary">
                Employers and Business Owners
              </h3>
              <p className="mt-2 font-body text-body-md text-on-surface-variant">
                Employer-driven OINP support, strategic hiring pathways, and
                regional immigration planning tailored for Niagara operations.
              </p>
              <Link
                href="/guides/oinp-2026-niagara"
                className="mt-4 inline-flex items-center gap-2 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
              >
                View OINP guide
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </Link>
            </article>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-20 bg-surface-container-low py-section-padding"
        >
          <div className="mx-auto grid max-w-container-max grid-cols-1 gap-section-padding px-margin-mobile md:px-margin-desktop lg:grid-cols-2">
            <div>
              <h2 className="mb-stack-lg font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
                Why Niagara Is a Strategic 2026 Advantage
              </h2>
              <p className="mb-stack-md font-body text-body-md text-on-surface-variant">
                Federal and provincial programs continue to prioritize economic
                immigration, while regional pathways provide practical
                opportunities outside major metro markets.
              </p>
              <p className="mb-stack-md font-body text-body-md text-on-surface-variant">
                Our Niagara office is positioned to support applicants and
                employers through Ontario-focused streams, including updated
                OINP and temporary-resident-to-PR options.
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                We combine policy updates, eligibility planning, and document
                readiness so clients can move confidently from application to
                decision.
              </p>
            </div>
            <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-institutional)]">
              <h3 className="mb-stack-md font-headline text-headline-md font-semibold text-primary">
                What You Get Working With Us
              </h3>
              <div className="space-y-stack-md">
                <div className="flex gap-stack-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-outline-variant bg-surface-container-low">
                    <span className="material-symbols-outlined text-primary">
                      gavel
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-label text-label-lg font-semibold tracking-[0.05em] text-primary">
                      Clear Process and Eligibility Roadmap
                    </h3>
                    <p className="font-body text-body-md text-on-surface-variant">
                      A practical action plan from profile setup to final
                      submission, with every step mapped before you apply.
                    </p>
                  </div>
                </div>
                <div className="flex gap-stack-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-outline-variant bg-surface-container-low">
                    <span className="material-symbols-outlined text-primary">
                      visibility
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-label text-label-lg font-semibold tracking-[0.05em] text-primary">
                      Expert Guidance Through Policy Changes
                    </h3>
                    <p className="font-body text-body-md text-on-surface-variant">
                      Up-to-date program insights tied to 2026 priorities so you
                      can choose the right stream at the right time.
                    </p>
                  </div>
                </div>
                <div className="flex gap-stack-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-outline-variant bg-surface-container-low">
                    <span className="material-symbols-outlined text-primary">
                      location_on
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-label text-label-lg font-semibold tracking-[0.05em] text-primary">
                      Regional Specialization in Niagara
                    </h3>
                    <p className="font-body text-body-md text-on-surface-variant">
                      Local labor-market context and regional program alignment
                      that strengthens applications for Niagara-focused pathways.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="insights"
          className="mx-auto max-w-container-max scroll-mt-20 px-margin-mobile py-section-padding md:px-margin-desktop"
        >
          <div className="mb-section-padding flex flex-col justify-between gap-stack-md sm:flex-row sm:items-end">
            <div>
              <h2 className="font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
                2026 Immigration Guides
              </h2>
              <p className="mt-2 font-body text-body-md text-on-surface-variant">
                In-depth resources built to answer the most important
                eligibility and planning questions.
              </p>
            </div>
            <Link
              href="/guides"
              className="shrink-0 self-start border-b-2 border-secondary pb-1 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary sm:self-auto"
            >
              View All Guides
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            <article className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
              <div className="flex flex-col gap-2">
                <span className="font-label text-label-md font-medium text-secondary">
                  CORNERSTONE GUIDE
                </span>
                <h3 className="font-headline text-headline-md font-semibold leading-tight text-primary">
                  Express Entry 2026
                </h3>
                <p className="font-body text-body-md text-on-surface-variant">
                  Coverage of CRS scoring, in-demand occupations, and Niagara
                  strategy for skilled professionals.
                </p>
                <Link
                  href="/guides/express-entry-2026"
                  className="mt-2 inline-flex items-center gap-2 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
                >
                  Open guide
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
            <article className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
              <div className="flex flex-col gap-2">
                <span className="font-label text-label-md font-medium text-secondary">
                  CORNERSTONE GUIDE
                </span>
                <h3 className="font-headline text-headline-md font-semibold leading-tight text-primary">
                  OINP 2026 for Niagara
                </h3>
                <p className="font-body text-body-md text-on-surface-variant">
                  Stream-by-stream guidance, Ontario program updates, and
                  regional opportunities for workers and employers.
                </p>
                <Link
                  href="/guides/oinp-2026-niagara"
                  className="mt-2 inline-flex items-center gap-2 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
                >
                  Open guide
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
            <article className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
              <div className="flex flex-col gap-2">
                <span className="font-label text-label-md font-medium text-secondary">
                  CORNERSTONE GUIDE
                </span>
                <h3 className="font-headline text-headline-md font-semibold leading-tight text-primary">
                  TR to PR Pathway 2026
                </h3>
                <p className="font-body text-body-md text-on-surface-variant">
                  Fast-track options for temporary residents, with eligibility
                  requirements and Niagara-specific application strategy.
                </p>
                <Link
                  href="/guides/tr-to-pr-2026"
                  className="mt-2 inline-flex items-center gap-2 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
                >
                  Open guide
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </section>
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
