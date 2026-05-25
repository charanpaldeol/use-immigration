// Purpose: This file builds the Niagara-focused homepage for the firm's 2026 content rollout.
import type { Metadata } from "next";
import { ContactSection } from "./components/contact-section";
import { GuidesSection } from "./components/home/guides-section";
import { HeroSection } from "./components/home/hero-section";
import { ProcessSection } from "./components/home/process-section";
import { ServicesSection } from "./components/home/services-section";
import { SiteFooter } from "./components/site-footer";

export const metadata: Metadata = {
  title: {
    absolute: "USD Immigration | Niagara Immigration Consultants 2026",
  },
  description:
    "Niagara Falls immigration consultants serving the GTA and Niagara Region for 2026 Canadian pathways: Express Entry, OINP, work permits and LMIA, study permits, family and spousal sponsorship, Super Visa, citizenship, and humanitarian and compassionate cases.",
  keywords: [
    "GTA immigration consultant",
    "Greater Toronto Area immigration Ontario",
    "Toronto immigration consultant Ontario",
    "Mississauga immigration consulting",
    "Hamilton immigration consultant",
    "St Catharines immigration consultant",
    "Niagara immigration consultant",
    "Niagara Falls immigration office",
    "Canadian immigration consultant Ontario",
    "Express Entry 2026",
    "Federal Skilled Worker",
    "Canadian Experience Class",
    "Federal Skilled Trades",
    "Comprehensive Ranking System",
    "OINP",
    "Ontario Immigrant Nominee Program",
    "Provincial Nominee Program",
    "Work Permit Canada",
    "LMIA",
    "LMIA-exempt work permit",
    "CUSMA work permit",
    "Intra-Company Transfer",
    "C11 Work Permit",
    "Start-Up Visa",
    "Study Permit Canada",
    "PGWP",
    "Family Sponsorship",
    "Spousal Sponsorship",
    "Parent and Grandparent Sponsorship",
    "Super Visa",
    "Visitor Visa",
    "Canadian Citizenship",
    "PR Card Renewal",
    "Humanitarian and Compassionate",
    "French-language Express Entry",
    "Senior Manager Express Entry 2026",
    "TR to PR pathway",
    "Niagara OINP",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "USD Immigration | Niagara Immigration Consultants 2026",
    description:
      "Niagara Falls consultants serving the GTA and Niagara Region for 2026 pathways: Express Entry, OINP, work permits, study permits, family sponsorship, Super Visa, and citizenship.",
    url: "/",
    type: "website",
    siteName: "USD Immigration",
    locale: "en_CA",
  },
};

export default function Home() {
  return (
    <>
      <main id="main-content" className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <GuidesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
