// Purpose: This file sets the shared page frame for the whole site and loads global fonts and site-wide page settings.
import type { Metadata } from "next";
import { Inter, Montserrat, Source_Serif_4 } from "next/font/google";
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
const MATERIAL_ICONS = [
  "verified",
  "trending_up",
  "work",
  "school",
  "family_restroom",
  "business_center",
  "gavel",
  "visibility",
  "public",
  "arrow_forward",
  "chevron_right",
  "call",
  "mail",
  "location_on",
  "schedule",
].join(",");

const MATERIAL_SYMBOLS_HREF = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=${MATERIAL_ICONS}&display=swap`;

export const metadata: Metadata = {
  title: "USD Immigration | Global Migration Experts",
  description:
    "Licensed consultants helping individuals, families, and businesses migrate to Canada, the US, the UK, and Australia.",
  openGraph: {
    title: "USD Immigration | Global Migration Experts",
    description:
      "Licensed consultants helping individuals, families, and businesses migrate to Canada, the US, the UK, and Australia.",
    type: "website",
    siteName: "USD Immigration",
  },
  twitter: {
    card: "summary_large_image",
    title: "USD Immigration | Global Migration Experts",
    description:
      "Licensed consultants helping individuals, families, and businesses migrate.",
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
      </body>
    </html>
  );
}
