// Purpose: This file creates the "Areas We Serve" section listing the GTA and Niagara communities the firm supports.
import Link from "next/link";
import {
  SERVICE_AREAS_CITIES,
  SERVICE_AREAS_HEADLINE,
} from "@/lib/site-business";

const cityListFormatter = new Intl.ListFormat("en-CA", {
  style: "long",
  type: "conjunction",
});

type AreasServedSectionProps = {
  /** Use a unique id when more than one instance exists on the page. */
  id?: string;
  /** Tighter vertical spacing for nested layouts (e.g. About). */
  compact?: boolean;
};

export function AreasServedSection({
  id = "areas-served",
  compact = false,
}: AreasServedSectionProps) {
  const cityList = cityListFormatter.format([...SERVICE_AREAS_CITIES]);

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-header-scroll-offset border-y border-outline-variant bg-surface-container-low ${compact ? "py-stack-lg" : "py-section-padding"
        }`}
    >
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col gap-stack-md md:flex-row md:items-start md:justify-between md:gap-gutter">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-3xl text-primary"
                aria-hidden="true"
              >
                location_on
              </span>
              <h2
                id={`${id}-heading`}
                className="font-headline text-headline-md font-semibold text-primary md:text-headline-lg-mobile"
              >
                Areas We Serve
              </h2>
            </div>
            <p className="mt-stack-md font-body text-body-md text-on-surface-variant md:text-body-lg">
              Our Niagara Falls office supports clients across{" "}
              <span className="font-medium text-on-surface">
                {SERVICE_AREAS_HEADLINE}
              </span>
              . We regularly work with applicants and employers in {cityList},
              and neighbouring Ontario communities by appointment.
            </p>
            <p className="mt-stack-sm font-body text-body-md text-on-surface-variant md:text-body-lg">
              Consultations can be held in person at our Niagara office or
              remotely for clients across the province.
            </p>
          </div>
          <div className="shrink-0 md:pt-1">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded border-2 border-secondary px-6 py-3 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary transition-colors hover:bg-secondary hover:text-on-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-low"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
