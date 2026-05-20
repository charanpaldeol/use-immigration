// Purpose: Homepage grid of core immigration service pathways.
import Link from "next/link";
import { HOME_SERVICES } from "../../lib/home-content";
import { Eyebrow } from "./eyebrow";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto max-w-container-max scroll-mt-20 px-margin-mobile py-section-padding md:px-margin-desktop"
    >
      <div className="mb-section-padding max-w-2xl">
        <Eyebrow>Core Services</Eyebrow>
        <h2 className="mt-stack-sm font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
          Core Immigration Services
        </h2>
        <p className="mt-stack-md font-body text-body-md text-on-surface-variant md:text-body-lg">
          Direct guidance across the eight pathways most clients use to live,
          work, study, and settle in Canada.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
        {HOME_SERVICES.map((service) => (
          <article
            key={service.title}
            className="group flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-8 transition-colors hover:border-primary-container/40"
          >
            <span
              className="flex h-12 w-12 items-center justify-center rounded border border-outline-variant bg-surface-container-low text-primary"
              aria-hidden="true"
            >
              <span className="material-symbols-outlined text-[26px]">
                {service.icon}
              </span>
            </span>
            <h3 className="mt-stack-md font-headline text-headline-md font-semibold text-primary">
              {service.title}
            </h3>
            <p className="mt-stack-sm flex-1 font-body text-body-md text-on-surface-variant">
              {service.body}
            </p>
            <Link
              href={service.href}
              className="mt-stack-lg inline-flex items-center gap-2 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary transition-colors hover:text-secondary-container"
            >
              {service.cta}
              <span
                className="material-symbols-outlined text-lg"
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
