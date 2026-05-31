// Purpose: OINP 2026 Ontario guide (expanded content, Article/FAQ schema).
import type { Metadata } from "next";
import { GuidePage } from "@/app/components/guide-page";
import { SiteFooter } from "@/app/components/site-footer";
import { GUIDE_LAST_UPDATED, OINP_FAQS } from "@/app/lib/guides/constants";
import { Oinp2026Content } from "@/app/lib/guides/oinp-2026-content";

const SCHEMA_DESCRIPTION =
  "Complete 2026 OINP guide for Ontario applicants: Employer Job Offer, Human Capital, graduate, and business streams with stream-fit and federal-stage checklists.";

export const metadata: Metadata = {
  title: "OINP 2026 Ontario Guide: Streams, Eligibility & Process",
  description:
    "Complete 2026 OINP guide for Ontario applicants. Employer Job Offer, In-Demand Skills, International Student, and Entrepreneur streams with stream-fit and filing checklists.",
  alternates: { canonical: "/guides/oinp-2026-niagara" },
  openGraph: {
    title: "OINP 2026: Complete Ontario Guide | USD Immigration",
    description:
      "Ontario Immigrant Nominee Program 2026 guide: streams, Express Entry alignment, and preparation checklists.",
    url: "/guides/oinp-2026-niagara",
    type: "article",
    siteName: "USD Immigration",
    locale: "en_CA",
    publishedTime: "2026-01-15",
    modifiedTime: GUIDE_LAST_UPDATED,
  },
};

export default function OinpGuidePage() {
  return (
    <>
      <GuidePage
        eyebrow="Cornerstone Guide"
        title="OINP 2026: Complete Ontario Guide"
        intro="OINP is a direct route for Ontario-focused applicants. This guide compares streams, Express Entry alignment, and what to file next — for workers, students, and employers across Ontario including Niagara and the GTA."
        lastUpdated={GUIDE_LAST_UPDATED}
        canonicalPath="/guides/oinp-2026-niagara"
        schemaHeadline="OINP 2026: Complete Ontario Guide"
        schemaDescription={SCHEMA_DESCRIPTION}
        faqs={OINP_FAQS}
        ctaLabel="Get OINP Assessment"
      >
        <Oinp2026Content />
      </GuidePage>
      <SiteFooter />
    </>
  );
}
