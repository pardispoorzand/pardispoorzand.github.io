import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { SITE } from "@/lib/site";

const tiers = [
  {
    name: "Oral Medications",
    price: "$99",
    cadence: "/month",
    blurb: "Daily oral options like metformin or naltrexone-bupropion.",
    features: ["Physician consult included", "Prescription & refills", "Ongoing dose adjustments", "Discreet shipping"],
    cta: "Start oral plan",
    highlight: false,
  },
  {
    name: "Semaglutide",
    price: "$249",
    cadence: "/month",
    blurb: "Weekly GLP-1 injection — our most-prescribed first step.",
    features: ["Physician consult & follow-ups", "Compounded semaglutide", "Slow titration & support", "Cold-chain shipping"],
    cta: "Start semaglutide",
    highlight: true,
  },
  {
    name: "Tirzepatide",
    price: "$399",
    cadence: "/month",
    blurb: "Dual GIP + GLP-1 — our strongest compounded option.",
    features: ["Physician consult & follow-ups", "Compounded tirzepatide", "Slow titration & support", "Cold-chain shipping"],
    cta: "Start tirzepatide",
    highlight: false,
  },
];

const Pricing = () => (
  <SiteLayout
    title="Pricing — Ōra Medical Clinic | Transparent monthly weight loss plans"
    description="Clear monthly pricing for Ōra's medical weight loss programs. No insurance hassle, no hidden fees. HSA/FSA accepted. Cancel any time."
  >
    <Section variant="default">
      <div className="max-w-3xl">
        <Eyebrow>Pricing</Eyebrow>
        <h1 className="mt-4 text-balance">
          Clear pricing. <span className="text-accent">No surprises.</span>
        </h1>
        <p className="mt-6 text-lg text-foreground/70">
          One monthly price covers your physician care, prescription, and shipping. Month-to-month. Cancel any time. HSA/FSA accepted.
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-3xl border shadow-card p-8 flex flex-col ${
              t.highlight ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
            }`}
          >
            {t.highlight && (
              <span className="inline-block self-start text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full bg-accent text-accent-foreground mb-4">
                Most chosen
              </span>
            )}
            <h3 className={`font-serif text-3xl ${t.highlight ? "text-cream" : "text-foreground"}`}>{t.name}</h3>
            <p className={`mt-2 text-sm ${t.highlight ? "text-cream/75" : "text-foreground/70"}`}>{t.blurb}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-serif text-5xl">{t.price}</span>
              <span className={`${t.highlight ? "text-cream/70" : "text-muted-foreground"}`}>{t.cadence}</span>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className={`h-4 w-4 mt-0.5 shrink-0 ${t.highlight ? "text-cream" : "text-sage"}`} /> {f}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8" variant={t.highlight ? "secondary" : "default"}>
              <a href={SITE.bookingUrl} target="_blank" rel="noreferrer">{t.cta} <ArrowRight /></a>
            </Button>
          </div>
        ))}
      </div>
    </Section>

    <Section variant="cream">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <Eyebrow>What's included</Eyebrow>
          <h2 className="mt-4 text-balance">Care, not just a refill.</h2>
          <p className="mt-4 text-foreground/70">
            Every Ōra plan includes physician evaluation, prescription, ongoing follow-ups, and direct messaging with your care team. You'll never be handed off to a coach or chatbot.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            "Physician consult & follow-ups",
            "Personalized prescription",
            "Slow, supportive titration",
            "Discreet shipping included",
            "HSA/FSA accepted",
            "Cancel any time",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-card border border-border p-5">
              <Check className="h-5 w-5 text-sage" />
              <p className="mt-3 text-sm font-medium text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <Link to="/faq" className="text-accent font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
          See all pricing & billing FAQs <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>

    <CTA />
  </SiteLayout>
);

export default Pricing;
