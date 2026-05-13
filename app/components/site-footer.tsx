// Purpose: This file creates the bottom section of the site, including helpful links, newsletter signup, and legal text.
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-auto bg-primary text-on-primary">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile py-section-padding md:grid-cols-4 md:px-margin-desktop">
        <div className="md:col-span-1">
          <div className="mb-stack-md font-headline text-headline-md font-bold">
            USD Immigration
          </div>
          <p className="font-body text-body-md text-on-primary/80">
            Expert legal guidance for your global journey. Professionalism you
            can trust, outcomes you can rely on.
          </p>
        </div>
        <div>
          <h2 className="mb-stack-md font-label text-label-lg font-semibold uppercase tracking-wider text-on-primary">
            Services
          </h2>
          <ul className="space-y-stack-sm font-body text-body-md">
            <li>
              <Link
                href="#services"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Work Permits
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Study Visas
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Business Visas
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Permanent Residency
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-stack-md font-label text-label-lg font-semibold uppercase tracking-wider text-on-primary">
            Company
          </h2>
          <ul className="space-y-stack-sm font-body text-body-md">
            <li>
              <Link
                href="#"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Office Locations
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-stack-md font-label text-label-lg font-semibold uppercase tracking-wider text-on-primary">
            Newsletter
          </h2>
          <p className="mb-stack-md font-body text-body-md text-on-primary/80">
            Receive the latest policy updates directly.
          </p>
          <form className="flex" action="#" method="post">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email Address"
              className="w-full min-w-0 rounded-l rounded-r-none border border-white/20 bg-white/10 px-4 py-2 font-body text-body-md text-on-primary placeholder:text-on-primary/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-on-primary/30"
            />
            <button
              type="submit"
              className="shrink-0 rounded-r bg-secondary px-4 py-2 font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto max-w-container-max border-t border-on-primary/10 px-margin-mobile py-stack-lg md:px-margin-desktop">
        <p className="text-center font-body text-body-md text-on-primary/60 md:text-left">
          © {new Date().getFullYear()} USD Immigration Consultancy. All rights
          reserved. Professional legal representation.
        </p>
      </div>
    </footer>
  );
}
