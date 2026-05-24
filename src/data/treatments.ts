export type Treatment = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  bestFor: string;
  format: string;
  cadence: string;
  highlights: string[];
  benefits: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  startingPrice?: string;
  brandNames?: string;
  focus?: "Weight Loss" | "Longevity" | "Energy" | "Performance";
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "semaglutide",
    name: "Semaglutide",
    category: "GLP-1 Injection",
    brandNames: "Wegovy® / Ozempic®",
    focus: "Weight Loss",
    tagline: "The proven GLP-1 for steady, lasting weight loss.",
    description:
      "Compounded semaglutide is a once-weekly injection that mimics a natural hormone (GLP-1) to reduce appetite, slow digestion, and help you feel full longer — making sustainable weight loss far more achievable.",
    bestFor: "Patients seeking a well-studied first-line GLP-1 with a manageable cost.",
    format: "Subcutaneous injection",
    cadence: "Once weekly",
    highlights: [
      "Average 10–15% body weight reduction in clinical studies",
      "Improves appetite signals and reduces food noise",
      "Supports better blood sugar and metabolic health",
    ],
    benefits: [
      { title: "Appetite control", body: "Feel full sooner and stay satisfied longer between meals." },
      { title: "Metabolic support", body: "Improves insulin sensitivity and post-meal glucose response." },
      { title: "Sustainable pace", body: "Gradual dose titration minimizes side effects and supports long-term success." },
    ],
    faqs: [
      { q: "How fast will I see results?", a: "Most patients notice reduced appetite within 1–2 weeks. Meaningful weight loss typically appears by week 4–8 as the dose titrates upward." },
      { q: "What are the side effects?", a: "Most common are mild nausea, constipation, or fatigue during dose increases. We titrate slowly and adjust as needed." },
      { q: "Is it the same as Ozempic / Wegovy?", a: "It contains the same active ingredient (semaglutide), prepared by a licensed compounding pharmacy under physician supervision." },
    ],
    startingPrice: "From $249/mo",
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    category: "Dual GLP-1 / GIP Injection",
    brandNames: "Mounjaro® / Zepbound®",
    focus: "Weight Loss",
    tagline: "Our most effective option for significant weight loss.",
    description:
      "Tirzepatide activates two metabolic hormones — GLP-1 and GIP — for stronger appetite suppression and metabolic effects than GLP-1 alone. It's currently the most powerful weight loss medication available.",
    bestFor: "Patients with more weight to lose or who haven't reached goals on a GLP-1 alone.",
    format: "Subcutaneous injection",
    cadence: "Once weekly",
    highlights: [
      "Average 15–22% body weight reduction in clinical studies",
      "Dual hormone action for stronger appetite control",
      "Powerful improvements to A1C and lipid panels",
    ],
    benefits: [
      { title: "Maximum efficacy", body: "Highest average weight loss of any FDA-approved class to date." },
      { title: "Dual mechanism", body: "Combines GLP-1 and GIP for compounding metabolic effects." },
      { title: "Proven results", body: "Backed by the SURMOUNT trials showing transformative outcomes." },
    ],
    faqs: [
      { q: "Is tirzepatide stronger than semaglutide?", a: "Head-to-head studies show tirzepatide leads to greater average weight loss, but it isn't right for everyone. Your physician will help decide what fits." },
      { q: "Will I have to stay on it forever?", a: "Weight loss medications work best as long-term tools, but plans are individualized. Some patients taper to maintenance dosing." },
      { q: "Is it the same as Mounjaro / Zepbound?", a: "Yes — same active ingredient (tirzepatide), compounded by a licensed pharmacy under physician oversight." },
    ],
    startingPrice: "From $399/mo",
  },
  {
    slug: "metformin",
    name: "Metformin",
    category: "Oral Tablet",
    brandNames: "Glucophage®",
    focus: "Weight Loss",
    tagline: "A trusted oral medication for metabolic health and gradual weight loss.",
    description:
      "Metformin improves insulin sensitivity, lowers blood sugar, and supports modest weight loss. A dependable oral option for patients who prefer no injections or aren't candidates for GLP-1s.",
    bestFor: "Patients seeking a non-injectable option or with insulin resistance / PCOS.",
    format: "Oral tablet",
    cadence: "Daily",
    highlights: [
      "Improves insulin sensitivity",
      "Decades of safety data",
      "Affordable monthly cost",
    ],
    benefits: [
      { title: "Metabolic reset", body: "Helps your body use insulin more efficiently and stabilizes blood sugar." },
      { title: "Simple daily routine", body: "No injections, no titration kits — just a daily tablet." },
      { title: "Pairs well with other care", body: "Often combined with lifestyle support or GLP-1 protocols." },
    ],
    faqs: [
      { q: "How much weight will I lose?", a: "Metformin typically supports 3–7% body weight loss; results are gradual but durable." },
      { q: "Are there side effects?", a: "Mild GI upset is common at first and usually resolves within 1–2 weeks. We start low and titrate slowly." },
      { q: "Can I take it with a GLP-1?", a: "Yes — your physician may combine therapies if it's clinically appropriate." },
    ],
    startingPrice: "From $79/mo",
  },
  {
    slug: "nad",
    name: "NAD+ Injection",
    category: "Longevity Injection",
    brandNames: "Compounded NAD+",
    focus: "Longevity",
    tagline: "Cellular energy and longevity support, delivered weekly.",
    description:
      "NAD+ (nicotinamide adenine dinucleotide) is a coenzyme essential for mitochondrial energy production and DNA repair. Levels decline with age — replenishing supports energy, focus, and cellular resilience.",
    bestFor: "Patients focused on longevity, energy, recovery, and metabolic health.",
    format: "Subcutaneous injection",
    cadence: "Weekly",
    highlights: [
      "Supports mitochondrial energy production",
      "Aids DNA repair pathways",
      "May improve focus, recovery, and metabolic health",
    ],
    benefits: [
      { title: "Daily energy", body: "Many patients report steadier physical and mental energy within weeks." },
      { title: "Cellular repair", body: "Supports the sirtuin and PARP pathways involved in healthy aging." },
      { title: "Recovery support", body: "Pairs well with active lifestyles, training, and weight loss programs." },
    ],
    faqs: [
      { q: "How quickly will I feel it?", a: "Most patients notice improvements in energy and focus within 2–4 weeks of consistent dosing." },
      { q: "Is it safe?", a: "NAD+ has a strong safety profile. Your physician will review your history before prescribing." },
      { q: "Can I combine it with weight loss treatments?", a: "Yes — NAD+ pairs well with GLP-1 therapy and is often used alongside metabolic protocols." },
    ],
    startingPrice: "From $199/mo",
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    category: "Peptide Injection",
    brandNames: "Compounded Sermorelin",
    focus: "Performance",
    tagline: "Restore your body's natural growth hormone rhythm.",
    description:
      "Sermorelin is a growth hormone-releasing hormone (GHRH) analog that stimulates your pituitary to produce more of your own GH — supporting recovery, body composition, sleep, and lean mass.",
    bestFor: "Adults seeking better recovery, sleep quality, and body composition.",
    format: "Subcutaneous injection",
    cadence: "Nightly (5 nights/week)",
    highlights: [
      "Stimulates natural GH release",
      "Supports lean muscle and recovery",
      "Often improves sleep quality",
    ],
    benefits: [
      { title: "Body composition", body: "Helps preserve lean mass while supporting fat loss alongside other protocols." },
      { title: "Recovery & sleep", body: "Many patients report deeper sleep and faster recovery from training." },
      { title: "Natural pathway", body: "Stimulates your own GH production rather than replacing it directly." },
    ],
    faqs: [
      { q: "Is this the same as HGH?", a: "No. Sermorelin stimulates your body's natural GH production rather than introducing exogenous HGH." },
      { q: "When do I inject it?", a: "Typically before bed to align with your natural GH release cycle." },
      { q: "How long until I notice results?", a: "Sleep and recovery often improve within weeks; body composition changes typically take 3–6 months." },
    ],
    startingPrice: "From $179/mo",
  },
  {
    slug: "b12",
    name: "B12 Injection",
    category: "Energy Injection",
    brandNames: "Methylcobalamin B12",
    focus: "Energy",
    tagline: "A simple weekly boost for energy, mood, and metabolism.",
    description:
      "Vitamin B12 (methylcobalamin) supports red blood cell production, neurological function, and energy metabolism. Weekly injections bypass absorption issues for a consistent boost.",
    bestFor: "Patients with low energy, low B12 levels, or supporting weight loss programs.",
    format: "Intramuscular injection",
    cadence: "Weekly",
    highlights: [
      "Bypasses oral absorption issues",
      "Supports energy and mood",
      "Pairs well with weight loss protocols",
    ],
    benefits: [
      { title: "Energy support", body: "Many patients feel a noticeable lift in daily energy within 1–2 doses." },
      { title: "Cognitive clarity", body: "B12 supports nerve health and mental focus." },
      { title: "Add-on friendly", body: "Commonly bundled with GLP-1 plans for an extra boost." },
    ],
    faqs: [
      { q: "Do I need lab work first?", a: "Not always — but your physician may order labs if there's a clinical reason to check levels." },
      { q: "Can I self-administer?", a: "Yes. We provide everything you need and clear instructions." },
      { q: "Is it safe long-term?", a: "B12 has an excellent safety profile; excess is excreted in urine." },
    ],
    startingPrice: "From $49/mo",
  },
];

export const getTreatment = (slug: string) => TREATMENTS.find((t) => t.slug === slug);
