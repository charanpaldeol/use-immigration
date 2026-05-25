// Purpose: This file builds the About page introducing the firm and its Niagara-based immigration consulting team.
import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  title: "About | Niagara Immigration Consultants",
  description:
    "USD Immigration is a Niagara Falls-based Canadian immigration consulting team serving the GTA and Niagara Region, specializing in Express Entry, OINP, work permits, LMIA, study permits, and family sponsorship.",
  keywords: [
    "GTA immigration consultants Ontario",
    "USD Immigration about",
    "Niagara immigration consultants",
    "Canadian immigration consulting team",
    "Niagara Falls immigration office",
    "Ontario immigration consultants",
    "immigration consultants Niagara",
    "CICC RCIC Niagara",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About USD Immigration | Niagara Immigration Consultants",
    description:
      "Niagara Falls-based team serving the GTA and Niagara Region: Express Entry, OINP, work permits, study permits, and family sponsorship.",
    url: "/about",
    type: "website",
    siteName: "USD Immigration",
    locale: "en_CA",
  },
};

const TEAM = [
  {
    name: "Senior Immigration Consultant",
    focus: "Express Entry, OINP, and employer-driven pathways",
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
              We are a Niagara-based immigration consulting team focused on
              clear strategy, compliant applications, and practical outcomes.
              After serving clients across Canada, we expanded to Niagara Falls
              to support the region&apos;s growing 2026 immigration opportunities.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-margin-mobile py-section-padding md:px-margin-desktop">
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
              <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
                Our team supports work permits, permanent residence pathways,
                student options, family sponsorship, and business-related
                immigration needs with a consistent process from intake through
                submission.
              </p>
            </article>

            <article className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7 shadow-[var(--shadow-institutional)]">
              <h2 className="font-headline text-headline-md font-semibold text-primary">
                Why Niagara
              </h2>
              <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
                Niagara offers strong regional potential for skilled workers and
                employers in healthcare, trades, hospitality, and technology.
                We positioned our office here to align our clients with local
                opportunities and Ontario-focused nomination pathways.
              </p>
              <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
                With a lower cost of living than major metro areas and growing
                employer demand, Niagara can be a strategic location for
                applicants who want long-term stability in Canada.
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
