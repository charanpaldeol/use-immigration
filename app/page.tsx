// Purpose: This file builds the national (Canada-wide) homepage for the firm's 2026 content rollout.
import type { Metadata } from "next";
import { ContactSection } from "./components/contact-section";
import { GuidesSection } from "./components/home/guides-section";
import { HeroSection } from "./components/home/hero-section";
import { ProcessSection } from "./components/home/process-section";
import { ServicesSection } from "./components/home/services-section";
import { SiteFooter } from "./components/site-footer";

export const metadata: Metadata = {
  title: {
    absolute: "USD Immigration | Canadian Immigration Consultants 2026",
  },
  description:
    "Canada-wide immigration consultants for Express Entry, PNP, work permits, study permits, family sponsorship, and citizenship — with an office in Niagara Falls, Ontario.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "USD Immigration | Canadian Immigration Consultants 2026",
    description:
      "Canadian immigration consultants for 2026 pathways: Express Entry, OINP, work permits, study permits, family sponsorship, Super Visa, and citizenship. Based in Niagara Falls, Ontario.",
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
