// Purpose: Work Permits 2026 hub guide (LMIA, IMP, PGWP) with Article/FAQ schema.
import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/app/components/guide-page";
import { GuideH2, GuideP, GuideUl } from "@/app/components/guide-prose";
import { SiteFooter } from "@/app/components/site-footer";
import {
  GUIDE_LAST_UPDATED,
  WORK_PERMITS_FAQS,
} from "@/app/lib/guides/constants";

const SCHEMA_DESCRIPTION =
  "2026 Canadian work permit guide: TFWP and LMIA, the International Mobility Program, CUSMA, intra-company transfers, owner-operator routes, and the PGWP.";

export const metadata: Metadata = {
  title: "Work Permits 2026: Canada Employer & Worker Guide",
  description: SCHEMA_DESCRIPTION,
  alternates: { canonical: "/guides/work-permits-2026" },
  openGraph: {
    title: "Work Permits 2026: Canada Guide | USD Immigration",
    description: SCHEMA_DESCRIPTION,
    url: "/guides/work-permits-2026",
    type: "article",
    siteName: "USD Immigration",
    locale: "en_CA",
    modifiedTime: GUIDE_LAST_UPDATED,
  },
};

export default function WorkPermitsGuidePage() {
  return (
    <>
      <GuidePage
        eyebrow="Pathway Guide"
        title="Work Permits 2026: Canada Guide"
        intro="Canada offers several work permit routes in 2026. This guide maps LMIA-based and LMIA-exempt options for workers and employers nationwide so you know which stream fits before filing."
        lastUpdated={GUIDE_LAST_UPDATED}
        canonicalPath="/guides/work-permits-2026"
        schemaHeadline="Work Permits 2026: Canada Guide"
        schemaDescription={SCHEMA_DESCRIPTION}
        faqs={WORK_PERMITS_FAQS}
        ctaLabel="Book Consultation"
      >
        <GuideH2>LMIA-Based Permits (TFWP)</GuideH2>
        <GuideP>
          The Temporary Foreign Worker Program needs an approved LMIA. The employer
          tests the labour market first. Wages and conditions must meet current
          program rules.
        </GuideP>
        <GuideH2>LMIA-Exempt Permits (IMP)</GuideH2>
        <GuideP>
          The International Mobility Program covers LMIA-exempt streams. Treaty
          professionals, intra-company transfers, and significant-benefit roles can
          qualify. Eligibility depends on the specific exemption code.
        </GuideP>
        <GuideH2>CUSMA Work Permits</GuideH2>
        <GuideP>
          CUSMA covers eligible US and Mexican professionals. The role must match a
          listed profession. No LMIA is required for qualifying applicants.
        </GuideP>
        <GuideH2>Intra-Company Transfers (ICT)</GuideH2>
        <GuideP>
          An ICT moves staff into a Canadian branch. Executives, managers, and
          specialized-knowledge workers may qualify. The corporate relationship and
          role must be well documented.
        </GuideP>
        <GuideH2>Owner-Operator & Provincial Routes</GuideH2>
        <GuideP>
          Entrepreneurs may enter through owner-operator or C11 significant-benefit
          routes. A C60 provincial work permit can support some nominee paths.
          Business viability evidence carries weight.
        </GuideP>
        <GuideH2>Post-Graduation Work Permit (PGWP)</GuideH2>
        <GuideP>
          The PGWP lets eligible graduates work after study. See our{" "}
          <Link
            href="/guides/study-permits-2026"
            className="font-semibold text-secondary underline-offset-2 hover:underline"
          >
            Study Permits 2026 guide
          </Link>{" "}
          for PAL/TAL and PGWP planning. PGWP time often supports later PR through{" "}
          <Link
            href="/guides/tr-to-pr-2026"
            className="font-semibold text-secondary underline-offset-2 hover:underline"
          >
            TR to PR
          </Link>
          .
        </GuideP>
        <GuideH2>Next-Step Checklist</GuideH2>
        <GuideUl>
          <li>Confirm whether your role is LMIA-based or LMIA-exempt.</li>
          <li>Verify the employer, wage, and job terms.</li>
          <li>Align the permit with a future PR pathway.</li>
          <li>Confirm current rules with IRCC before filing.</li>
        </GuideUl>
        <GuideH2>Related 2026 Guides</GuideH2>
        <GuideUl>
          <li>
            <Link
              href="/guides/tr-to-pr-2026"
              className="font-semibold text-secondary underline-offset-2 hover:underline"
            >
              TR to PR Pathway 2026
            </Link>{" "}
            — turn work-permit time into permanent residence.
          </li>
          <li>
            <Link
              href="/guides/express-entry-2026"
              className="font-semibold text-secondary underline-offset-2 hover:underline"
            >
              Express Entry 2026
            </Link>{" "}
            — federal skilled-worker route to PR.
          </li>
          <li>
            <Link
              href="/guides/oinp-2026-niagara"
              className="font-semibold text-secondary underline-offset-2 hover:underline"
            >
              OINP 2026 (Ontario)
            </Link>{" "}
            — provincial streams that pair with employer permits.
          </li>
        </GuideUl>
      </GuidePage>
      <SiteFooter />
    </>
  );
}
