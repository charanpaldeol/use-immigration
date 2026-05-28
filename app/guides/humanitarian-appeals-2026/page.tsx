// Purpose: This file builds the Humanitarian & Appeals 2026 hub guide covering H&C applications, inadmissibility, and detention reviews.
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";

export const metadata: Metadata = {
  title: "Humanitarian & Appeals 2026: H&C, Inadmissibility, Detention",
  description:
    "2026 guide to complex immigration matters: Humanitarian & Compassionate applications, medical and criminal inadmissibility, and detention reviews before the Immigration Division.",
  keywords: [
    "humanitarian and compassionate 2026",
    "H&C application",
    "inadmissibility Canada",
    "criminal inadmissibility",
    "medical inadmissibility",
    "detention review",
    "Immigration Division",
    "temporary resident permit",
    "criminal rehabilitation",
    "Immigration and Refugee Board",
  ],
  alternates: { canonical: "/guides/humanitarian-appeals-2026" },
  openGraph: {
    title: "Humanitarian & Appeals 2026 Guide | USD Immigration",
    description:
      "Humanitarian & Compassionate applications, medical and criminal inadmissibility, and detention reviews explained for 2026.",
    url: "/guides/humanitarian-appeals-2026",
    type: "article",
    siteName: "USD Immigration",
    locale: "en_CA",
  },
};

export default function HumanitarianAppealsGuidePage() {
  return (
    <>
      <main id="main-content" className="flex-1">
        <section className="bg-primary-container py-section-padding">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <p className="font-label text-label-md font-semibold uppercase tracking-[0.08em] text-on-primary/80">
              Pathway Guide
            </p>
            <h1 className="mt-2 font-headline text-headline-lg-mobile font-bold text-on-primary md:text-display-lg">
              Humanitarian & Appeals 2026 Guide
            </h1>
            <p className="mt-stack-md max-w-3xl font-body text-body-lg text-on-primary/90">
              Some cases need more than a standard application. This guide covers
              humanitarian relief, inadmissibility, and detention reviews for
              2026. You leave knowing when these routes apply.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-container-max px-margin-mobile py-section-padding md:px-margin-desktop">
          <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-institutional)]">
            <h2 className="font-headline text-headline-md font-semibold text-primary">
              Humanitarian & Compassionate (H&C)
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              An H&C application weighs hardship and establishment in Canada. It
              is discretionary and fact-specific. Strong evidence and careful
              submissions matter most.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Medical & Criminal Inadmissibility
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              Inadmissibility can block entry or status. Medical grounds,
              criminality, and misrepresentation are common causes. Remedies may
              include rehabilitation or a temporary resident permit.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Detention Reviews
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              A detention review tests the grounds for holding a person. The
              Immigration Division reviews custody at set intervals. A clear
              release plan and conditions can be presented.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              When These Routes Apply
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              These matters often involve the Immigration and Refugee Board.
              Some appeals and Federal Court steps require a licensed lawyer. We
              advise honestly on the right representation.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Next-Step Checklist
            </h2>
            <ul className="mt-stack-md space-y-2 font-body text-body-md text-on-surface-variant">
              <li>- Identify the exact ground or decision at issue.</li>
              <li>- Gather hardship, establishment, or compliance evidence.</li>
              <li>- Confirm deadlines, which are often strict.</li>
              <li>- Check current rules with IRCC and the IRB.</li>
            </ul>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              We assess viability honestly. If a route does not fit, or needs a
              lawyer, we tell you plainly.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Related 2026 Guides
            </h2>
            <ul className="mt-stack-md space-y-2 font-body text-body-md text-on-surface-variant">
              <li>
                <Link
                  href="/guides/pr-citizenship-2026"
                  className="font-semibold text-secondary underline-offset-2 hover:underline"
                >
                  PR & Citizenship 2026
                </Link>{" "}
                — maintaining status once a case resolves.
              </li>
              <li>
                <Link
                  href="/guides"
                  className="font-semibold text-secondary underline-offset-2 hover:underline"
                >
                  All 2026 Guides
                </Link>{" "}
                — browse every pathway in one place.
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
