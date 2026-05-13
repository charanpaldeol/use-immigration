import type { ReactNode } from "react";

const PHONE_DISPLAY = "403 971 0038";
const PHONE_TEL = "+14039710038";
const EMAIL = "info@usdimmigration.ca";
const HOURS = "Mon-Fri 9-6";
const ADDRESS_LINES = ["4838 Dorchester Rd", "Niagara Falls, ON L2E 6N9"] as const;
const ADDRESS_FOR_MAPS =
  "4838 Dorchester Rd, Niagara Falls, ON L2E 6N9, Canada";
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS_FOR_MAPS)}`;
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS_FOR_MAPS,
)}&z=14&output=embed`;

type ContactItemProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  tone?: "navy" | "sky";
};

function ContactItem({ icon, title, children, tone = "navy" }: ContactItemProps) {
  const iconToneClass =
    tone === "navy"
      ? "bg-primary-container text-on-primary"
      : "bg-secondary text-on-secondary";

  return (
    <li className="flex items-start gap-stack-md">
      <div
        className={`mt-0.5 rounded-md p-3 shadow-[var(--shadow-institutional)] ${iconToneClass}`}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <p className="font-label text-label-md uppercase tracking-[0.05em] text-primary">
          {title}
        </p>
        <div className="pt-1 font-body text-body-lg text-on-surface-variant">
          {children}
        </div>
      </div>
    </li>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.27 11.7 11.7 0 0 0 3.7.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.7 11.7 0 0 0 .59 3.7 1 1 0 0 1-.27 1.11z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2Zm2 4.75-9.47 5.92a1 1 0 0 1-1.06 0L2 8.75V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.75Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8Z" />
      <path d="M13 7h-2v6l5.25 3.15 1-1.64L13 12.05Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-surface-container-low py-section-padding"
    >
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-4 shadow-[var(--shadow-institutional)] md:p-6">
          <div className="grid gap-gutter md:grid-cols-[minmax(290px,1fr)_minmax(0,2fr)]">
            <section className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest">
              <header className="bg-primary-container px-6 py-5 text-on-primary">
                <h2 className="font-headline text-headline-md font-semibold md:text-headline-lg-mobile">
                  Contact US!
                </h2>
              </header>
              <div className="space-y-stack-lg bg-surface-container p-6 md:p-7">
                <ul className="space-y-stack-lg">
                  <ContactItem icon={<PhoneIcon />} title="Phone" tone="navy">
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="font-body text-body-lg font-medium text-on-surface-variant transition-colors hover:text-primary"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </ContactItem>

                  <ContactItem icon={<MailIcon />} title="Email" tone="sky">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-body text-body-lg font-medium text-secondary underline-offset-2 hover:underline"
                    >
                      {EMAIL}
                    </a>
                  </ContactItem>

                  <ContactItem icon={<ClockIcon />} title="Business Hours" tone="navy">
                    <p className="font-body text-body-lg font-medium text-on-surface-variant">
                      {HOURS}
                    </p>
                  </ContactItem>

                  <ContactItem icon={<PinIcon />} title="Address" tone="sky">
                    <a
                      href={MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-body text-body-lg font-medium leading-tight text-secondary underline-offset-2 hover:underline"
                    >
                      {ADDRESS_LINES[0]}
                      <br />
                      {ADDRESS_LINES[1]}
                    </a>
                  </ContactItem>
                </ul>
              </div>
            </section>

            <section className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest">
              <div className="relative min-h-[430px]">
                <iframe
                  title="USD Immigration office location map"
                  src={MAPS_EMBED_URL}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-surface-container-lowest bg-secondary p-1 shadow-[var(--shadow-institutional)]">
                  <PinIcon />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
