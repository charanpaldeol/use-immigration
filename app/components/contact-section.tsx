import type { ReactNode } from "react";

const PHONE_DISPLAY = "403 971 0038";
const PHONE_TEL = "+14039710038";
const WHATSAPP_MESSAGE =
  "Hi USD Immigration, I am interested in your immigration services. Looking for more information about the process.";
const WHATSAPP_URL = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
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

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.48 1.33 4.99L2 22l5.15-1.3A10 10 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18.2a8.18 8.18 0 0 1-4.17-1.15l-.3-.18-3.06.77.81-2.98-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.12c-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.78.98-.14.16-.29.19-.54.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.36-1.71-.14-.25-.01-.39.11-.51.11-.11.25-.29.38-.43.13-.14.17-.24.25-.4.08-.16.04-.31-.02-.44-.06-.13-.56-1.35-.76-1.85-.2-.48-.4-.41-.56-.42h-.47c-.16 0-.41.06-.62.31s-.81.79-.81 1.92c0 1.13.83 2.22.95 2.37.13.16 1.63 2.49 4.02 3.5.57.25 1.01.4 1.36.51.57.18 1.09.16 1.5.1.46-.07 1.48-.6 1.69-1.17.21-.57.21-1.06.14-1.17-.06-.12-.22-.18-.47-.31Z" />
    </svg>
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
    <li className="flex items-start gap-stack-md py-stack-md first:pt-0 last:pb-0">
      <div
        className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded border ${iconWrapClass}`}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <p className="font-label text-label-md uppercase tracking-[0.12em] text-primary">
          {title}
        </p>
        <div className="pt-stack-xs font-body text-body-lg text-on-surface-variant">
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
            <ul className="divide-y divide-outline-variant/70">
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
                icon={<WhatsAppIcon className="h-[22px] w-[22px] text-[#25D366]" />}
                title="WhatsApp"
                tone="accent"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center rounded bg-[#25D366] px-3 py-2 font-label text-label-md font-medium text-white transition-opacity hover:opacity-90"
                  aria-label="Chat on WhatsApp"
                >
                  Click to chat
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

        <section className="relative self-stretch overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest shadow-[var(--shadow-institutional)]">
          <div className="relative h-full min-h-[430px]">
            <iframe
              title="USD Immigration office location map"
              src={MAPS_EMBED_URL}
              className="absolute inset-0 block h-full w-full border-0"
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
