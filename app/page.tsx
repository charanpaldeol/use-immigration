// Purpose: This file builds the Niagara-focused homepage for the firm's 2026 content rollout.
import type { Metadata } from "next";
import Link from "next/link";
import { AreasServedSection } from "./components/areas-served-section";
import { ContactSection } from "./components/contact-section";
import { SiteFooter } from "./components/site-footer";

export const metadata: Metadata = {
  title: {
    absolute: "USD Immigration | Niagara Immigration Consultants 2026",
  },
  description:
    "Niagara Falls immigration consultants serving the GTA and Niagara Region for 2026 Canadian pathways: Express Entry, OINP, work permits and LMIA, study permits, family and spousal sponsorship, Super Visa, citizenship, and humanitarian and compassionate cases.",
  keywords: [
    "GTA immigration consultant",
    "Greater Toronto Area immigration Ontario",
    "Toronto immigration consultant Ontario",
    "Mississauga immigration consulting",
    "Hamilton immigration consultant",
    "St Catharines immigration consultant",
    "Niagara immigration consultant",
    "Niagara Falls immigration office",
    "Canadian immigration consultant Ontario",
    "Express Entry 2026",
    "Federal Skilled Worker",
    "Canadian Experience Class",
    "Federal Skilled Trades",
    "Comprehensive Ranking System",
    "OINP",
    "Ontario Immigrant Nominee Program",
    "Provincial Nominee Program",
    "Work Permit Canada",
    "LMIA",
    "LMIA-exempt work permit",
    "CUSMA work permit",
    "Intra-Company Transfer",
    "C11 Work Permit",
    "Start-Up Visa",
    "Study Permit Canada",
    "PGWP",
    "Family Sponsorship",
    "Spousal Sponsorship",
    "Parent and Grandparent Sponsorship",
    "Super Visa",
    "Visitor Visa",
    "Canadian Citizenship",
    "PR Card Renewal",
    "Humanitarian and Compassionate",
    "French-language Express Entry",
    "Senior Manager Express Entry 2026",
    "TR to PR pathway",
    "Niagara OINP",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "USD Immigration | Niagara Immigration Consultants 2026",
    description:
      "Niagara Falls consultants serving the GTA and Niagara Region for 2026 pathways: Express Entry, OINP, work permits, study permits, family sponsorship, Super Visa, and citizenship.",
    url: "/",
    type: "website",
    siteName: "USD Immigration",
    locale: "en_CA",
  },
};

export default function Home() {
  return (
    <>
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
                We deliver clear immigration strategy for 2026 pathways.
                Our Niagara team supports workers, students, families, and
                employers. You get a direct plan, defined milestones, and clear
                next actions.
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
              Direct guidance across the eight pathways most clients use to
              live, work, study, and settle in Canada.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-8">
              <span className="material-symbols-outlined text-4xl text-primary">
                trending_up
              </span>
              <h3 className="mt-3 min-h-[4rem] font-headline text-headline-md font-semibold text-primary">
                Express Entry
              </h3>
              <p className="mt-2 font-body text-body-md text-on-surface-variant">
                We build CRS strategy, stream selection, and filing order for
                FSW, CEC, and FSTP.
              </p>
              <Link
                href="/guides/express-entry-2026"
                className="mt-auto inline-flex items-center gap-2 pt-4 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
              >
                Read guide
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </Link>
            </article>
            <article className="flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-8">
              <span className="material-symbols-outlined text-4xl text-primary">
                location_on
              </span>
              <h3 className="mt-3 min-h-[4rem] font-headline text-headline-md font-semibold text-primary">
                Provincial Nominee (OINP)
              </h3>
              <p className="mt-2 font-body text-body-md text-on-surface-variant">
                We match your profile to the right Ontario stream and align
                your file with current OINP rules.
              </p>
              <Link
                href="/guides/oinp-2026-niagara"
                className="mt-auto inline-flex items-center gap-2 pt-4 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
              >
                View OINP guide
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </Link>
            </article>
            <article className="flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-8">
              <span className="material-symbols-outlined text-4xl text-primary">
                work
              </span>
              <h3 className="mt-3 min-h-[4rem] font-headline text-headline-md font-semibold text-primary">
                Work Permits and LMIA
              </h3>
              <p className="mt-2 font-body text-body-md text-on-surface-variant">
                We support LMIA-based and LMIA-exempt streams, including
                CUSMA, ICT, and C11.
              </p>
              <Link
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 pt-4 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
              >
                Get assessment
                <span className="material-symbols-outlined text-lg">
                  chevron_right
                </span>
              </Link>
            </article>
            <article className="flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-8">
              <span className="material-symbols-outlined text-4xl text-primary">
                school
              </span>
              <h3 className="mt-3 min-h-[4rem] font-headline text-headline-md font-semibold text-primary">
                Study Permits
              </h3>
              <p className="mt-2 font-body text-body-md text-on-surface-variant">
                We file study permits with PAL or TAL compliance and clear
                timing under current cap rules.
              </p>
              <Link
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 pt-4 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
              >
                Get assessment
                <span className="material-symbols-outlined text-lg">
                  chevron_right
                </span>
              </Link>
            </article>
            <article className="flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-8">
              <span className="material-symbols-outlined text-4xl text-primary">
                family_restroom
              </span>
              <h3 className="mt-3 min-h-[4rem] font-headline text-headline-md font-semibold text-primary">
                Family and Spousal Sponsorship
              </h3>
              <p className="mt-2 font-body text-body-md text-on-surface-variant">
                We file spouse, partner, child, and parent sponsorships with
                complete evidence packages.
              </p>
              <Link
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 pt-4 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
              >
                Get assessment
                <span className="material-symbols-outlined text-lg">
                  chevron_right
                </span>
              </Link>
            </article>
            <article className="flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-8">
              <span className="material-symbols-outlined text-4xl text-primary">
                public
              </span>
              <h3 className="mt-3 min-h-[4rem] font-headline text-headline-md font-semibold text-primary">
                Visitor Visas and Super Visa
              </h3>
              <p className="mt-2 font-body text-body-md text-on-surface-variant">
                We prepare visitor and super visa applications with strong
                proof of ties and intent.
              </p>
              <Link
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 pt-4 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
              >
                Get assessment
                <span className="material-symbols-outlined text-lg">
                  chevron_right
                </span>
              </Link>
            </article>
            <article className="flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-8">
              <span className="material-symbols-outlined text-4xl text-primary">
                verified
              </span>
              <h3 className="mt-3 min-h-[4rem] font-headline text-headline-md font-semibold text-primary">
                Canadian Citizenship
              </h3>
              <p className="mt-2 font-body text-body-md text-on-surface-variant">
                We confirm eligibility, file your application, and prepare
                you for the test and oath.
              </p>
              <Link
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 pt-4 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
              >
                Get assessment
                <span className="material-symbols-outlined text-lg">
                  chevron_right
                </span>
              </Link>
            </article>
            <article className="flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-8">
              <span className="material-symbols-outlined text-4xl text-primary">
                gavel
              </span>
              <h3 className="mt-3 min-h-[4rem] font-headline text-headline-md font-semibold text-primary">
                Humanitarian and Compassionate
              </h3>
              <p className="mt-2 font-body text-body-md text-on-surface-variant">
                We build H and C submissions for cases that need a path
                outside standard streams.
              </p>
              <Link
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 pt-4 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
              >
                Get assessment
                <span className="material-symbols-outlined text-lg">
                  chevron_right
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
                Niagara is a strong region for 2026 immigration planning.
                Employer demand remains active across key sectors.
              </p>
              <p className="mb-stack-md font-body text-body-md text-on-surface-variant">
                Our office is built for Ontario-focused pathways.
                We align applications to OINP and TR-to-PR requirements.
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                We do not file weak applications.
                If a case is not ready, we stop and give a readiness plan first.
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
                      You get a clear path from profile setup to submission.
                      Every step is mapped before filing starts.
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
                      We track policy updates and apply them to your case.
                      You choose the right stream at the right time.
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
                      We use local labor-market signals to shape your strategy.
                      That improves fit for Niagara-focused pathways.
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
                Start with a direct pathway answer, then follow a clear action
                checklist.
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
                  Direct guidance on CRS, eligibility, and filing priorities for
                  skilled professionals.
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
                  Clear stream selection guidance with Ontario rules and Niagara
                  fit.
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
                  Direct TR-to-PR planning with clear eligibility checks and
                  filing steps.
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
        <AreasServedSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
