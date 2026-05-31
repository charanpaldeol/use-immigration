// Purpose: Long-form body content for the Express Entry 2026 guide.
import Link from "next/link";
import {
  GuideExternalLink,
  GuideH2,
  GuideOl,
  GuideP,
  GuideTable,
  GuideUl,
} from "@/app/components/guide-prose";

const IRCC_EE = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html";
const IRCC_ROUNDS =
  "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html";
const IRCC_CRS =
  "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/criteria-comprehensive-ranking-system.html";

export function ExpressEntry2026Content() {
  return (
    <>
      <GuideH2>What Express Entry is in 2026</GuideH2>
      <GuideP>
        Express Entry is Canada&apos;s online system for managing applications
        for permanent residence under three federal skilled programs: the Federal
        Skilled Worker Program (FSW), the Canadian Experience Class (CEC), and
        the Federal Skilled Trades Program (FSTP). IRCC uses the Comprehensive
        Ranking System (CRS) to rank candidates in a pool and issues Invitations
        to Apply (ITAs) in periodic draws. Official program rules and forms live
        on the{" "}
        <GuideExternalLink href={IRCC_EE}>IRCC Express Entry page</GuideExternalLink>
        .
      </GuideP>
      <GuideP>
        In 2026, selection is driven by profile accuracy, occupation alignment
        (NOC 2021 / TEER), language results, and draw type — including
        general draws and category-based selection for French proficiency,
        healthcare, trades, STEM, transport, and agriculture/agri-food where
        active. A strong CRS score alone does not replace program eligibility:
        you must qualify under FSW, CEC, or FSTP before you enter the pool.
      </GuideP>

      <GuideH2>CRS factors at a glance</GuideH2>
      <GuideP>
        CRS awards points for core human capital (age, education, official
        language, Canadian work experience), skill transferability, and
        additional factors such as provincial nomination, arranged employment,
        Canadian education, sibling in Canada, and French-language ability.
        Use IRCC&apos;s{" "}
        <GuideExternalLink href={IRCC_CRS}>CRS criteria page</GuideExternalLink>{" "}
        and the official calculator before you create a profile.
      </GuideP>
      <GuideTable>
        <thead>
          <tr className="border-b border-outline-variant bg-surface-container-low">
            <th className="px-4 py-3 text-left font-label font-semibold text-primary">
              Factor
            </th>
            <th className="px-4 py-3 text-left font-label font-semibold text-primary">
              Why it matters in 2026
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-outline-variant/70">
            <td className="px-4 py-3 font-medium text-on-surface">Language</td>
            <td className="px-4 py-3">
              CLB targets differ by program; French can add CRS and unlock
              category-based draws when active.
            </td>
          </tr>
          <tr className="border-b border-outline-variant/70">
            <td className="px-4 py-3 font-medium text-on-surface">Education</td>
            <td className="px-4 py-3">
              FSW usually requires an Educational Credential Assessment (ECA) for
              foreign credentials.
            </td>
          </tr>
          <tr className="border-b border-outline-variant/70">
            <td className="px-4 py-3 font-medium text-on-surface">Work experience</td>
            <td className="px-4 py-3">
              NOC TEER and skilled experience must match the program; CEC needs
              Canadian skilled work.
            </td>
          </tr>
          <tr className="border-b border-outline-variant/70">
            <td className="px-4 py-3 font-medium text-on-surface">Provincial nomination</td>
            <td className="px-4 py-3">
              Typically +600 CRS — often the fastest path to an ITA if you qualify
              for a PNP such as{" "}
              <Link
                href="/guides/oinp-2026-niagara"
                className="font-semibold text-secondary underline-offset-2 hover:underline"
              >
                OINP
              </Link>
              .
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium text-on-surface">Proof of funds</td>
            <td className="px-4 py-3">
              FSW (and FSTP where applicable) must meet settlement-fund thresholds
              unless exempt via valid work authorization.
            </td>
          </tr>
        </tbody>
      </GuideTable>

      <GuideH2>Federal Skilled Worker, CEC, and FSTP compared</GuideH2>
      <GuideTable>
        <thead>
          <tr className="border-b border-outline-variant bg-surface-container-low">
            <th className="px-4 py-3 text-left font-label font-semibold text-primary">
              Program
            </th>
            <th className="px-4 py-3 text-left font-label font-semibold text-primary">
              Typical applicant
            </th>
            <th className="px-4 py-3 text-left font-label font-semibold text-primary">
              Key requirement
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-outline-variant/70">
            <td className="px-4 py-3 font-medium">FSW</td>
            <td className="px-4 py-3">Skilled workers abroad or in Canada</td>
            <td className="px-4 py-3">
              Minimum 67/100 FSW points; one year continuous skilled work abroad
              (or equivalent mix per IRCC rules)
            </td>
          </tr>
          <tr className="border-b border-outline-variant/70">
            <td className="px-4 py-3 font-medium">CEC</td>
            <td className="px-4 py-3">Workers with Canadian experience</td>
            <td className="px-4 py-3">
              12 months skilled Canadian work in TEER 0–3 (or qualifying TEER 4
              trades for some roles) within the last three years
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">FSTP</td>
            <td className="px-4 py-3">Qualified tradespeople</td>
            <td className="px-4 py-3">
              Job offer or certificate of qualification; meets FSTP work and
              language thresholds
            </td>
          </tr>
        </tbody>
      </GuideTable>

      <GuideH2>Step-by-step filing workflow</GuideH2>
      <GuideOl>
        <li>Confirm program fit (FSW, CEC, or FSTP) and NOC/TEER for your primary occupation.</li>
        <li>Complete language testing (English and/or French) and obtain an ECA if required.</li>
        <li>Gather employment letters, proof of funds, and identity documents.</li>
        <li>Create an Express Entry profile with accurate dates, NOC, and status history.</li>
        <li>Monitor{" "}
          <GuideExternalLink href={IRCC_ROUNDS}>IRCC invitation rounds</GuideExternalLink>{" "}
          and category-based draws relevant to your profile.
        </li>
        <li>After an ITA, submit a complete eAPR within 60 days — police certificates, medicals, and work references must match the profile.</li>
      </GuideOl>

      <GuideH2>2026 draw strategy and category-based selection</GuideH2>
      <GuideP>
        General draws reward the highest CRS scores across the pool. Category-based
        draws invite candidates who meet a published category (for example French
        language proficiency or experience in an eligible occupation list) even
        if their CRS is below recent general cut-offs. Strategy in 2026 means
        choosing whether to improve CRS (language retests, additional work,
        provincial nomination) or position for a category you genuinely qualify
        for — misaligned NOC or inflated language claims are common refusal
        drivers at the eAPR stage.
      </GuideP>
      <GuideP>
        If you are building Canadian experience first, review our{" "}
        <Link
          href="/guides/work-permits-2026"
          className="font-semibold text-secondary underline-offset-2 hover:underline"
        >
          Work Permits 2026 guide
        </Link>{" "}
        and{" "}
        <Link
          href="/guides/tr-to-pr-2026"
          className="font-semibold text-secondary underline-offset-2 hover:underline"
        >
          TR to PR guide
        </Link>{" "}
        for sequencing work authorization before CEC or PNP nomination.
      </GuideP>

      <GuideH2>Post-ITA document readiness</GuideH2>
      <GuideUl>
        <li>Police certificates for every country where you lived six months or more since age 18.</li>
        <li>Medical exams from IRCC panel physicians — book early when invited.</li>
        <li>Employment references on company letterhead with duties, hours, and dates matching your profile NOC.</li>
        <li>Proof of funds letters and banking history meeting IRCC format rules.</li>
        <li>Dependants: birth certificates, marriage documents, and custody agreements where applicable.</li>
      </GuideUl>
      <GuideP>
        We pause submissions when records are weak. Fixing documents before an ITA
        is cheaper than refusals or procedural fairness delays after you apply.
      </GuideP>

      <GuideH2>Ontario and Niagara context</GuideH2>
      <GuideP>
        Applicants in Ontario often compare Express Entry with the{" "}
        <Link
          href="/guides/oinp-2026-niagara"
          className="font-semibold text-secondary underline-offset-2 hover:underline"
        >
          Ontario Immigrant Nominee Program (OINP)
        </Link>
        . Employer demand in Niagara, Hamilton, and the GTA can support PNP
        nominations when roles, wages, and retention plans align — but settlement
        intent and stream rules must be documented carefully at both provincial
        and federal stages.
      </GuideP>
    </>
  );
}
