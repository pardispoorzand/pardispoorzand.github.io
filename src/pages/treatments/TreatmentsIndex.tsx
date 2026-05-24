import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { TREATMENTS } from "@/data/treatments";

const TreatmentsIndex = () => (
  <SiteLayout
    title="Weight Loss Treatments | Ōra Medical Clinic"
    description="Compare semaglutide, tirzepatide, and oral weight loss medications. Physician-prescribed, shipped to your door across California and Washington."
  >
    <Section variant="cream" className="pt-16 md:pt-24">
      <div className="max-w-3xl">
        <Eyebrow>Treatments</Eyebrow>
        <h1 className="mt-5 text-balance">Every program. One physician-led plan.</h1>
        <p className="mt-6 text-lg text-foreground/75">
          We prescribe the medication that fits your body, history, and goals — not the one with the biggest margin. Compare options below or book a consult to get a personal recommendation.
        </p>
      </div>
    </Section>

    <Section>
      <div className="grid gap-6">
        {TREATMENTS.map((t) => (
          <Link
            key={t.slug}
            to={`/treatments/${t.slug}`}
            className="group grid md:grid-cols-12 gap-8 items-center rounded-3xl bg-card border border-border p-8 md:p-10 shadow-card hover:shadow-soft transition-all hover:-translate-y-0.5"
          >
            <div className="md:col-span-4">
              <Eyebrow className="text-sage">{t.category}</Eyebrow>
              <h2 className="mt-3 font-serif text-4xl">{t.name}</h2>
              <div className="mt-2 text-sm text-muted-foreground">{t.startingPrice}</div>
            </div>
            <div className="md:col-span-6">
              <p className="text-foreground/80">{t.tagline}</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground/70">
                {t.highlights.map((h) => (
                  <li key={h} className="flex gap-2"><Check className="h-4 w-4 text-sage shrink-0 mt-0.5" /> {h}</li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 md:text-right">
              <span className="inline-flex items-center gap-1 text-accent font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>

    <CTA />
  </SiteLayout>
);

export default TreatmentsIndex;
