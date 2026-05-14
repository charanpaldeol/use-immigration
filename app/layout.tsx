// Purpose: This file sets the shared page frame for the whole site and loads global fonts and site-wide page settings.
import type { Metadata } from "next";
import { Inter, Montserrat, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  "family_restroom",
  "gavel",
  "location_on",
  "mail",
  "menu",
  "public",
  "schedule",
  "school",
  "trending_up",
  "verified",
  "visibility",
  "work",
].join(",");

const MATERIAL_SYMBOLS_HREF = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=${MATERIAL_ICONS}&display=swap`;

export const metadata: Metadata = {
  title: "USD Immigration | Niagara Immigration Experts",
  description:
    "Niagara-based immigration consultants helping skilled workers, students, families, and employers navigate 2026 Canadian pathways.",
  openGraph: {
    title: "USD Immigration | Niagara Immigration Experts",
    description:
      "Niagara-based immigration consultants helping skilled workers, students, families, and employers navigate 2026 Canadian pathways.",
    type: "website",
    siteName: "USD Immigration",
  },
  twitter: {
    card: "summary_large_image",
    title: "USD Immigration | Niagara Immigration Experts",
    description:
      "Niagara-based immigration consulting for 2026 Canadian pathways.",
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
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:font-label focus:text-label-lg focus:text-on-primary"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
