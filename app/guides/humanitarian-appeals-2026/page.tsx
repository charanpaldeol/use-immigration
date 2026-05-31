// Purpose: Humanitarian & Appeals 2026 guide with Article/FAQ schema.
import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/app/components/guide-page";
import { GuideH2, GuideP, GuideUl } from "@/app/components/guide-prose";
import { SiteFooter } from "@/app/components/site-footer";
import {
  GUIDE_LAST_UPDATED,
  HUMANITARIAN_FAQS,
} from "@/app/lib/guides/constants";

const SCHEMA_DESCRIPTION =
  "2026 guide to complex immigration matters: Humanitarian & Compassionate applications, medical and criminal inadmissibility, and detention reviews.";

export const metadata: Metadata = {
  title: "Humanitarian & Appeals 2026: H&C, Inadmissibility, Detention",
  description: SCHEMA_DESCRIPTION,
  alternates: { canonical: "/guides/humanitarian-appeals-2026" },
  openGraph: {
    title: "Humanitarian & Appeals 2026 Guide | USD Immigration",
    description: SCHEMA_DESCRIPTION,
    url: "/guides/humanitarian-appeals-2026",
    type: "article",
    siteName: "USD Immigration",
    locale: "en_CA",
    modifiedTime: GUIDE_LAST_UPDATED,
  },
};

export default function HumanitarianAppealsGuidePage() {
  return (
    <>
      <GuidePage
        eyebrow="Pathway Guide"
        title="Humanitarian & Appeals 2026 Guide"
        intro="Some cases need more than a standard application. This guide covers humanitarian relief, inadmissibility, and detention reviews — and when licensed legal representation is required."
        lastUpdated={GUIDE_LAST_UPDATED}
        canonicalPath="/guides/humanitarian-appeals-2026"
        schemaHeadline="Humanitarian & Appeals 2026 Guide"
        schemaDescription={SCHEMA_DESCRIPTION}
        faqs={HUMANITARIAN_FAQS}
        ctaLabel="Book Consultation"
      >
        <GuideH2>Humanitarian & Compassionate (H&C)</GuideH2>
        <GuideP>
          An H&C application weighs hardship and establishment in Canada. It is
          discretionary and fact-specific. Strong evidence and careful submissions
          matter most.
        </GuideP>
        <GuideH2>Medical & Criminal Inadmissibility</GuideH2>
        <GuideP>
          Inadmissibility can block entry or status. Medical grounds, criminality,
          and misrepresentation are common causes. Remedies may include rehabilitation
          or a temporary resident permit.
        </GuideP>
        <GuideH2>Detention Reviews</GuideH2>
        <GuideP>
          A detention review tests the grounds for holding a person. The Immigration
          Division reviews custody at set intervals. A clear release plan and
          conditions can be presented.
        </GuideP>
        <GuideH2>When These Routes Apply</GuideH2>
        <GuideP>
          These matters often involve the Immigration and Refugee Board. Some appeals
          and Federal Court steps require a licensed lawyer. We advise honestly on the
          right representation.
        </GuideP>
        <GuideH2>Related 2026 Guides</GuideH2>
        <GuideUl>
          <li>
            <Link
              href="/guides/pr-citizenship-2026"
              className="font-semibold text-secondary underline-offset-2 hover:underline"
            >
              PR & Citizenship 2026
            </Link>
          </li>
          <li>
            <Link
              href="/guides"
              className="font-semibold text-secondary underline-offset-2 hover:underline"
            >
              All 2026 Guides
            </Link>
          </li>
        </GuideUl>
      </GuidePage>
      <SiteFooter />
    </>
  );
}
