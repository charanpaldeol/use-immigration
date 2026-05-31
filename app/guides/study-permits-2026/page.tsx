// Purpose: Study Permits 2026 guide (PAL/TAL, PGWP, study-to-PR sequencing).
import type { Metadata } from "next";
import { GuidePage } from "@/app/components/guide-page";
import { SiteFooter } from "@/app/components/site-footer";
import {
  GUIDE_LAST_UPDATED,
  STUDY_PERMITS_FAQS,
} from "@/app/lib/guides/constants";
import { StudyPermits2026Content } from "@/app/lib/guides/study-permits-2026-content";

const SCHEMA_DESCRIPTION =
  "2026 Canadian study permit guide: PAL/TAL attestation, designated learning institutions, work while studying, PGWP eligibility, and pathways to permanent residence.";

export const metadata: Metadata = {
  title: "Study Permits 2026: Canada Student Visa & PGWP Guide",
  description:
    "Study permit strategy for 2026: PAL/TAL requirements, DLI selection, on-campus work rules, Post-Graduation Work Permit planning, and study-to-PR pathways across Canada.",
  alternates: { canonical: "/guides/study-permits-2026" },
  openGraph: {
    title: "Study Permits 2026 | USD Immigration",
    description: SCHEMA_DESCRIPTION,
    url: "/guides/study-permits-2026",
    type: "article",
    siteName: "USD Immigration",
    locale: "en_CA",
    publishedTime: "2026-01-15",
    modifiedTime: GUIDE_LAST_UPDATED,
  },
};

export default function StudyPermitsGuidePage() {
  return (
    <>
      <GuidePage
        title="Study Permits 2026: Canada Student & PGWP Guide"
        intro="International students need a clear plan for attestation, funds, work authorization, and post-graduation options. This guide maps 2026 study permit steps and how study fits into longer-term permanent residence strategy."
        lastUpdated={GUIDE_LAST_UPDATED}
        canonicalPath="/guides/study-permits-2026"
        schemaHeadline="Study Permits 2026: Canada Student & PGWP Guide"
        schemaDescription={SCHEMA_DESCRIPTION}
        faqs={STUDY_PERMITS_FAQS}
        ctaLabel="Discuss Study Permit Strategy"
      >
        <StudyPermits2026Content />
      </GuidePage>
      <SiteFooter />
    </>
  );
}
