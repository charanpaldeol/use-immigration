// Purpose: About page with regulated-consultant disclosure and team overview.
import type { Metadata } from "next";
import {
  CICC_FIND_CONSULTANT_URL,
  LEGAL_BUSINESS_NAME,
  PHONE_NAP_NOTE,
  REGULATED_CONSULTANTS,
} from "@/lib/site-business";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "USD Immigration is a Canadian immigration consulting team serving clients across Canada from our Niagara Falls, Ontario office, specializing in Express Entry, OINP, work permits, study permits, and family sponsorship.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About USD Immigration | Canadian Immigration Consultants",
    description:
      "Canada-wide team based in Niagara Falls, Ontario: Express Entry, OINP, work permits, study permits, and family sponsorship.",
    url: "/about",
    type: "website",
    siteName: "USD Immigration",
    locale: "en_CA",
  },
};

const TEAM = [
  {
    name: "Upneet Singh Dhaliwal, RCIC (R534701)",
    focus: "Express Entry, OINP, work permits, and family sponsorship",
  },
  {
    name: "Case Processing Lead",
    focus: "Application quality control and timeline management",
  },
  {
    name: "Client Success Advisor",
    focus: "Settlement planning for workers, students, and families",
  },
];

export default function AboutPage() {
  return (
    <>
      <main id="main-content" className="flex-1">
        <section className="bg-primary-container py-section-padding">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <h1 className="font-headline text-headline-lg-mobile font-bold text-on-primary md:text-display-lg">
              About USD Immigration
            </h1>
            <p className="mt-stack-md max-w-3xl font-body text-body-lg text-on-primary/90">
              We are a Canadian immigration consulting team focused on clear
              strategy, compliant applications, and practical outcomes. We serve
              clients across Canada, with an office in Niagara Falls, Ontario for
              in-person work and Ontario-focused pathways.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-margin-mobile py-section-padding md:px-margin-desktop">
          <article className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-institutional)]">
            <h2 className="font-headline text-headline-md font-semibold text-primary">
              Regulated representation
            </h2>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
              Immigration advice and representation are provided through{" "}
              {LEGAL_BUSINESS_NAME}, in good standing with the College of
              Immigration and Citizenship Consultants (CICC). You can confirm any
              consultant&apos;s licence on the{" "}
              <a
                href={CICC_FIND_CONSULTANT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-secondary underline-offset-2 hover:underline"
              >
                CICC public register
              </a>
              .
            </p>
            <ul className="mt-stack-md space-y-4">
              {REGULATED_CONSULTANTS.map((consultant) => (
                <li
                  key={consultant.collegeId}
                  className="rounded-lg border border-outline-variant/70 bg-surface-container-low p-4"
                >
                  <p className="font-label text-label-lg font-semibold text-primary">
                    <a
                      href={consultant.registerProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline-offset-2 hover:underline"
                    >
                      {consultant.name}
                    </a>
                  </p>
                  <p className="mt-1 font-body text-body-sm text-on-surface-variant">
                    {consultant.designation} · College ID {consultant.collegeId} ·{" "}
                    {consultant.licenseStatus} (licensed since{" "}
                    {consultant.licensedSince})
                  </p>
                  <p className="mt-2 font-body text-body-md text-on-surface-variant">
                    {consultant.focus}
                  </p>
                  <p className="mt-2 font-body text-body-sm">
                    <a
                      href={consultant.registerProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-secondary underline-offset-2 hover:underline"
                    >
                      View CICC register profile
                    </a>
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-stack-md font-body text-body-sm text-on-surface-variant">
              {PHONE_NAP_NOTE}
            </p>
          </article>
        </section>

        <section className="mx-auto max-w-container-max px-margin-mobile pb-section-padding md:px-margin-desktop">
          <div className="grid gap-gutter lg:grid-cols-2">
            <article className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-institutional)]">
              <h2 className="font-headline text-headline-md font-semibold text-primary">
                Our Mission
              </h2>
              <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
                We help individuals and families make informed immigration
                decisions with straightforward advice and structured planning.
                Every case is built around eligibility, documentation accuracy,
                and realistic timelines.
              </p>
            </article>

            <article className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-institutional)]">
              <h2 className="font-headline text-headline-md font-semibold text-primary">
                Serving Clients Across Canada
              </h2>
              <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
                Remote consultations make distance a non-issue. Our Niagara Falls
                office supports OINP and employer-driven streams; we work with
                applicants nationwide who want long-term stability in Canada.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-surface-container-low py-section-padding">
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
              Team Expertise
            </h2>
            <div className="mt-stack-lg grid gap-gutter md:grid-cols-3">
              {TEAM.map((member) => (
                <article
                  key={member.name}
                  className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6"
                >
                  <h3 className="font-label text-label-lg font-semibold tracking-[0.05em] text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-2 font-body text-body-md text-on-surface-variant">
                    {member.focus}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
