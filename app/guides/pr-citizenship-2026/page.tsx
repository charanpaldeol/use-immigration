// Purpose: PR & Citizenship 2026 guide with Article/FAQ schema.
import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/app/components/guide-page";
import { GuideH2, GuideP, GuideUl } from "@/app/components/guide-prose";
import { SiteFooter } from "@/app/components/site-footer";
import {
  GUIDE_LAST_UPDATED,
  PR_CITIZENSHIP_FAQS,
} from "@/app/lib/guides/constants";

const SCHEMA_DESCRIPTION =
  "2026 guide to maintaining Canadian status: permanent residence and the residency obligation, PR card renewal, citizenship requirements, and visitor visas.";

export const metadata: Metadata = {
  title: "PR & Citizenship 2026: Status, Renewal & Naturalization",
  description: SCHEMA_DESCRIPTION,
  alternates: { canonical: "/guides/pr-citizenship-2026" },
  openGraph: {
    title: "PR & Citizenship 2026 Guide | USD Immigration",
    description: SCHEMA_DESCRIPTION,
    url: "/guides/pr-citizenship-2026",
    type: "article",
    siteName: "USD Immigration",
    locale: "en_CA",
    modifiedTime: GUIDE_LAST_UPDATED,
  },
};

export default function PrCitizenshipGuidePage() {
  return (
    <>
      <GuidePage
        eyebrow="Pathway Guide"
        title="PR & Citizenship 2026 Guide"
        intro="Status work does not end at approval. This guide covers permanent residence maintenance, card renewal, citizenship, and visitor status for 2026."
        lastUpdated={GUIDE_LAST_UPDATED}
        canonicalPath="/guides/pr-citizenship-2026"
        schemaHeadline="PR & Citizenship 2026 Guide"
        schemaDescription={SCHEMA_DESCRIPTION}
        faqs={PR_CITIZENSHIP_FAQS}
        ctaLabel="Book Consultation"
      >
        <GuideH2>Permanent Residence (PR)</GuideH2>
        <GuideP>
          PR gives the right to live and work across Canada with a residency
          obligation you must meet. Clear travel and employment records protect your
          status over time.
        </GuideP>
        <GuideH2>PR Card Renewal</GuideH2>
        <GuideP>
          PR cards expire and need timely renewal for travel. Plan renewal well
          before expiry — carriers usually require proof of status to board flights
          to Canada.
        </GuideP>
        <GuideH2>Canadian Citizenship</GuideH2>
        <GuideP>
          Citizenship follows qualifying physical presence as a PR. Language and
          knowledge requirements apply by age. Use IRCC&apos;s physical presence
          calculator before applying.
        </GuideP>
        <GuideH2>Related 2026 Guides</GuideH2>
        <GuideUl>
          <li>
            <Link
              href="/guides/tr-to-pr-2026"
              className="font-semibold text-secondary underline-offset-2 hover:underline"
            >
              TR to PR Pathway 2026
            </Link>
          </li>
          <li>
            <Link
              href="/guides/family-sponsorship-2026"
              className="font-semibold text-secondary underline-offset-2 hover:underline"
            >
              Family Sponsorship 2026
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
        </GuideUl>
      </GuidePage>
      <SiteFooter />
    </>
  );
}
