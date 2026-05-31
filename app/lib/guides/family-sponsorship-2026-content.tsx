// Purpose: Long-form body content for the Family Sponsorship 2026 guide.
import Link from "next/link";
import {
  GuideExternalLink,
  GuideH2,
  GuideOl,
  GuideP,
  GuideTable,
  GuideUl,
} from "@/app/components/guide-prose";

const IRCC_SPONSOR =
  "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship.html";
const IRCC_SPOUSE =
  "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/spouse-partner-children.html";
const IRCC_PGP =
  "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents.html";
const IRCC_SUPER_VISA =
  "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa.html";

export function FamilySponsorship2026Content() {
  return (
    <>
      <GuideH2>Family sponsorship overview</GuideH2>
      <GuideP>
        Canadian citizens and permanent residents can sponsor certain family
        members for permanent residence when sponsorship, relationship, and
        admissibility requirements are met. Family immigration is a distinct
        stream from Express Entry — there is no CRS ranking. Processing times
        and forms are published on the{" "}
        <GuideExternalLink href={IRCC_SPONSOR}>IRCC family sponsorship page</GuideExternalLink>
        .
      </GuideP>
      <GuideP>
        Sponsorship is a long-term legal undertaking: sponsors promise financial
        support for a defined period. Misrepresentation on relationship or
        status history can lead to bans from sponsoring. We align document
        strategy with inland vs outland spousal routes and Super Visa
        alternatives for parents who are not in a current PGP intake.
      </GuideP>

      <GuideH2>Spouse, partner, and dependent children</GuideH2>
      <GuideP>
        Spousal and common-law partner sponsorship requires proof of a genuine
        relationship and eligible sponsor status. Dependent children must meet
        age and dependency definitions at lock-in date. Detailed requirements are
        on{" "}
        <GuideExternalLink href={IRCC_SPOUSE}>IRCC’s spouse and partner page</GuideExternalLink>
        .
      </GuideP>
      <GuideTable>
        <thead>
          <tr className="border-b border-outline-variant bg-surface-container-low">
            <th className="px-4 py-3 text-left font-label font-semibold text-primary">
              Route
            </th>
            <th className="px-4 py-3 text-left font-label font-semibold text-primary">
              When it fits
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-outline-variant/70">
            <td className="px-4 py-3 font-medium">Outland</td>
            <td className="px-4 py-3">
              Partner lives abroad; travel may be possible during processing
              subject to visa rules.
            </td>
          </tr>
          <tr className="border-b border-outline-variant/70">
            <td className="px-4 py-3 font-medium">Inland</td>
            <td className="px-4 py-3">
              Partner has valid temporary status in Canada; may qualify for open
              work permit while awaiting decision.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-medium">Dependent children</td>
            <td className="px-4 py-3">
              Included on principal application when eligible; medical and
              criminal admissibility apply.
            </td>
          </tr>
        </tbody>
      </GuideTable>

      <GuideH2>Parents, grandparents, and Super Visa</GuideH2>
      <GuideP>
        The Parent and Grandparent Program (PGP) uses invitation rounds with
        limited quotas. When PGP is closed, the{" "}
        <GuideExternalLink href={IRCC_SUPER_VISA}>Super Visa</GuideExternalLink>{" "}
        allows eligible parents and grandparents to visit for extended periods
        with mandatory medical insurance. Check{" "}
        <GuideExternalLink href={IRCC_PGP}>IRCC PGP instructions</GuideExternalLink>{" "}
        for whether interest-to-sponsor forms are open in the current year.
      </GuideP>

      <GuideH2>Evidence of a genuine relationship</GuideH2>
      <GuideUl>
        <li>Proof of cohabitation: leases, utility bills, shared accounts.</li>
        <li>Communication history across the relationship timeline.</li>
        <li>Photos and travel records with consistent dates and context.</li>
        <li>Affidavits from people who know the relationship — secondary to primary documents.</li>
        <li>Wedding, cultural ceremony, or commitment evidence where applicable.</li>
      </GuideUl>
      <GuideP>
        Quality and consistency beat volume. We organize exhibits so officers can
        follow a clear timeline without contradictory dates or statuses.
      </GuideP>

      <GuideH2>Sponsor eligibility checklist</GuideH2>
      <GuideOl>
        <li>Confirm you are 18+, live in Canada (for most streams), and are not in default on prior undertakings.</li>
        <li>Review minimum necessary income (LICO + 30% for most sponsors) for the past three tax years where required.</li>
        <li>Disclose all dependants and prior marriages on forms.</li>
        <li>Plan medical exams and police certificates early for all family members.</li>
        <li>Choose inland vs outland with legal status and travel needs in mind.</li>
      </GuideOl>

      <GuideH2>How family files interact with other pathways</GuideH2>
      <GuideP>
        Sponsored spouses who later want economic PR may still qualify for{" "}
        <Link
          href="/guides/work-permits-2026"
          className="font-semibold text-secondary underline-offset-2 hover:underline"
        >
          work permits
        </Link>{" "}
        or{" "}
        <Link
          href="/guides/express-entry-2026"
          className="font-semibold text-secondary underline-offset-2 hover:underline"
        >
          Express Entry
        </Link>{" "}
        after becoming permanent residents. Mixed families (one spouse in Canada
        on a work permit, partner abroad) need coordinated timing — we map
        status gaps before filing.
      </GuideP>
    </>
  );
}
