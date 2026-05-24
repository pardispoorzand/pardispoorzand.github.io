export type FAQ = { q: string; a: string };

export const FAQ_GROUPS: { title: string; items: FAQ[] }[] = [
  {
    title: "Eligibility & getting started",
    items: [
      { q: "Who is eligible for treatment at Ōra?", a: "Adults 18+ residing in California or Washington with a BMI of 27 or higher (or 25+ with weight-related conditions). Eligibility is confirmed during your physician consultation." },
      { q: "Do I need a referral or prior labs?", a: "No referral needed. If labs are required, we'll order them locally — usually covered by insurance even though our visits aren't." },
      { q: "How quickly can I start?", a: "Most patients book a consult within a few days and, if appropriate, receive medication shipped within a week." },
    ],
  },
  {
    title: "Medications & safety",
    items: [
      { q: "Are compounded medications safe?", a: "Ōra works only with U.S. licensed compounding pharmacies that follow strict FDA-regulated standards. Your physician monitors you throughout treatment." },
      { q: "What are common side effects?", a: "Mild nausea, constipation, or fatigue are most common during dose increases. We titrate slowly and adjust as needed." },
      { q: "How long will I need to take medication?", a: "Weight loss medications work best as long-term tools. Many patients eventually move to a maintenance dose; your physician will guide the plan." },
    ],
  },
  {
    title: "Pricing, billing & shipping",
    items: [
      { q: "How much does Ōra cost?", a: "Plans start at $99/month for oral medications, $249/month for semaglutide, and $399/month for tirzepatide. There are no hidden fees." },
      { q: "Do you accept insurance?", a: "Ōra is a cash-pay clinic, which keeps care direct and transparent. HSA/FSA cards are accepted." },
      { q: "How is medication delivered?", a: "Discreet, temperature-controlled shipping straight to your door from a licensed U.S. compounding pharmacy." },
      { q: "Can I cancel anytime?", a: "Yes. Plans are month-to-month with no long-term commitment." },
    ],
  },
];
