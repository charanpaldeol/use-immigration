// Purpose: Long-form body content for the Study Permits 2026 guide.
import Link from "next/link";
import {
  GuideExternalLink,
  GuideH2,
  GuideOl,
  GuideP,
  GuideTable,
  GuideUl,
} from "@/app/components/guide-prose";

const IRCC_STUDY =
  "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html";
const IRCC_PAL =
  "https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/2024-01-22.html";
const IRCC_PGWP =
  "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html";

export function StudyPermits2026Content() {
  return (
    <>
      <GuideH2>Study permits in 2026: what changed</GuideH2>
      <GuideP>
        A study permit is a document that allows foreign nationals to study at a
        designated learning institution (DLI) in Canada. Most applicants also need
        a visitor visa or eTA to travel. IRCC caps and attestation rules continue
        to shape who can apply and how quickly programs fill. Start with the{" "}
        <GuideExternalLink href={IRCC_STUDY}>IRCC study in Canada hub</GuideExternalLink>{" "}
        and confirm whether you need a Provincial Attestation Letter (PAL) or
        Territorial Attestation Letter (TAL) under current{" "}
        <GuideExternalLink href={IRCC_PAL}>IRCC notices</GuideExternalLink>.
      </GuideP>
      <GuideP>
        Study permits are temporary status. Permanent residence requires a
        separate strategy — often PGWP work, then Express Entry, OINP, or other
        pathways. Our{" "}
        <Link
          href="/guides/express-entry-2026"
          className="font-semibold text-secondary underline-offset-2 hover:underline"
        >
          Express Entry
        </Link>{" "}
        and{" "}
        <Link
          href="/guides/oinp-2026-niagara"
          className="font-semibold text-secondary underline-offset-2 hover:underline"
        >
          OINP
        </Link>{" "}
        guides explain common PR sequences after graduation.
      </GuideP>

      <GuideH2>PAL/TAL and institutional readiness</GuideH2>
      <GuideTable>
        <thead>
          <tr className="border-b border-outline-variant bg-surface-container-low">
            <th className="px-4 py-3 text-left font-label font-semibold text-primary">
              Step
            </th>
            <th className="px-4 py-3 text-left font-label font-semibold text-primary">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-outline-variant/70">
            <td className="px-4 py-3 font-medium">1. Letter of acceptance</td>
            <td className="px-4 py-3">
              Obtain a valid LOA from a DLI for an eligible program length and level.
            </td>
          </tr>
          <tr className="border-b border-outline-variant/70">
            <td className="px-4 py-3 font-medium">2. PAL/TAL (if required)</td>
            <td className="px-4 py-3">
              Request attestation from the province/territory where you will study;
              exemptions apply to some levels and applicants.
            </td>
          </tr>
          <tr className="border-b border-outline-variant/70">
            <td className="px-4 py-3 font-medium">3. Financial proof</td>
            <td className="px-4 py-3">
              Show tuition plus living expenses per IRCC tables; GIC may apply for
              some countries.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">4. Study permit application</td>
            <td className="px-4 py-3">
              Submit online with biometrics, truthful travel history, and consistent
              study plan narrative.
            </td>
          </tr>
        </tbody>
      </GuideTable>

      <GuideH2>Working while studying</GuideH2>
      <GuideP>
        Many permits authorize limited on- or off-campus work when you meet
        enrolment conditions. Co-op placements require a co-op work permit in
        addition to your study permit. Hour limits and eligibility change — read
        the conditions on your permit letter and IRCC’s student work instructions
        before you start a job.
      </GuideP>

      <GuideH2>Post-Graduation Work Permit (PGWP)</GuideH2>
      <GuideP>
        The PGWP is an open work permit for eligible graduates. Program length,
        full-time status, and delivery mode (in-person vs online portions) affect
        PGWP validity. Plan academics so your credential qualifies under{" "}
        <GuideExternalLink href={IRCC_PGWP}>IRCC PGWP rules</GuideExternalLink>.
        PGWP experience often feeds the{" "}
        <Link
          href="/guides/tr-to-pr-2026"
          className="font-semibold text-secondary underline-offset-2 hover:underline"
        >
          TR to PR
        </Link>{" "}
        and Canadian Experience Class pathways.
      </GuideP>

      <GuideH2>Study permit to PR: realistic sequencing</GuideH2>
      <GuideOl>
        <li>Choose a DLI program aligned with in-demand NOC/TEER if PR is a goal.</li>
        <li>Maintain full-time status and strong academic progression.</li>
        <li>Secure PGWP after graduation; accumulate skilled Canadian work.</li>
        <li>Improve language scores and consider provincial nomination if in Ontario.</li>
        <li>Enter Express Entry or apply through the stream that matches your facts.</li>
      </GuideOl>

      <GuideH2>Common refusal drivers we review before filing</GuideH2>
      <GuideUl>
        <li>Study plans that do not explain career logic or ties to home country when needed.</li>
        <li>Funds that do not match tuition and living cost tables.</li>
        <li>Prior immigration history inconsistencies across forms.</li>
        <li>Choosing non-DLI institutions or programs ineligible for PGWP.</li>
      </GuideUl>
    </>
  );
}
