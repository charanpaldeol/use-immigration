// Purpose: Terms of Service page — placeholder content to be reviewed by legal counsel before publication.
import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of USD Immigration's website and consultation services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | USD Immigration",
    description:
      "The terms governing your use of USD Immigration's website and consultation services.",
    url: "/terms",
    type: "website",
    siteName: "USD Immigration",
    locale: "en_CA",
  },
};

export default function TermsPage() {
  return (
    <>
      <main
        id="main-content"
        className="mx-auto w-full max-w-3xl px-margin-mobile py-section-padding md:px-margin-desktop"
      >
        <h1 className="mb-stack-lg font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
          Terms of Service
        </h1>
        <p className="mb-stack-md font-body text-body-md text-on-surface-variant">
          Last updated: {new Date().toLocaleDateString("en-CA")}.
        </p>
        <div className="space-y-stack-lg font-body text-body-md text-on-surface">
          <section>
            <h2 className="mb-stack-sm font-headline text-headline-md font-semibold text-primary">
              Use of this site
            </h2>
            <p>
              The information on this site is provided for general guidance and
              does not constitute legal advice. A formal engagement begins only
              after a signed retainer agreement.
            </p>
          </section>
          <section>
            <h2 className="mb-stack-sm font-headline text-headline-md font-semibold text-primary">
              Assessments
            </h2>
            <p>
              Free assessments are preliminary and based on the information you
              provide. They are not a guarantee of approval.
            </p>
          </section>
          <section>
            <h2 className="mb-stack-sm font-headline text-headline-md font-semibold text-primary">
              Intellectual property
            </h2>
            <p>
              All content, branding, and materials on this site are owned by
              USD Immigration and may not be reproduced without permission.
            </p>
          </section>
          <section>
            <h2 className="mb-stack-sm font-headline text-headline-md font-semibold text-primary">
              Contact
            </h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a
                href="mailto:legal@usdimmigration.ca"
                className="underline hover:text-secondary"
              >
                legal@usdimmigration.ca
              </a>
              .
            </p>
          </section>
          <p className="text-on-surface-variant">
            This page is a working draft and will be reviewed by counsel before
            launch.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
