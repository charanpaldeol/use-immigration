// Purpose: Shared dates and FAQ copy for 2026 immigration guides.
import type { GuideFaqItem } from "@/app/lib/guide-seo";

/** ISO date — bump when guide body or policy references change materially. */
export const GUIDE_LAST_UPDATED = "2026-05-31";

export const EXPRESS_ENTRY_FAQS: GuideFaqItem[] = [
  {
    question: "What is the minimum CRS score for Express Entry in 2026?",
    answer:
      "There is no fixed minimum CRS score for all draws. IRCC sets a cut-off per invitation round based on program capacity and category-based selection. Check the latest round results on the official IRCC Express Entry rounds page and model your score against recent trends before assuming eligibility.",
  },
  {
    question: "Which Express Entry program fits skilled workers outside Canada?",
    answer:
      "The Federal Skilled Worker Program is the usual entry point for skilled workers applying from abroad, provided you meet education, language, work experience, and proof-of-funds requirements. Canadian Experience Class and Federal Skilled Trades target different experience profiles.",
  },
  {
    question: "How long do I have after receiving an ITA?",
    answer:
      "After an Invitation to Apply, you generally have 60 calendar days to submit a complete permanent residence application online. Missing documents or incorrect forms are common refusal drivers — prepare proof of funds, police certificates, and employment records before you enter the pool if possible.",
  },
  {
    question: "Can I combine Express Entry with a provincial nomination?",
    answer:
      "Yes. A provincial nomination through a PNP stream such as OINP typically adds 600 CRS points, which usually results in an ITA in a subsequent federal draw. Timing between provincial and federal stages must be coordinated so nominations and job offers remain valid.",
  },
  {
    question: "Do I need a job offer for Express Entry?",
    answer:
      "A valid job offer can add CRS points in some cases, but many applicants are selected without one. Program requirements, NOC TEER alignment, and draw type (general vs category-based) determine whether an offer is necessary for your strategy.",
  },
];

export const OINP_FAQS: GuideFaqItem[] = [
  {
    question: "What is the difference between OINP and Express Entry?",
    answer:
      "OINP is Ontario’s provincial nominee program: Ontario assesses and nominates candidates who meet stream rules. Express Entry is the federal system that ranks candidates in a pool and issues ITAs for permanent residence. Many OINP streams require an Express Entry profile; a nomination adds CRS points at the federal stage.",
  },
  {
    question: "Do I need a job offer for OINP Employer Job Offer streams?",
    answer:
      "Employer Job Offer streams require a genuine full-time Ontario job offer from an eligible employer that meets wage and NOC requirements for the specific stream. In-Demand Skills and some graduate streams follow different rules — confirm the current stream guide on the Ontario government site.",
  },
  {
    question: "How long does OINP processing take in 2026?",
    answer:
      "Processing times vary by stream and application volume. Provincial nomination stages and federal permanent residence stages are separate clocks. Use IRCC and Ontario processing-time tools for estimates and build buffer time for document requests.",
  },
  {
    question: "Can students in Ontario apply through OINP?",
    answer:
      "Eligible graduates from Ontario post-secondary programs may qualify for International Student streams if program length, institution, and employment history meet stream criteria. Many students later combine study, PGWP work, and TR-to-PR or PNP pathways.",
  },
  {
    question: "Is Niagara Falls inside OINP’s focus areas?",
    answer:
      "OINP is a province-wide program. Local labour demand in Niagara and the broader Golden Horseshoe can support employer-driven nominations when the role, wage, and retention plan align with stream rules — but eligibility is always stream-specific, not based on city alone.",
  },
];

export const STUDY_PERMITS_FAQS: GuideFaqItem[] = [
  {
    question: "What is a Provincial Attestation Letter (PAL) or Territorial Attestation Letter (TAL)?",
    answer:
      "For many new study permit applications, IRCC requires a PAL or TAL issued by the province or territory confirming the study spot counts toward that jurisdiction’s allocation. Exemptions exist for certain levels and programs — confirm current IRCC instructions before applying.",
  },
  {
    question: "Can I work while studying in Canada?",
    answer:
      "Many study permit holders may work on or off campus within IRCC hour limits when their permit includes work authorization and they meet enrolment requirements. Co-op work requires a co-op work permit. Rules change — verify the conditions printed on your permit and IRCC’s student work page.",
  },
  {
    question: "What is the Post-Graduation Work Permit (PGWP)?",
    answer:
      "The PGWP is an open work permit for eligible graduates of designated learning institutions. Program length and delivery mode affect PGWP length. It is often a bridge to Canadian Experience Class or employer-driven PR pathways.",
  },
  {
    question: "How do study permits relate to permanent residence?",
    answer:
      "Study alone does not grant permanent residence. Graduates frequently move to PGWP work, then Express Entry, OINP, or other PR streams. Plan academics, work history, and language testing early so you do not lose eligibility windows.",
  },
];

export const FAMILY_SPONSORSHIP_FAQS: GuideFaqItem[] = [
  {
    question: "Who can sponsor a spouse or partner to Canada?",
    answer:
      "A Canadian citizen or permanent resident may sponsor a spouse, common-law partner, or conjugal partner if relationship, eligibility, and undertaking requirements are met. Sponsors must meet income rules where applicable and sign an undertaking to support the sponsored person.",
  },
  {
    question: "Can I sponsor parents or grandparents in 2026?",
    answer:
      "Parent and Grandparent Program intake is usually limited and invitation-based. Super Visa is an alternative for eligible parents and grandparents who want long visits. Check IRCC for whether PGP is open to new interest-to-sponsor forms in the current year.",
  },
  {
    question: "Does inland sponsorship allow work while waiting?",
    answer:
      "Eligible in-Canada spousal applicants may apply for a Spousal Open Work Permit when filing under the in-land stream, subject to IRCC criteria and processing times. Outland and inland strategies differ — choose based on status, travel needs, and risk tolerance.",
  },
  {
    question: "What documents prove a genuine relationship?",
    answer:
      "IRCC expects evidence of cohabitation, communication, finances, social ties, and commitment over time. Document quality and consistency matter more than volume. Misrepresentation carries serious consequences.",
  },
];

export const WORK_PERMITS_FAQS: GuideFaqItem[] = [
  {
    question: "What is the difference between LMIA-based and LMIA-exempt work permits?",
    answer:
      "LMIA-based permits under the Temporary Foreign Worker Program generally require a positive or neutral Labour Market Impact Assessment. LMIA-exempt permits under the International Mobility Program rely on categories such as CUSMA, intra-company transfer, or public policy — each with distinct employer and worker requirements.",
  },
  {
    question: "Can a work permit lead to permanent residence?",
    answer:
      "Yes, but not automatically. Canadian work experience can support Express Entry (CEC), OINP employer streams, or other PR pathways. Align NOC, TEER, language scores, and timing with the PR program you target.",
  },
];

export const TR_TO_PR_FAQS: GuideFaqItem[] = [
  {
    question: "What does TR to PR mean?",
    answer:
      "TR to PR describes moving from temporary resident status (worker, student, or visitor where allowed) to permanent residence through an eligible federal or provincial pathway — not a single program name. Strategy depends on your current status, work history, and language scores.",
  },
  {
    question: "Is Canadian work experience required for TR to PR?",
    answer:
      "Many popular pathways require skilled Canadian work experience (for example CEC or employer-driven PNP streams). Students often use PGWP work first. Each stream defines eligible NOC, hours, and TEER requirements.",
  },
];

export const PR_CITIZENSHIP_FAQS: GuideFaqItem[] = [
  {
    question: "How long must I live in Canada before citizenship?",
    answer:
      "Adult applicants generally need three years (1,095 days) of physical presence in the five years before applying, with additional rules for temporary resident and PR time. Use IRCC’s physical presence calculator and confirm current residence requirements.",
  },
  {
    question: "When should I renew my PR card?",
    answer:
      "Apply to renew a PR card if you plan to travel outside Canada and your card is expired or will expire soon. A valid PR card is not required to live in Canada, but airlines and carriers usually require proof of status to board flights to Canada.",
  },
];

export const HUMANITARIAN_FAQS: GuideFaqItem[] = [
  {
    question: "What is a Humanitarian and Compassionate (H&C) application?",
    answer:
      "H&C is a discretionary request for permanent residence from inside Canada in exceptional circumstances, weighing factors such as establishment, family ties, and hardship. It is not a routine alternative to standard economic or family streams.",
  },
  {
    question: "Do I need a lawyer for immigration appeals?",
    answer:
      "Some Immigration Appeal Division and Federal Court matters require or strongly benefit from legal representation. Regulated consultants (RCICs) and lawyers have different scopes — match the professional to the forum and complexity of your case.",
  },
];
