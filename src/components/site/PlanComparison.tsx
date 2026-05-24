import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Section, Eyebrow } from "./Section";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

type Plan = {
  slug: string;
  badge: string;
  badgeTone: "sage" | "accent" | "ink";
  name: string;
  category: string;
  price: string;
  blurb: string;
  results: string[];
  why: string[];
  bestFor: string[];
};

const plans: Plan[] = [
  {
    slug: "semaglutide",
    badge: "Best first step",
    badgeTone: "sage",
    name: "Semaglutide",
    category: "GLP-1 receptor agonist · weekly injection",
    price: "From $249/mo",
    blurb: "A once-weekly injection that quiets food noise, reduces cravings, and supports steady weight loss from day one.",
    results: ["Average 10–15% body weight loss", "Steady, sustainable progress"],
    why: ["Feel satisfied sooner, stay full longer", "Reduces food noise & cravings", "Improves metabolic markers"],
    bestFor: ["You've never tried GLP-1s before", "You want steady, consistent progress"],
  },
  {
    slug: "tirzepatide",
    badge: "Most chosen",
    badgeTone: "accent",
    name: "Tirzepatide",
    category: "Dual GIP + GLP-1 · weekly injection",
    price: "From $399/mo",
    blurb: "Our most powerful option. Targets both hunger and insulin pathways for stronger, faster results when your body needs more.",
    results: ["Average 15–22% body weight loss", "Effective for plateaus"],
    why: ["Stronger appetite suppression", "Dual-pathway hormone targeting", "Improvements to A1C & lipids"],
    bestFor: ["Breaking through plateaus", "More weight to lose"],
  },
  {
    slug: "metformin",
    badge: "No needles",
    badgeTone: "ink",
    name: "Metformin",
    category: "Daily oral · non-injectable",
    price: "From $79/mo",
    blurb: "A trusted daily tablet that improves insulin sensitivity and supports gradual, sustainable weight loss when injectables aren't the right fit.",
    results: ["Meaningful, gradual weight loss", "Often lower monthly cost"],
    why: ["Simple daily dosing", "Broad eligibility", "Matched to your health profile"],
    bestFor: ["You prefer no injections", "Contraindications to GLP-1s"],
  },
];

const toneClass = {
  sage: "bg-sage text-sage-foreground",
  accent: "bg-accent text-accent-foreground",
  ink: "bg-primary text-primary-foreground",
};

export const PlanComparison = () => (
  <Section variant="cream" id="plans">
    <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
      <div className="md:col-span-7">
        <Eyebrow>Choose your plan</Eyebrow>
        <h2 className="mt-4 text-balance">
          Medical weight loss <span className="text-accent">matched to your stage and goals.</span>
        </h2>
      </div>
      <p className="md:col-span-5 text-foreground/70">
        Weight loss isn't one size fits all. Your physician picks the plan that fits your stage, goals, and lifestyle — no restrictive dieting required.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-6">
      {plans.map((p) => (
        <div key={p.slug} className="rounded-3xl bg-card border border-border shadow-card flex flex-col overflow-hidden">
          <div className="p-8 pb-6 border-b border-border">
            <span className={`inline-block text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full ${toneClass[p.badgeTone]}`}>
              {p.badge}
            </span>
            <h3 className="mt-4 font-serif text-3xl text-foreground">{p.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{p.category}</p>
            <p className="mt-5 text-sm text-foreground/75">{p.blurb}</p>
            <p className="mt-5 text-2xl font-serif text-accent">{p.price}</p>
          </div>

          <div className="p-8 space-y-5 flex-1">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Results</div>
              <ul className="mt-2 space-y-1.5">
                {p.results.map((r) => (
                  <li key={r} className="text-sm text-foreground/80 flex gap-2"><Check className="h-4 w-4 text-sage shrink-0 mt-0.5" />{r}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Why it works</div>
              <ul className="mt-2 space-y-1.5">
                {p.why.map((r) => (
                  <li key={r} className="text-sm text-foreground/80 flex gap-2"><Check className="h-4 w-4 text-sage shrink-0 mt-0.5" />{r}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Best for</div>
              <ul className="mt-2 space-y-1.5">
                {p.bestFor.map((r) => (
                  <li key={r} className="text-sm text-foreground/80 flex gap-2"><Check className="h-4 w-4 text-sage shrink-0 mt-0.5" />{r}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-8 pt-0 flex flex-col gap-2">
            <Button asChild>
              <a href={SITE.bookingUrl} target="_blank" rel="noreferrer">Start {p.name} <ArrowRight /></a>
            </Button>
            <Link to={`/treatments/${p.slug}`} className="text-center text-sm font-medium text-foreground/70 hover:text-foreground py-2">
              Learn more
            </Link>
          </div>
        </div>
      ))}
    </div>

    <p className="mt-10 text-xs text-muted-foreground max-w-3xl">
      Results are based on published clinical trial data and individual patient outcomes; your results may vary. Compounded medications are dispensed only by U.S. licensed pharmacies under physician oversight. GLP-1 medications carry risks — talk to your physician about whether they're right for you.
    </p>
  </Section>
);
