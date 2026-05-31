// Purpose: Family Sponsorship 2026 guide (spousal, PGP, Super Visa).
import type { Metadata } from "next";
import { GuidePage } from "@/app/components/guide-page";
import { SiteFooter } from "@/app/components/site-footer";
import {
  FAMILY_SPONSORSHIP_FAQS,
  GUIDE_LAST_UPDATED,
} from "@/app/lib/guides/constants";
import { FamilySponsorship2026Content } from "@/app/lib/guides/family-sponsorship-2026-content";

const SCHEMA_DESCRIPTION =
  "2026 Canadian family sponsorship guide: spousal and partner sponsorship, dependent children, Parent and Grandparent Program, Super Visa, and genuine relationship evidence.";

export const metadata: Metadata = {
  title: "Family Sponsorship 2026: Spouse, PGP & Super Visa Guide",
  description:
    "Family sponsorship in Canada for 2026: spouse and partner routes, inland vs outland filing, PGP intake, Super Visa, sponsor income rules, and relationship documentation.",
  alternates: { canonical: "/guides/family-sponsorship-2026" },
  openGraph: {
    title: "Family Sponsorship 2026 | USD Immigration",
    description: SCHEMA_DESCRIPTION,
    url: "/guides/family-sponsorship-2026",
    type: "article",
    siteName: "USD Immigration",
    locale: "en_CA",
    publishedTime: "2026-01-15",
    modifiedTime: GUIDE_LAST_UPDATED,
  },
};

export default function FamilySponsorshipGuidePage() {
  return (
    <>
      <GuidePage
        title="Family Sponsorship 2026: Spouse, Parents & Dependants"
        intro="Reuniting families in Canada requires the right stream, complete relationship evidence, and sponsor eligibility. This guide covers spousal sponsorship, dependants, PGP, and Super Visa options with IRCC-aligned checklists."
        lastUpdated={GUIDE_LAST_UPDATED}
        canonicalPath="/guides/family-sponsorship-2026"
        schemaHeadline="Family Sponsorship 2026: Spouse, Parents & Dependants"
        schemaDescription={SCHEMA_DESCRIPTION}
        faqs={FAMILY_SPONSORSHIP_FAQS}
        ctaLabel="Start Family Sponsorship Review"
      >
        <FamilySponsorship2026Content />
      </GuidePage>
      <SiteFooter />
    </>
  );
}
