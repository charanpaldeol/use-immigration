// Purpose: Header quick-contact buttons for phone and WhatsApp.
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site-business";
import { utilityButtonClass, type HeaderTheme } from "../lib/header-styles";
import { WhatsAppIcon } from "./whatsapp-icon";

type SiteHeaderUtilitiesProps = {
  className?: string;
  theme?: HeaderTheme;
  /** full: phone + WhatsApp; whatsapp: mobile header shortcut only */
  variant?: "full" | "whatsapp";
};

export function SiteHeaderUtilities({
  className = "",
  theme = "default",
  variant = "full",
}: SiteHeaderUtilitiesProps) {
  const buttonClass = utilityButtonClass(theme);

  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      aria-label="Contact shortcuts"
    >
      {variant === "full" ? (
        <a
          href={`tel:${PHONE_TEL}`}
          className={buttonClass}
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          <span className="material-symbols-outlined text-[20px]">call</span>
        </a>
      ) : null}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
      </a>
    </div>
  );
}
