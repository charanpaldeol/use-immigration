// Purpose: This file builds the 2026 immigration guides index that links to each detailed guide.
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "2026 Immigration Guides: Express Entry, OINP, TR to PR",
  description:
    "Free 2026 Canadian immigration guides for skilled workers, students, families, and employers. Express Entry CRS strategy, OINP streams, study permits, family sponsorship, and TR-to-PR planning — Canada-wide.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "2026 Immigration Guides | USD Immigration",
    description:
      "Detailed 2026 Canadian immigration guides: Express Entry, OINP, and TR to PR for applicants across Canada.",
    url: "/guides",
    type: "website",
    siteName: "USD Immigration",
    locale: "en_CA",
  },
};

const GUIDES = [
  {
    href: "/guides/express-entry-2026",
    title: "Express Entry 2026 Guide",
    summary:
      "CRS fundamentals, occupation demand, and step-by-step planning for skilled professionals.",
  },
  {
    href: "/guides/oinp-2026-niagara",
    title: "OINP 2026 Ontario Guide",
    summary:
      "Ontario stream overview with employer-driven pathways and current stream-fit guidance.",
  },
  {
    href: "/guides/tr-to-pr-2026",
    title: "TR to PR 2026 Guide",
    summary:
      "Fast-track transition planning for temporary residents already working in Canada.",
  },
  {
    href: "/guides/work-permits-2026",
    title: "Work Permits 2026 Guide",
    summary:
      "TFWP and LMIA, the International Mobility Program, CUSMA, transfers, and the PGWP for workers and employers across Canada.",
  },
  {
    href: "/guides/pr-citizenship-2026",
    title: "PR & Citizenship 2026 Guide",
    summary:
      "Permanent residence, PR card renewal, citizenship, and visitor status with a maintenance plan.",
  },
  {
    href: "/guides/humanitarian-appeals-2026",
    title: "Humanitarian & Appeals 2026 Guide",
    summary:
      "H&C applications, medical and criminal inadmissibility, and detention reviews explained.",
  },
  {
    href: "/guides/study-permits-2026",
    title: "Study Permits 2026 Guide",
    summary:
      "PAL/TAL attestation, DLI selection, work while studying, and PGWP-to-PR sequencing.",
  },
  {
    href: "/guides/family-sponsorship-2026",
    title: "Family Sponsorship 2026 Guide",
    summary:
      "Spousal and partner sponsorship, dependants, PGP, Super Visa, and relationship evidence.",
  },
];

export default function GuidesPage() {
  return (
    <>
      <main id="main-content" className="flex-1">
        <section className="bg-primary-container py-section-padding">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <h1 className="font-headline text-headline-lg-mobile font-bold text-on-primary md:text-display-lg">
              2026 Immigration Guides
            </h1>
            <p className="mt-stack-md max-w-3xl font-body text-body-lg text-on-primary/90">
              Detailed resources for workers, students, families, and employers
              evaluating Canadian immigration pathways in 2026.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-margin-mobile py-section-padding md:px-margin-desktop">
          <div className="grid gap-gutter md:grid-cols-3">
            {GUIDES.map((guide) => (
              <article
                key={guide.href}
                className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 shadow-[var(--shadow-institutional)]"
              >
                <h2 className="font-headline text-headline-md font-semibold text-primary">
                  {guide.title}
                </h2>
                <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
                  {guide.summary}
                </p>
                <Link
                  href={guide.href}
                  className="mt-4 inline-flex items-center gap-2 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
                >
                  Read now
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-margin-mobile pb-section-padding md:px-margin-desktop">
          <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 shadow-[var(--shadow-institutional)]">
            <p className="font-label text-label-md font-semibold uppercase tracking-[0.08em] text-secondary">
              Policy Update — 2026
            </p>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              Ontario cut the 2025 OINP allocation to 10,750 nominations, and the
              2024 study-permit cap and attestation system still shape intake. We
              factor current limits into every plan.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
