// Purpose: Branded 404 page with helpful navigation (noindex).
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "./components/site-footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <main
        id="main-content"
        className="mx-auto flex flex-1 max-w-container-max flex-col items-start px-margin-mobile py-section-padding md:px-margin-desktop"
      >
        <p className="font-label text-label-md font-semibold uppercase tracking-[0.08em] text-secondary">
          404
        </p>
        <h1 className="mt-stack-sm font-headline text-headline-lg-mobile font-bold text-primary md:text-display-lg">
          Page not found
        </h1>
        <p className="mt-stack-md max-w-2xl font-body text-body-lg text-on-surface-variant">
          The page you requested does not exist or may have moved. Use the links
          below to find immigration guides or contact our team.
        </p>
        <div className="mt-stack-lg flex flex-wrap gap-stack-md">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 font-label text-label-lg font-semibold text-on-secondary"
          >
            Back to home
          </Link>
          <Link
            href="/guides"
            className="inline-flex items-center justify-center rounded-lg border border-outline-variant px-6 py-3 font-label text-label-lg font-semibold text-primary"
          >
            Browse 2026 guides
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-lg border border-outline-variant px-6 py-3 font-label text-label-lg font-semibold text-primary"
          >
            Contact us
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
