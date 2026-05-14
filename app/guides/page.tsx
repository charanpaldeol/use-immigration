import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "2026 Immigration Guides: Express Entry, OINP, TR to PR",
  description:
    "Free 2026 Canadian immigration guides for skilled workers, students, families, and employers. Express Entry CRS strategy, OINP streams, and TR-to-PR planning for Niagara.",
  keywords: [
    "Canadian immigration guides 2026",
    "Express Entry 2026 guide",
    "OINP 2026 guide",
    "TR to PR 2026",
    "CRS strategy",
    "Niagara immigration guide",
    "Ontario immigration guide",
    "Provincial Nominee Program guide",
  ],
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "2026 Immigration Guides | USD Immigration",
    description:
      "Detailed 2026 Canadian immigration guides: Express Entry, OINP, and TR to PR for Niagara applicants.",
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
    title: "OINP 2026 Niagara Guide",
    summary:
      "Ontario stream overview with Niagara-focused opportunities and employer-driven pathways.",
  },
  {
    href: "/guides/tr-to-pr-2026",
    title: "TR to PR 2026 Guide",
    summary:
      "Fast-track transition planning for temporary residents already working in Canada.",
  },
];

export default function GuidesPage() {
  return (
    <>
      <SiteHeader />
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
      </main>
      <SiteFooter />
    </>
  );
}
