// Purpose: Long-form body content for the OINP 2026 Ontario guide.
import Link from "next/link";
import {
  GuideExternalLink,
  GuideH2,
  GuideOl,
  GuideP,
  GuideTable,
  GuideUl,
} from "@/app/components/guide-prose";

const ONTARIO_ONP =
  "https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp";
const IRCC_PNP =
  "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html";

export function Oinp2026Content() {
  return (
    <>
      <GuideH2>OINP overview for 2026</GuideH2>
      <GuideP>
        The Ontario Immigrant Nominee Program (OINP) lets Ontario nominate
        individuals for permanent residence when they meet stream-specific
        criteria aligned with provincial labour market needs. A nomination is not
        permanent residence by itself: after Ontario approves a nomination, most
        streams require a successful federal permanent residence application
        through Express Entry or a non-Express Entry federal stream. Current
        stream descriptions and intake status are published on the{" "}
        <GuideExternalLink href={ONTARIO_ONP}>Ontario OINP page</GuideExternalLink>
        ; federal rules are on{" "}
        <GuideExternalLink href={IRCC_PNP}>IRCC’s PNP overview</GuideExternalLink>
        .
      </GuideP>
      <GuideP>
        Ontario’s nomination allocation is set annually by IRCC. Reduced
        allocations in recent cycles mean streams can close quickly or pause
        without notice. In 2026, plan around proof of funds, language scores,
        valid job offers, and NOC alignment before you rely on a specific stream
        remaining open.
      </GuideP>

      <GuideH2>Main OINP streams compared</GuideH2>
      <GuideTable>
        <thead>
          <tr className="border-b border-outline-variant bg-surface-container-low">
            <th className="px-4 py-3 text-left font-label font-semibold text-primary">
              Stream family
            </th>
            <th className="px-4 py-3 text-left font-label font-semibold text-primary">
              Who it targets
            </th>
            <th className="px-4 py-3 text-left font-label font-semibold text-primary">
              Typical federal link
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-outline-variant/70">
            <td className="px-4 py-3 font-medium">Employer Job Offer</td>
            <td className="px-4 py-3">
              Foreign workers with approved Ontario job offers (foreign worker,
              international student with job offer, in-demand skills)
            </td>
            <td className="px-4 py-3">
              Often Express Entry–linked or base PNP depending on stream
            </td>
          </tr>
          <tr className="border-b border-outline-variant/70">
            <td className="px-4 py-3 font-medium">Human Capital</td>
            <td className="px-4 py-3">
              Skilled workers and graduates (Masters, PhD, Express Entry
              Human Capital Priorities / Skilled Trades alignment)
            </td>
            <td className="px-4 py-3">
              Usually requires an active Express Entry profile and Ontario
              notification of interest or application
            </td>
          </tr>
          <tr className="border-b border-outline-variant/70">
            <td className="px-4 py-3 font-medium">Business</td>
            <td className="px-4 py-3">
              Entrepreneurs and corporate investors meeting investment and job
              creation thresholds
            </td>
            <td className="px-4 py-3">Separate business criteria and monitoring</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">International students</td>
            <td className="px-4 py-3">
              Recent Ontario graduates with eligible credentials and, for some
              streams, job offers
            </td>
            <td className="px-4 py-3">
              Pairs with{" "}
              <Link
                href="/guides/study-permits-2026"
                className="font-semibold text-secondary underline-offset-2 hover:underline"
              >
                study permit
              </Link>{" "}
              and PGWP planning
            </td>
          </tr>
        </tbody>
      </GuideTable>

      <GuideH2>Employer Job Offer stream essentials</GuideH2>
      <GuideP>
        Employer Job Offer streams require a full-time, permanent Ontario position
        at or above the wage floor for the occupation and region. The employer
        must be eligible and the role must match stream NOC/TEER rules. Many
        workers hold a{" "}
        <Link
          href="/guides/work-permits-2026"
          className="font-semibold text-secondary underline-offset-2 hover:underline"
        >
          work permit
        </Link>{" "}
        while the provincial and federal stages progress. Job offer letters,
        LMIA or exemption documents, and organizational charts are scrutinized —
        template letters without duties and wages are a frequent delay source.
      </GuideP>

      <GuideH2>Express Entry alignment and +600 CRS</GuideH2>
      <GuideP>
        When OINP nominates through an Express Entry–linked stream, the
        nomination adds 600 CRS points in most cases, which typically leads to
        an ITA in a subsequent federal draw. You must accept the nomination in
        your Express Entry account and submit the federal eAPR before deadlines.
        See our{" "}
        <Link
          href="/guides/express-entry-2026"
          className="font-semibold text-secondary underline-offset-2 hover:underline"
        >
          Express Entry 2026 guide
        </Link>{" "}
        for CRS and post-ITA document preparation.
      </GuideP>

      <GuideH2>International graduates and TR to PR</GuideH2>
      <GuideP>
        Ontario graduate streams reward completion of eligible programs at
        Ontario institutions. Timing matters: apply within stream windows, maintain
        legal status, and document work history if the stream requires Ontario
        employment. Graduates often combine PGWP experience with OINP or move to{" "}
        <Link
          href="/guides/tr-to-pr-2026"
          className="font-semibold text-secondary underline-offset-2 hover:underline"
        >
          TR to PR
        </Link>{" "}
        planning when federal policy windows open.
      </GuideP>

      <GuideH2>Niagara, Hamilton, and GTA labour markets</GuideH2>
      <GuideP>
        OINP is province-wide — there is no separate “Niagara stream.” However,
        regional employers in tourism, healthcare, manufacturing, and logistics
        frequently use employer-driven nominations when they can demonstrate
        recruitment efforts and wage compliance. Settlement plans should show
        how the applicant will live and work in Ontario, especially when the
        role is outside Toronto.
      </GuideP>

      <GuideH2>Application preparation checklist</GuideH2>
      <GuideOl>
        <li>Confirm the stream is open and you meet every criterion on the Ontario checklist.</li>
        <li>Validate NOC, wage, and work location against stream guides.</li>
        <li>Prepare language tests and credentials; align with Express Entry if required.</li>
        <li>Collect employer documents: job offer, business registration, recruitment records.</li>
        <li>Plan federal stage timelines and proof of funds before nomination expires.</li>
      </GuideOl>
      <GuideUl>
        <li>We decline weak stream fits — a better path may be another PNP, LMIA work permit, or federal program.</li>
        <li>Track policy updates on Ontario and IRCC sites weekly during active applications.</li>
      </GuideUl>
    </>
  );
}
