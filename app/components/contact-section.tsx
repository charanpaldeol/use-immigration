// Purpose: Contact section with firm contact details and an intake form for prospective clients.
"use client";

import { useState } from "react";

const PATHWAYS = [
  "Work & Professional",
  "Education",
  "Family Reunion",
  "Business & Investment",
  "Permanent Residency",
  "Not sure yet",
] as const;

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const data = new FormData(e.currentTarget);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data.entries())),
        headers: { "Content-Type": "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-surface-container-low py-section-padding"
    >
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-section-padding px-margin-mobile md:px-margin-desktop lg:grid-cols-2">
        <div>
          <h2 className="mb-stack-md font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
            Start Your Free Assessment
          </h2>
          <p className="mb-stack-lg font-body text-body-lg text-on-surface-variant">
            Tell us about your goals and a certified consultant will reach out
            within one business day. No obligation, fully confidential.
          </p>
          <ul className="space-y-stack-md">
            <li className="flex items-start gap-stack-md">
              <span className="material-symbols-outlined mt-1 text-primary">
                call
              </span>
              <div>
                <div className="font-label text-label-lg font-semibold tracking-[0.05em] text-primary">
                  Phone
                </div>
                <a
                  href="tel:+18005551234"
                  className="font-body text-body-md text-on-surface-variant hover:text-secondary"
                >
                  +1 (800) 555-1234
                </a>
              </div>
            </li>
            <li className="flex items-start gap-stack-md">
              <span className="material-symbols-outlined mt-1 text-primary">
                mail
              </span>
              <div>
                <div className="font-label text-label-lg font-semibold tracking-[0.05em] text-primary">
                  Email
                </div>
                <a
                  href="mailto:hello@usdimmigration.com"
                  className="font-body text-body-md text-on-surface-variant hover:text-secondary"
                >
                  hello@usdimmigration.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-stack-md">
              <span className="material-symbols-outlined mt-1 text-primary">
                location_on
              </span>
              <div>
                <div className="font-label text-label-lg font-semibold tracking-[0.05em] text-primary">
                  Head Office
                </div>
                <p className="font-body text-body-md text-on-surface-variant">
                  220 Bay Street, Suite 1400
                  <br />
                  Toronto, ON M5J 2W4, Canada
                </p>
              </div>
            </li>
            <li className="flex items-start gap-stack-md">
              <span className="material-symbols-outlined mt-1 text-primary">
                schedule
              </span>
              <div>
                <div className="font-label text-label-lg font-semibold tracking-[0.05em] text-primary">
                  Hours
                </div>
                <p className="font-body text-body-md text-on-surface-variant">
                  Monday – Friday, 9:00 – 18:00 (local time)
                </p>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-8 shadow-[var(--shadow-institutional)]"
        >
          <div className="grid grid-cols-1 gap-stack-md sm:grid-cols-2">
            <label className="flex flex-col gap-1">
              <span className="font-label text-label-md font-medium tracking-[0.05em] text-on-surface-variant">
                Full name
              </span>
              <input
                name="name"
                required
                autoComplete="name"
                className="rounded border border-outline-variant bg-surface px-3 py-2 font-body text-body-md text-on-surface focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-label text-label-md font-medium tracking-[0.05em] text-on-surface-variant">
                Email
              </span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="rounded border border-outline-variant bg-surface px-3 py-2 font-body text-body-md text-on-surface focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-label text-label-md font-medium tracking-[0.05em] text-on-surface-variant">
                Phone (optional)
              </span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                className="rounded border border-outline-variant bg-surface px-3 py-2 font-body text-body-md text-on-surface focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-label text-label-md font-medium tracking-[0.05em] text-on-surface-variant">
                Pathway of interest
              </span>
              <select
                name="pathway"
                defaultValue=""
                className="rounded border border-outline-variant bg-surface px-3 py-2 font-body text-body-md text-on-surface focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30"
              >
                <option value="" disabled>
                  Select one
                </option>
                {PATHWAYS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="mt-stack-md flex flex-col gap-1">
            <span className="font-label text-label-md font-medium tracking-[0.05em] text-on-surface-variant">
              How can we help?
            </span>
            <textarea
              name="message"
              rows={4}
              required
              className="rounded border border-outline-variant bg-surface px-3 py-2 font-body text-body-md text-on-surface focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30"
            />
          </label>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-stack-lg inline-flex w-full items-center justify-center rounded-lg bg-secondary px-8 py-4 font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary shadow-[var(--shadow-institutional)] transition-colors hover:bg-secondary-container disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Request my assessment"}
          </button>
          {status === "sent" && (
            <p
              role="status"
              className="mt-stack-md font-body text-body-md text-primary"
            >
              Thank you — your request was received. A consultant will be in
              touch within one business day.
            </p>
          )}
          {status === "error" && (
            <p
              role="alert"
              className="mt-stack-md font-body text-body-md text-error"
            >
              Something went wrong. Please email{" "}
              <a href="mailto:hello@usdimmigration.com" className="underline">
                hello@usdimmigration.com
              </a>{" "}
              and we&apos;ll respond directly.
            </p>
          )}
          <p className="mt-stack-md font-body text-body-md text-on-surface-variant">
            By submitting, you agree to our{" "}
            <a href="/privacy" className="underline hover:text-secondary">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
