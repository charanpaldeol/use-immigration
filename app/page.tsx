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

const SERVICES = [
  {
    icon: "trending_up",
    title: "Express Entry",
    body: "We build CRS strategy, stream selection, and filing order for FSW, CEC, and FSTP.",
    href: "/guides/express-entry-2026",
    cta: "Read guide",
    ctaIcon: "arrow_forward",
  },
  {
    icon: "location_on",
    title: "Provincial Nominee (OINP)",
    body: "We match your profile to the right Ontario stream and align your file with current OINP rules.",
    href: "/guides/oinp-2026-niagara",
    cta: "View OINP guide",
    ctaIcon: "arrow_forward",
  },
  {
    icon: "work",
    title: "Work Permits and LMIA",
    body: "We support LMIA-based and LMIA-exempt streams, including CUSMA, ICT, and C11.",
    href: "#contact",
    cta: "Get assessment",
    ctaIcon: "chevron_right",
  },
  {
    icon: "school",
    title: "Study Permits",
    body: "We file study permits with PAL or TAL compliance and clear timing under current cap rules.",
    href: "#contact",
    cta: "Get assessment",
    ctaIcon: "chevron_right",
  },
  {
    icon: "family_restroom",
    title: "Family and Spousal Sponsorship",
    body: "We file spouse, partner, child, and parent sponsorships with complete evidence packages.",
    href: "#contact",
    cta: "Get assessment",
    ctaIcon: "chevron_right",
  },
  {
    icon: "public",
    title: "Visitor Visas and Super Visa",
    body: "We prepare visitor and super visa applications with strong proof of ties and intent.",
    href: "#contact",
    cta: "Get assessment",
    ctaIcon: "chevron_right",
  },
  {
    icon: "verified",
    title: "Canadian Citizenship",
    body: "We confirm eligibility, file your application, and prepare you for the test and oath.",
    href: "#contact",
    cta: "Get assessment",
    ctaIcon: "chevron_right",
  },
  {
    icon: "gavel",
    title: "Humanitarian and Compassionate",
    body: "We build H and C submissions for cases that need a path outside standard streams.",
    href: "#contact",
    cta: "Get assessment",
    ctaIcon: "chevron_right",
  },
] as const;

const PROOF_POINTS = [
  {
    icon: "gavel",
    label: "RCIC-Regulated",
    body: "Licensed Canadian consultants in good standing with the regulator.",
  },
  {
    icon: "public",
    label: "Eight Core Pathways",
    body: "Express Entry, OINP, work, study, family, and humanitarian files.",
  },
  {
    icon: "location_on",
    label: "Niagara and the GTA",
    body: "A Niagara Falls office with remote consultations province-wide.",
  },
  {
    icon: "schedule",
    label: "2026-Ready Strategy",
    body: "Plans aligned to current policy, caps, and filing timelines.",
  },
] as const;

const PROCESS_STEPS = [
  {
    step: "01",
    icon: "visibility",
    title: "Assessment",
    body: "We review your profile, goals, and eligibility before any filing begins.",
  },
  {
    step: "02",
    icon: "gavel",
    title: "Strategy",
    body: "You receive a written plan: pathway, stream, timeline, and milestones.",
  },
  {
    step: "03",
    icon: "arrow_forward",
    title: "Filing",
    body: "We prepare and submit a complete, evidence-backed application.",
  },
  {
    step: "04",
    icon: "verified",
    title: "Outcome",
    body: "We track your file and guide you through the decision and next steps.",
  },
] as const;

const GUIDES = [
  {
    title: "Express Entry 2026",
    body: "Direct guidance on CRS, eligibility, and filing priorities for skilled professionals.",
    href: "/guides/express-entry-2026",
  },
  {
    title: "OINP 2026 for Niagara",
    body: "Clear stream selection guidance with Ontario rules and Niagara fit.",
    href: "/guides/oinp-2026-niagara",
  },
  {
    title: "TR to PR Pathway 2026",
    body: "Direct TR-to-PR planning with clear eligibility checks and filing steps.",
    href: "/guides/tr-to-pr-2026",
  },
] as const;

function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`font-label text-label-md font-semibold uppercase tracking-[0.12em] ${
        tone === "dark" ? "text-on-primary/70" : "text-secondary"
      }`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary-container">
          <div className="mx-auto max-w-container-max px-margin-mobile py-section-padding md:px-margin-desktop">
            <div className="grid items-center gap-section-padding lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="mb-stack-lg inline-flex items-center gap-2 rounded-full border border-on-primary/15 bg-on-primary/10 px-4 py-1.5 font-label text-label-md font-semibold uppercase tracking-[0.12em] text-on-primary backdrop-blur-sm">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-secondary"
                    aria-hidden="true"
                  />
                  Licensed Canadian Immigration Consultants
                </span>
                <h1 className="font-headline text-headline-lg-mobile font-bold text-on-primary md:text-display-lg">
                  Build Your Future in Canada
                </h1>
                <p className="mt-stack-lg max-w-xl font-body text-body-lg text-on-primary/85">
                  We deliver clear immigration strategy for 2026 pathways. Our
                  Niagara team supports workers, students, families, and
                  employers with a direct plan, defined milestones, and clear
                  next actions.
                </p>
                <div
                  id="assessment"
                  className="mt-stack-lg flex scroll-mt-20 flex-wrap gap-stack-md"
                >
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded bg-secondary px-8 py-4 font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary shadow-[var(--shadow-institutional)] transition-colors hover:bg-secondary-container"
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
                    className="inline-flex items-center justify-center rounded border-2 border-on-primary/40 px-8 py-4 font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary transition-colors hover:border-on-primary hover:bg-on-primary hover:text-primary-container"
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
                    <span className="font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary">
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
                    <span className="font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary">
                      Trusted by Hundreds of Clients
                    </span>
                  </div>
                </div>
              </div>

              <aside className="rounded-xl border border-on-primary/15 bg-on-primary/[0.04] p-8 backdrop-blur-sm">
                <Eyebrow tone="dark">Why Clients Choose Us</Eyebrow>
                <ul className="mt-stack-md divide-y divide-on-primary/10">
                  {PROOF_POINTS.map((point) => (
                    <li
                      key={point.label}
                      className="flex items-start gap-stack-md py-stack-md first:pt-stack-sm last:pb-0"
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
                        <p className="font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary">
                          {point.label}
                        </p>
                        <p className="mt-1 font-body text-body-md text-on-primary/70">
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

        {/* Services */}
        <section
          id="services"
          className="mx-auto max-w-container-max scroll-mt-20 px-margin-mobile py-section-padding md:px-margin-desktop"
        >
          <div className="mb-section-padding max-w-2xl">
            <Eyebrow>Core Services</Eyebrow>
            <h2 className="mt-stack-sm font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
              Core Immigration Services
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant md:text-body-lg">
              Direct guidance across the eight pathways most clients use to
              live, work, study, and settle in Canada.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="group flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-8 transition-colors hover:border-primary-container/40"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded border border-outline-variant bg-surface-container-low text-primary"
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined text-[26px]">
                    {service.icon}
                  </span>
                </span>
                <h3 className="mt-stack-md font-headline text-headline-md font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-stack-sm flex-1 font-body text-body-md text-on-surface-variant">
                  {service.body}
                </p>
                <Link
                  href={service.href}
                  className="mt-stack-lg inline-flex items-center gap-2 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary transition-colors hover:text-secondary-container"
                >
                  {service.cta}
                  <span
                    className="material-symbols-outlined text-lg"
                    aria-hidden="true"
                  >
                    {service.ctaIcon}
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section className="scroll-mt-20 border-y border-outline-variant bg-surface-container-low py-section-padding">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <div className="max-w-2xl">
              <Eyebrow>How We Work</Eyebrow>
              <h2 className="mt-stack-sm font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
                A Clear Path From First Call to Decision
              </h2>
              <p className="mt-stack-md font-body text-body-md text-on-surface-variant md:text-body-lg">
                Every file follows the same disciplined process. You always know
                the current step and the next action.
              </p>
            </div>
            <ol className="mt-section-padding grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step) => (
                <li
                  key={step.step}
                  className="rounded-xl border border-outline-variant bg-surface-container-lowest p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-headline text-display-lg font-bold leading-none text-primary-container/15">
                      {step.step}
                    </span>
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded border border-outline-variant bg-surface-container-low text-primary"
                      aria-hidden="true"
                    >
                      <span className="material-symbols-outlined text-[22px]">
                        {step.icon}
                      </span>
                    </span>
                  </div>
                  <h3 className="mt-stack-md font-headline text-headline-md font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-stack-sm font-body text-body-md text-on-surface-variant">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Guides */}
        <section
          id="insights"
          className="scroll-mt-20 border-y border-outline-variant bg-surface-container-low py-section-padding"
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
              {GUIDES.map((guide) => (
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

        <AreasServedSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
