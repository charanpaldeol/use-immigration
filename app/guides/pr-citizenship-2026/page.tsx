// Purpose: This file builds the PR & Citizenship 2026 hub guide covering permanent residence, card renewal, citizenship, and visitor status.
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";

export const metadata: Metadata = {
  title: "PR & Citizenship 2026: Status, Renewal & Naturalization",
  description:
    "2026 guide to maintaining Canadian status: permanent residence and the residency obligation, PR card renewal, citizenship requirements, and visitor/temporary resident visas.",
  keywords: [
    "permanent residence 2026",
    "PR card renewal",
    "Canadian citizenship 2026",
    "citizenship requirements",
    "residency obligation",
    "visitor visa Canada",
    "temporary resident visa",
    "maintain PR status",
    "naturalization Canada",
    "PR to citizenship",
  ],
  alternates: { canonical: "/guides/pr-citizenship-2026" },
  openGraph: {
    title: "PR & Citizenship 2026 Guide | USD Immigration",
    description:
      "Permanent residence and the residency obligation, PR card renewal, citizenship requirements, and visitor/temporary resident visas for 2026.",
    url: "/guides/pr-citizenship-2026",
    type: "article",
    siteName: "USD Immigration",
    locale: "en_CA",
  },
};

export default function PrCitizenshipGuidePage() {
  return (
    <>
      <main id="main-content" className="flex-1">
        <section className="bg-primary-container py-section-padding">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <p className="font-label text-label-md font-semibold uppercase tracking-[0.08em] text-on-primary/80">
              Pathway Guide
            </p>
            <h1 className="mt-2 font-headline text-headline-lg-mobile font-bold text-on-primary md:text-display-lg">
              PR & Citizenship 2026 Guide
            </h1>
            <p className="mt-stack-md max-w-3xl font-body text-body-lg text-on-primary/90">
              Status work does not end at approval. This guide covers permanent
              residence, card renewal, citizenship, and visitor status for 2026.
              You leave with a clear maintenance plan.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-container-max px-margin-mobile py-section-padding md:px-margin-desktop">
          <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-institutional)]">
            <h2 className="font-headline text-headline-md font-semibold text-primary">
              Permanent Residence (PR)
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              PR gives the right to live and work across Canada. It carries a
              residency obligation you must meet. Clear records protect your
              status over time.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              PR Card Renewal
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              PR cards expire and need timely renewal. Travel back to Canada
              depends on a valid card. Plan renewal well before the expiry date.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Canadian Citizenship
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              Citizenship follows enough qualifying residence as a PR. Language
              and knowledge requirements apply by age. Accurate physical-presence
              records are essential.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Visitor & Temporary Resident Visas
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              Visitor visas cover short stays for eligible travellers. Purpose,
              ties, and funds support the application. Status extensions follow
              their own rules.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Maintaining Your Status
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              Track days in Canada against your residency obligation. Keep
              travel, address, and employment records current. Good
              record-keeping prevents most status problems.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Next-Step Checklist
            </h2>
            <ul className="mt-stack-md space-y-2 font-body text-body-md text-on-surface-variant">
              <li>- Note your PR card expiry and renewal window.</li>
              <li>- Track physical presence for the residency obligation.</li>
              <li>- Confirm citizenship timing once eligibility is met.</li>
              <li>- Verify current requirements with IRCC before filing.</li>
            </ul>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              We do not overstate eligibility. If your presence days fall short,
              we plan the wait rather than file early.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Related 2026 Guides
            </h2>
            <ul className="mt-stack-md space-y-2 font-body text-body-md text-on-surface-variant">
              <li>
                <Link
                  href="/guides/tr-to-pr-2026"
                  className="font-semibold text-secondary underline-offset-2 hover:underline"
                >
                  TR to PR Pathway 2026
                </Link>{" "}
                — the route into permanent residence before this stage.
              </li>
              <li>
                <Link
                  href="/guides/express-entry-2026"
                  className="font-semibold text-secondary underline-offset-2 hover:underline"
                >
                  Express Entry 2026
                </Link>{" "}
                — a federal route many PRs arrive through.
              </li>
              <li>
                <Link
                  href="/guides/oinp-2026-niagara"
                  className="font-semibold text-secondary underline-offset-2 hover:underline"
                >
                  OINP 2026 (Ontario)
                </Link>{" "}
                — provincial nomination toward PR.
              </li>
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
