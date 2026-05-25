// Purpose: Homepage grid of core immigration service pathways.
import Link from "next/link";
import { HOME_SERVICES } from "../../lib/home-content";
import { Eyebrow } from "./eyebrow";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto max-w-container-max scroll-mt-header-scroll-offset px-margin-mobile py-section-padding md:px-margin-desktop"
    >
      <div className="mb-10 max-w-2xl md:mb-12">
        <Eyebrow>Core Services</Eyebrow>
        <h2 className="mt-stack-sm font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
          Core Immigration Services
        </h2>
        <p className="mt-stack-md font-body text-body-md text-on-surface-variant md:text-body-lg">
          Direct guidance across the eight pathways most clients use to live,
          work, study, and settle in Canada.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {HOME_SERVICES.map((service) => (
          <article
            key={service.title}
            className="group rounded-lg border border-outline-variant bg-surface-container-lowest p-5 transition-colors hover:border-primary-container/40"
          >
            <div className="flex items-start gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-outline-variant bg-surface-container-low text-primary"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {service.icon}
                </span>
              </span>
              <h3 className="font-headline text-body-lg font-semibold leading-snug text-primary">
                {service.title}
              </h3>
            </div>
            <p className="mt-2 font-body text-body-md leading-snug text-on-surface-variant">
              {service.body}
            </p>
            <Link
              href={service.href}
              className="mt-3 inline-flex items-center gap-1.5 font-label text-label-md font-semibold tracking-[0.05em] text-secondary transition-colors hover:text-secondary-container"
            >
              {service.cta}
              <span
                className="material-symbols-outlined text-base"
                aria-hidden="true"
              >
                {service.ctaIcon}
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
