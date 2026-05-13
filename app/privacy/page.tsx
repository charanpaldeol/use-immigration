// Purpose: Privacy Policy page — placeholder content to be reviewed by legal counsel before publication.
import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy | USD Immigration",
  description:
    "How USD Immigration collects, uses, and safeguards personal information shared by prospective and current clients.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-margin-mobile py-section-padding md:px-margin-desktop">
        <h1 className="mb-stack-lg font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
          Privacy Policy
        </h1>
        <p className="mb-stack-md font-body text-body-md text-on-surface-variant">
          Last updated: {new Date().toLocaleDateString("en-CA")}.
        </p>
        <div className="space-y-stack-lg font-body text-body-md text-on-surface">
          <section>
            <h2 className="mb-stack-sm font-headline text-headline-md font-semibold text-primary">
              Information we collect
            </h2>
            <p>
              We collect information you provide directly — name, email,
              phone, immigration history, and supporting documents — when you
              request an assessment, retain our services, or contact us.
            </p>
          </section>
          <section>
            <h2 className="mb-stack-sm font-headline text-headline-md font-semibold text-primary">
              How we use it
            </h2>
            <p>
              Your information is used to evaluate eligibility, prepare and
              submit applications, communicate with you about your file, and
              comply with regulatory obligations.
            </p>
          </section>
          <section>
            <h2 className="mb-stack-sm font-headline text-headline-md font-semibold text-primary">
              Sharing
            </h2>
            <p>
              We share information only with government bodies handling your
              application, partner counsel where required, and service
              providers bound by confidentiality. We do not sell personal data.
            </p>
          </section>
          <section>
            <h2 className="mb-stack-sm font-headline text-headline-md font-semibold text-primary">
              Your rights
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              information by writing to{" "}
              <a
                href="mailto:privacy@usdimmigration.com"
                className="underline hover:text-secondary"
              >
                privacy@usdimmigration.com
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
