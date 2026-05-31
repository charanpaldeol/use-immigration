// Purpose: TR to PR 2026 guide with Article/FAQ schema.
import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/app/components/guide-page";
import { GuideH2, GuideOl, GuideP, GuideUl } from "@/app/components/guide-prose";
import { SiteFooter } from "@/app/components/site-footer";
import { GUIDE_LAST_UPDATED, TR_TO_PR_FAQS } from "@/app/lib/guides/constants";

const SCHEMA_DESCRIPTION =
  "TR-to-PR transition guide for 2026: Canadian Experience Class, work-to-PR options, NOC and language requirements, and PGWP-to-PR checklists.";

export const metadata: Metadata = {
  title: "TR to PR Pathway 2026: Canadian Experience Class & Work-to-PR",
  description: SCHEMA_DESCRIPTION,
  alternates: { canonical: "/guides/tr-to-pr-2026" },
  openGraph: {
    title: "TR to PR Pathway 2026 | USD Immigration",
    description: SCHEMA_DESCRIPTION,
    url: "/guides/tr-to-pr-2026",
    type: "article",
    siteName: "USD Immigration",
    locale: "en_CA",
    modifiedTime: GUIDE_LAST_UPDATED,
  },
};

export default function TrToPrGuidePage() {
  return (
    <>
      <GuidePage
        eyebrow="Cornerstone Guide"
        title="TR to PR Pathway 2026"
        intro="TR to PR describes moving from temporary status to permanent residence through eligible federal or provincial pathways. This guide covers core checks and filing order for workers and graduates in Canada."
        lastUpdated={GUIDE_LAST_UPDATED}
        canonicalPath="/guides/tr-to-pr-2026"
        schemaHeadline="TR to PR Pathway 2026"
        schemaDescription={SCHEMA_DESCRIPTION}
        faqs={TR_TO_PR_FAQS}
        ctaLabel="Check Eligibility"
      >
        <GuideH2>Who This Pathway Serves</GuideH2>
        <GuideP>
          This pathway serves temporary residents with valid Canadian work records.
          Existing employer evidence gives a stronger base than starting from zero.
        </GuideP>
        <GuideH2>Eligibility Priorities</GuideH2>
        <GuideUl>
          <li>Valid temporary status and qualifying Canadian experience.</li>
          <li>Correct NOC alignment and work-history evidence.</li>
          <li>Required language test results for the target stream.</li>
          <li>Complete records for identity, employment, and compliance.</li>
        </GuideUl>
        <GuideH2>Ready-to-Apply Checklist</GuideH2>
        <GuideOl>
          <li>Verify your pathway and intake timing.</li>
          <li>Gather complete employer letters and pay records.</li>
          <li>Schedule language testing if required.</li>
          <li>Build a filing timeline for submission readiness.</li>
        </GuideOl>
        <GuideH2>Related 2026 Guides</GuideH2>
        <GuideUl>
          <li>
            <Link
              href="/guides/work-permits-2026"
              className="font-semibold text-secondary underline-offset-2 hover:underline"
            >
              Work Permits 2026
            </Link>
          </li>
          <li>
            <Link
              href="/guides/express-entry-2026"
              className="font-semibold text-secondary underline-offset-2 hover:underline"
            >
              Express Entry 2026
            </Link>
          </li>
          <li>
            <Link
              href="/guides/oinp-2026-niagara"
              className="font-semibold text-secondary underline-offset-2 hover:underline"
            >
              OINP 2026 (Ontario)
            </Link>
          </li>
        </GuideUl>
      </GuidePage>
      <SiteFooter />
    </>
  );
}
