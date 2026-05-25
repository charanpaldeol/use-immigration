// Purpose: This file sets the shared page frame for the whole site and loads global fonts and site-wide page settings.
import type { Metadata } from "next";
import { Inter, Montserrat, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL, buildLocalBusinessJsonLd } from "@/lib/site-business";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

// Only the icon glyphs actually rendered on the marketing site.
// Google Fonts requires `icon_names` to be alphabetically sorted; an unsorted
// list returns 400 and the font never loads, leaving raw ligature names visible.
const MATERIAL_ICONS = [
  "arrow_forward",
  "business_center",
  "call",
  "chevron_right",
  "close",
  "expand_more",
  "fact_check",
  "family_restroom",
  "gavel",
  "location_on",
  "mail",
  "menu",
  "person",
  "public",
  "schedule",
  "school",
  "shield",
  "trending_up",
  "verified",
  "visibility",
  "work",
].join(",");

const MATERIAL_SYMBOLS_HREF = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=${MATERIAL_ICONS}&display=swap`;

const localBusinessJsonLd = buildLocalBusinessJsonLd();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "USD Immigration | Niagara Immigration Experts",
    template: "%s | USD Immigration",
  },
  description:
    "Niagara Falls and GTA-focused Canadian immigration consultants for Express Entry, OINP, work permits, LMIA, study permits, family sponsorship, super visa, and citizenship in 2026.",
  keywords: [
    "GTA immigration consultant Ontario",
    "Greater Toronto Area immigration",
    "Niagara immigration consultant",
    "Niagara Falls immigration",
    "Canadian immigration 2026",
    "Express Entry",
    "OINP",
    "Provincial Nominee Program",
    "Work Permit Canada",
    "LMIA",
    "Study Permit Canada",
    "Spousal Sponsorship",
    "Family Sponsorship",
    "Super Visa",
    "Canadian Citizenship",
    "USD Immigration",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "USD Immigration | Niagara Immigration Experts",
    description:
      "Niagara Falls and GTA-focused immigration consulting for Express Entry, OINP, work permits, LMIA, study permits, family sponsorship, super visa, and citizenship in 2026.",
    url: SITE_URL,
    type: "website",
    siteName: "USD Immigration",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "USD Immigration | Niagara Immigration Experts",
    description:
      "Niagara Falls and GTA-focused immigration consulting for 2026 Canadian pathways.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="stylesheet" href={MATERIAL_SYMBOLS_HREF} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-primary-container focus:px-4 focus:py-2.5 focus:font-label focus:text-label-lg focus:font-semibold focus:text-on-primary focus:shadow-[var(--shadow-focus-ring)] motion-reduce:transition-none"
        >
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
