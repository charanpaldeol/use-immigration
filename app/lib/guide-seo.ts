// Purpose: JSON-LD builders for guide pages (Article, BreadcrumbList, FAQPage).
import { SITE_URL } from "@/lib/site-business";

export type GuideFaqItem = {
  question: string;
  answer: string;
};

export type GuideJsonLdInput = {
  path: string;
  headline: string;
  description: string;
  dateModified: string;
  faqs?: GuideFaqItem[];
};

function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function buildBreadcrumbListJsonLd(
  path: string,
  pageTitle: string,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "2026 Guides",
        item: absoluteUrl("/guides"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pageTitle,
        item: absoluteUrl(path),
      },
    ],
  };
}

export function buildArticleJsonLd(input: GuideJsonLdInput): Record<string, unknown> {
  const url = absoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url,
    mainEntityOfPage: url,
    dateModified: input.dateModified,
    datePublished: "2026-01-15",
    author: {
      "@type": "Organization",
      name: "USD Immigration",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "USD Immigration",
      url: SITE_URL,
    },
    inLanguage: "en-CA",
  };
}

export function buildFaqPageJsonLd(faqs: GuideFaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildGuideJsonLdBlocks(input: GuideJsonLdInput): Record<string, unknown>[] {
  const blocks: Record<string, unknown>[] = [
    buildArticleJsonLd(input),
    buildBreadcrumbListJsonLd(input.path, input.headline),
  ];
  if (input.faqs && input.faqs.length > 0) {
    blocks.push(buildFaqPageJsonLd(input.faqs));
  }
  return blocks;
}
