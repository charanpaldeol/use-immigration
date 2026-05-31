// Purpose: Shared layout for immigration guides (hero, JSON-LD, FAQ, disclaimer, CTA).
import Link from "next/link";
import {
  buildGuideJsonLdBlocks,
  type GuideFaqItem,
} from "@/app/lib/guide-seo";
import { GuideDisclaimer } from "./guide-disclaimer";

export type GuidePageProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  lastUpdated: string;
  canonicalPath: string;
  schemaHeadline: string;
  schemaDescription: string;
  faqs: GuideFaqItem[];
  ctaLabel: string;
  children: React.ReactNode;
};

function JsonLdScripts({ blocks }: { blocks: Record<string, unknown>[] }) {
  return (
    <>
      {blocks.map((block, index) => (
        <script
          key={`${String(block["@type"])}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}

function formatLastUpdated(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Toronto",
  });
}

export function GuidePage({
  eyebrow = "2026 Guide",
  title,
  intro,
  lastUpdated,
  canonicalPath,
  schemaHeadline,
  schemaDescription,
  faqs,
  ctaLabel,
  children,
}: GuidePageProps) {
  const jsonLd = buildGuideJsonLdBlocks({
    path: canonicalPath,
    headline: schemaHeadline,
    description: schemaDescription,
    dateModified: lastUpdated,
    faqs,
  });

  return (
    <>
      <JsonLdScripts blocks={jsonLd} />
      <main id="main-content" className="flex-1">
        <section className="bg-primary-container py-section-padding">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <p className="font-label text-label-md font-semibold uppercase tracking-[0.08em] text-on-primary/80">
              {eyebrow}
            </p>
            <h1 className="mt-2 font-headline text-headline-lg-mobile font-bold text-on-primary md:text-display-lg">
              {title}
            </h1>
            <p className="mt-stack-md max-w-3xl font-body text-body-lg text-on-primary/90">
              {intro}
            </p>
            <p className="mt-stack-sm font-body text-body-sm text-on-primary/70">
              Last updated: {formatLastUpdated(lastUpdated)}
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-container-max px-margin-mobile py-section-padding md:px-margin-desktop">
          <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-institutional)]">
            {children}

            {faqs.length > 0 && (
              <section className="mt-stack-lg border-t border-outline-variant pt-stack-lg">
                <h2 className="font-headline text-headline-md font-semibold text-primary">
                  Frequently asked questions
                </h2>
                <dl className="mt-stack-md space-y-stack-md">
                  {faqs.map((faq) => (
                    <div key={faq.question}>
                      <dt className="font-label text-label-lg font-semibold text-primary">
                        {faq.question}
                      </dt>
                      <dd className="mt-2 font-body text-body-md text-on-surface-variant">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            <GuideDisclaimer />

            <Link
              href="/#contact"
              className="mt-stack-lg inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 font-label text-label-lg font-semibold tracking-[0.05em] text-on-secondary"
            >
              {ctaLabel}
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
