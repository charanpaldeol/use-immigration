// Purpose: Informational disclaimer for guide pages (YMYL / not legal advice).
export function GuideDisclaimer() {
  return (
    <aside
      className="mt-stack-lg rounded-lg border border-outline-variant bg-surface-container-low p-5"
      aria-label="Disclaimer"
    >
      <p className="font-body text-body-sm text-on-surface-variant">
        This guide is for general information only and is not legal advice.
        Immigration rules change frequently — confirm eligibility with official{" "}
        <a
          href="https://www.canada.ca/en/immigration-refugees-citizenship.html"
          className="font-medium text-secondary underline-offset-2 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          IRCC
        </a>{" "}
        sources and a CICC-regulated consultant before filing. Verify credentials
        on the{" "}
        <a
          href="https://college-ic.ca/protecting-the-public/find-an-immigration-consultant"
          className="font-medium text-secondary underline-offset-2 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          College of Immigration and Citizenship Consultants
        </a>{" "}
        public register.
      </p>
    </aside>
  );
}
