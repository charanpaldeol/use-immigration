// Purpose: This file creates the header's quick-contact buttons for calling and messaging on WhatsApp.
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site-business";
import { headerFocusRing } from "../lib/header-styles";
import { WhatsAppIcon } from "./whatsapp-icon";

const utilityButtonClassName = `flex h-10 w-10 items-center justify-center rounded border border-outline-variant bg-surface-container-lowest text-primary transition-colors duration-200 hover:bg-surface-container-low hover:text-secondary ${headerFocusRing}`;

type SiteHeaderUtilitiesProps = {
  className?: string;
};

export function SiteHeaderUtilities({ className = "" }: SiteHeaderUtilitiesProps) {
  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      aria-label="Contact shortcuts"
    >
      <a
        href={`tel:${PHONE_TEL}`}
        className={utilityButtonClassName}
        aria-label={`Call ${PHONE_DISPLAY}`}
      >
        <span className="material-symbols-outlined text-[20px]">call</span>
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={utilityButtonClassName}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
      </a>
    </div>
  );
}
