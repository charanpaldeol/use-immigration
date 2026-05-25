// Purpose: Homepage grid of core immigration service pathways.
import { HOME_SERVICES } from "../../lib/home-content";
import { Eyebrow } from "./eyebrow";
import { HomeServiceCard } from "./home-service-card";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="mx-auto max-w-container-max scroll-mt-header-scroll-offset px-margin-mobile py-section-padding md:px-margin-desktop"
    >
      <div className="max-w-2xl">
        <Eyebrow>Core Services</Eyebrow>
        <h2
          id="services-heading"
          className="mt-stack-sm font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg"
        >
          Core Immigration Services
        </h2>
        <p className="mt-stack-md font-body text-body-md text-on-surface-variant md:text-body-lg">
          Direct guidance across the eight pathways most clients use to live,
          work, study, and settle in Canada.
        </p>
      </div>

      <ul className="mt-section-padding grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        {HOME_SERVICES.map((service) => (
          <li key={service.title}>
            <HomeServiceCard service={service} />
          </li>
        ))}
      </ul>
    </section>
  );
}
