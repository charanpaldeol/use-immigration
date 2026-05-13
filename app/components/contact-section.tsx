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

/** Material Symbols Outlined ligatures; must stay in sync with `app/layout.tsx` icon_names. */
function ContactSymbol({
  name,
  className = "",
}: {
  name: "call" | "mail" | "schedule" | "location_on";
  className?: string;
}) {
  return (
    <span
      className={`material-symbols-outlined leading-none ${className}`}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

type ContactItemProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  tone?: "navy" | "accent";
};

function ContactItem({ icon, title, children, tone = "navy" }: ContactItemProps) {
  const iconWrapClass =
    tone === "navy"
      ? "border-outline-variant bg-surface-container-lowest text-primary-container"
      : "border-secondary/30 bg-secondary-fixed/40 text-secondary";

  return (
    <li className="flex items-start gap-stack-md">
      <div
        className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded border ${iconWrapClass}`}
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

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-surface-container-low py-section-padding"
    >
      <div className="mx-auto grid max-w-container-max gap-gutter px-margin-mobile md:grid-cols-[minmax(290px,1fr)_minmax(0,2fr)] md:px-margin-desktop">
        <section className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest shadow-[var(--shadow-institutional)]">
          <header className="border-b border-outline-variant bg-primary-container px-6 py-5 text-on-primary">
            <h2 className="font-headline text-headline-md font-semibold md:text-headline-lg-mobile">
              Contact us
            </h2>
          </header>
          <div className="space-y-stack-lg bg-surface-container-lowest p-6 md:p-7">
            <ul className="space-y-stack-lg">
              <ContactItem
                icon={<ContactSymbol name="call" className="text-[22px]" />}
                title="Phone"
                tone="navy"
              >
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="font-body text-body-lg font-medium text-on-surface-variant transition-colors hover:text-primary"
                >
                  {PHONE_DISPLAY}
                </a>
              </ContactItem>

              <ContactItem
                icon={<ContactSymbol name="mail" className="text-[22px]" />}
                title="Email"
                tone="accent"
              >
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-body text-body-lg font-medium text-secondary underline-offset-2 hover:underline"
                >
                  {EMAIL}
                </a>
              </ContactItem>

              <ContactItem
                icon={<ContactSymbol name="schedule" className="text-[22px]" />}
                title="Business hours"
                tone="navy"
              >
                <p className="font-body text-body-lg font-medium text-on-surface-variant">
                  {HOURS}
                </p>
              </ContactItem>

              <ContactItem
                icon={<ContactSymbol name="location_on" className="text-[22px]" />}
                title="Address"
                tone="accent"
              >
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

        <section className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest shadow-[var(--shadow-institutional)]">
          <div className="relative min-h-[430px]">
            <iframe
              title="USD Immigration office location map"
              src={MAPS_EMBED_URL}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded border-2 border-surface-container-lowest bg-secondary text-on-secondary shadow-[var(--shadow-institutional)]">
              <ContactSymbol name="location_on" className="text-[26px]" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
