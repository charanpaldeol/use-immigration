// Purpose: This file creates the bottom section of the site, including helpful links, newsletter signup, and legal text.
"use client";

import Link from "next/link";
import { useState } from "react";

export function SiteFooter() {
  const [newsletter, setNewsletter] = useState<
    "idle" | "submitting" | "sent" | "error"
  >("idle");

  async function onNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNewsletter("submitting");
    try {
      const data = new FormData(e.currentTarget);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: "Newsletter subscriber",
          email: data.get("email"),
          message: "Newsletter signup",
        }),
        headers: { "Content-Type": "application/json" },
      });
      setNewsletter(res.ok ? "sent" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setNewsletter("error");
    }
  }

  return (
    <footer className="mt-auto bg-primary text-on-primary">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile py-section-padding md:grid-cols-4 md:px-margin-desktop">
        <div className="md:col-span-1">
          <div className="mb-stack-md font-headline text-headline-md font-bold">
            USD Immigration
          </div>
          <p className="font-body text-body-md text-on-primary/80">
            Canada-wide immigration strategy for workers, students, families,
            and employers — from our Niagara Falls office.
          </p>
        </div>
        <div>
          <h2 className="mb-stack-md font-label text-label-lg font-semibold uppercase tracking-wider text-on-primary">
            Services
          </h2>
          <ul className="space-y-stack-sm font-body text-body-md">
            <li>
              <Link
                href="/guides/express-entry-2026"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Express Entry 2026
              </Link>
            </li>
            <li>
              <Link
                href="/guides/oinp-2026-niagara"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                OINP 2026
              </Link>
            </li>
            <li>
              <Link
                href="/guides/tr-to-pr-2026"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                TR to PR 2026
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Consultation Services
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
                href="/privacy"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Niagara Office
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
          <form className="flex" onSubmit={onNewsletterSubmit}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email Address"
              className="w-full min-w-0 rounded-l rounded-r-none border border-white/20 bg-white/10 px-4 py-2 font-body text-body-md text-on-primary placeholder:text-on-primary/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-on-primary/30"
            />
            <button
              type="submit"
              disabled={newsletter === "submitting"}
              className="shrink-0 rounded-r bg-secondary px-4 py-2 font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary disabled:opacity-60"
            >
              {newsletter === "submitting" ? "…" : "Join"}
            </button>
          </form>
          {newsletter === "sent" && (
            <p
              role="status"
              className="mt-stack-sm font-body text-body-md text-on-primary/90"
            >
              Thanks — you&apos;re on the list.
            </p>
          )}
          {newsletter === "error" && (
            <p
              role="alert"
              className="mt-stack-sm font-body text-body-md text-on-primary/90"
            >
              Sign-up failed. Please try again later.
            </p>
          )}
        </div>
      </div>
      <div className="mx-auto max-w-container-max border-t border-on-primary/10 px-margin-mobile py-stack-lg md:px-margin-desktop">
        <p className="text-center font-body text-body-md text-on-primary/60 md:text-left">
          © {new Date().getFullYear()} USD Immigration Consultancy. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
