// Purpose: Express Entry 2026 cornerstone guide (expanded content, Article/FAQ schema).
import type { Metadata } from "next";
import { GuidePage } from "@/app/components/guide-page";
import { SiteFooter } from "@/app/components/site-footer";
import {
  EXPRESS_ENTRY_FAQS,
  GUIDE_LAST_UPDATED,
} from "@/app/lib/guides/constants";
import { ExpressEntry2026Content } from "@/app/lib/guides/express-entry-2026-content";

const SCHEMA_DESCRIPTION =
  "Canada-wide Express Entry strategy for 2026: CRS scoring, FSW, CEC, and FSTP eligibility, NOC alignment, draw trends, and post-ITA document preparation.";

export const metadata: Metadata = {
  title: "Express Entry 2026 Guide: CRS, FSW, CEC & FSTP Strategy",
  description:
    "Canada-wide Express Entry strategy for 2026. CRS scoring, FSW, CEC, and FSTP eligibility, NOC alignment, draw trends, French-language categories, and post-ITA document prep.",
  alternates: { canonical: "/guides/express-entry-2026" },
  openGraph: {
    title: "Express Entry 2026: Canada Strategy Guide | USD Immigration",
    description:
      "CRS scoring, FSW/CEC/FSTP eligibility, NOC alignment, and post-ITA document prep for skilled workers across Canada.",
    url: "/guides/express-entry-2026",
    type: "article",
    siteName: "USD Immigration",
    locale: "en_CA",
    publishedTime: "2026-01-15",
    modifiedTime: GUIDE_LAST_UPDATED,
  },
};

export default function ExpressEntryGuidePage() {
  return (
    <>
      <GuidePage
        eyebrow="Cornerstone Guide"
        title="Express Entry 2026: Canada Strategy Guide"
        intro="Express Entry is a strong route for qualified skilled workers across Canada. This guide explains CRS, program fit, 2026 draw strategy, and post-ITA readiness — with official IRCC sources linked throughout."
        lastUpdated={GUIDE_LAST_UPDATED}
        canonicalPath="/guides/express-entry-2026"
        schemaHeadline="Express Entry 2026: Canada Strategy Guide"
        schemaDescription={SCHEMA_DESCRIPTION}
        faqs={EXPRESS_ENTRY_FAQS}
        ctaLabel="Book Consultation"
      >
        <ExpressEntry2026Content />
      </GuidePage>
      <SiteFooter />
    </>
  );
}
