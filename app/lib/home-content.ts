// Purpose: Homepage copy and structured lists (services, proof points, process, guides).

export type HomeService = {
  title: string;
  body: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
};

export type HomeProofPoint = {
  icon: string;
  label: string;
  body: string;
};

export type HomeProcessStep = {
  step: string;
  icon: string;
  title: string;
  body: string;
};

export type HomeGuideCard = {
  title: string;
  body: string;
  href: string;
};

export const HOME_SERVICES: readonly HomeService[] = [
  {
    title: "Express Entry",
    body: "We build CRS strategy, stream selection, and filing order for FSW, CEC, and FSTP.",
    href: "/guides/express-entry-2026",
    cta: "Read guide",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Toronto skyline at dusk",
  },
  {
    title: "Provincial Nominee (OINP)",
    body: "We match your profile to the right Ontario stream and align your file with current OINP rules.",
    href: "/guides/oinp-2026-niagara",
    cta: "View OINP guide",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Mist over mountains and water",
  },
  {
    title: "Work Permits and LMIA",
    body: "We support LMIA-based and LMIA-exempt streams, including CUSMA, ICT, and C11.",
    href: "/guides/work-permits-2026",
    cta: "Read guide",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Team meeting in a modern office",
  },
  {
    title: "Study Permits",
    body: "We file study permits with PAL or TAL compliance and clear timing under current cap rules.",
    href: "#contact",
    cta: "Get assessment",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Students on a university campus",
  },
  {
    title: "Family and Spousal Sponsorship",
    body: "We file spouse, partner, child, and parent sponsorships with complete evidence packages.",
    href: "#contact",
    cta: "Get assessment",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Family spending time together",
  },
  {
    title: "Visitor Visas and Super Visa",
    body: "We prepare visitor and super visa applications with strong proof of ties and intent.",
    href: "/guides/pr-citizenship-2026",
    cta: "Read guide",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Resort pool and travel destination",
  },
  {
    title: "Canadian Citizenship",
    body: "We confirm eligibility, file your application, and prepare you for the test and oath.",
    href: "/guides/pr-citizenship-2026",
    cta: "Read guide",
    image:
      "https://images.unsplash.com/photo-1545013806-8e1d077550ca?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Canadian passport with red-and-white national colors linked to the Canadian flag",
  },
  {
    title: "Humanitarian and Compassionate",
    body: "We build H and C submissions for cases that need a path outside standard streams.",
    href: "/guides/humanitarian-appeals-2026",
    cta: "Read guide",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Legal documents on a desk",
  },
] as const;

export const HOME_PROOF_POINTS: readonly HomeProofPoint[] = [
  {
    icon: "fact_check",
    label: "The Right Pathway",
    body: "A clear answer on which route fits you under current rules.",
  },
  {
    icon: "shield",
    label: "Avoid Costly Refusals",
    body: "We catch the mistakes IRCC rejects files for.",
  },
  {
    icon: "schedule",
    label: "2026 Rules Apply",
    body: "OINP and study caps changed. Your plan may need updating.",
  },
  {
    icon: "person",
    label: "Direct With Your RCIC",
    body: "A licensed consultant handles your file. No call centre.",
  },
] as const;

export const HOME_PROCESS_STEPS: readonly HomeProcessStep[] = [
  {
    step: "01",
    icon: "visibility",
    title: "Assessment",
    body: "We review your profile, goals, and eligibility before any filing begins.",
  },
  {
    step: "02",
    icon: "gavel",
    title: "Strategy",
    body: "You receive a written plan: pathway, stream, timeline, and milestones.",
  },
  {
    step: "03",
    icon: "arrow_forward",
    title: "Filing",
    body: "We prepare and submit a complete, evidence-backed application.",
  },
  {
    step: "04",
    icon: "verified",
    title: "Outcome",
    body: "We track your file and guide you through the decision and next steps.",
  },
] as const;

export const HOME_GUIDES: readonly HomeGuideCard[] = [
  {
    title: "Express Entry 2026",
    body: "Direct guidance on CRS, eligibility, and filing priorities for skilled professionals.",
    href: "/guides/express-entry-2026",
  },
  {
    title: "OINP 2026 (Ontario)",
    body: "Clear stream selection guidance with current Ontario rules and stream fit.",
    href: "/guides/oinp-2026-niagara",
  },
  {
    title: "TR to PR Pathway 2026",
    body: "Direct TR-to-PR planning with clear eligibility checks and filing steps.",
    href: "/guides/tr-to-pr-2026",
  },
] as const;
