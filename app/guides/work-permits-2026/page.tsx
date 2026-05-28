// Purpose: This file builds the Work Permits 2026 hub guide covering LMIA-based and LMIA-exempt permits for Canada-wide workers and employers.
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";

export const metadata: Metadata = {
  title: "Work Permits 2026: Canada Employer & Worker Guide",
  description:
    "2026 Canadian work permit guide: TFWP and LMIA, the International Mobility Program, CUSMA permits, intra-company transfers, owner-operator routes, and the PGWP — for workers and employers across Canada.",
  keywords: [
    "work permits 2026",
    "Canada work permit",
    "TFWP",
    "LMIA",
    "International Mobility Program",
    "CUSMA work permit",
    "intra-company transfer",
    "C11 owner-operator",
    "C60 provincial work permit",
    "Post-Graduation Work Permit",
    "PGWP",
    "LMIA-exempt work permit",
    "Niagara work permit",
    "Ontario work permit",
  ],
  alternates: { canonical: "/guides/work-permits-2026" },
  openGraph: {
    title: "Work Permits 2026: Canada Guide | USD Immigration",
    description:
      "TFWP and LMIA, the International Mobility Program, CUSMA, intra-company transfers, owner-operator routes, and the PGWP for workers and employers across Canada.",
    url: "/guides/work-permits-2026",
    type: "article",
    siteName: "USD Immigration",
    locale: "en_CA",
  },
};

export default function WorkPermitsGuidePage() {
  return (
    <>
      <main id="main-content" className="flex-1">
        <section className="bg-primary-container py-section-padding">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <p className="font-label text-label-md font-semibold uppercase tracking-[0.08em] text-on-primary/80">
              Pathway Guide
            </p>
            <h1 className="mt-2 font-headline text-headline-lg-mobile font-bold text-on-primary md:text-display-lg">
              Work Permits 2026: Canada Guide
            </h1>
            <p className="mt-stack-md max-w-3xl font-body text-body-lg text-on-primary/90">
              Canada offers several work permit routes in 2026. This guide maps
              the main options for workers and employers nationwide. You leave
              knowing which stream fits.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-container-max px-margin-mobile py-section-padding md:px-margin-desktop">
          <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-institutional)]">
            <h2 className="font-headline text-headline-md font-semibold text-primary">
              LMIA-Based Permits (TFWP)
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              The Temporary Foreign Worker Program needs an approved LMIA. The
              employer tests the labour market first. Wages and conditions must
              meet current program rules.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              LMIA-Exempt Permits (IMP)
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              The International Mobility Program covers LMIA-exempt streams.
              Treaty professionals, intra-company transfers, and
              significant-benefit roles can qualify. Eligibility depends on the
              specific exemption code.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              CUSMA Work Permits
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              CUSMA covers eligible US and Mexican professionals. The role must
              match a listed profession. No LMIA is required for qualifying
              applicants.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Intra-Company Transfers (ICT)
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              An ICT moves staff into a Canadian branch. Executives, managers,
              and specialized-knowledge workers may qualify. The company link and
              role must be well documented.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Owner-Operator & Provincial Routes
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              Entrepreneurs may enter through owner-operator or C11
              significant-benefit routes. A C60 provincial work permit can
              support some nominee paths. Business viability evidence carries
              weight.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Post-Graduation Work Permit (PGWP)
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              The PGWP lets eligible graduates work after study. Program
              eligibility and study length set the permit duration. PGWP time
              often supports a later PR application.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Demand Across Canada
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              Employers hire across healthcare, hospitality, trades, and logistics
              nationwide. Regional hubs — including Niagara and the GTA — can
              strengthen both the work permit and a later PR plan when role and
              location align.
            </p>

            <h2 className="mt-stack-lg font-headline text-headline-md font-semibold text-primary">
              Next-Step Checklist
            </h2>
            <ul className="mt-stack-md space-y-2 font-body text-body-md text-on-surface-variant">
              <li>- Confirm whether your role is LMIA-based or LMIA-exempt.</li>
              <li>- Verify the employer, wage, and job terms.</li>
              <li>- Align the permit with a future PR pathway.</li>
              <li>- Confirm current rules with IRCC before filing.</li>
            </ul>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              We do not file unsupported work-permit cases. If an exemption does
              not apply, we say so and reset the plan.
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
                — turn PGWP or work-permit time into permanent residence.
              </li>
              <li>
                <Link
                  href="/guides/express-entry-2026"
                  className="font-semibold text-secondary underline-offset-2 hover:underline"
                >
                  Express Entry 2026
                </Link>{" "}
                — the federal skilled-worker route to PR.
              </li>
              <li>
                <Link
                  href="/guides/oinp-2026-niagara"
                  className="font-semibold text-secondary underline-offset-2 hover:underline"
                >
                  OINP 2026 (Ontario)
                </Link>{" "}
                — provincial nominee streams that pair with C60 permits.
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
