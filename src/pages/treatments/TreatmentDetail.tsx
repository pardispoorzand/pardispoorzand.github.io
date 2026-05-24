import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Check, Clock, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { getTreatment, TREATMENTS } from "@/data/treatments";
import { SITE } from "@/lib/site";
import flatlay from "@/assets/treatments-flatlay.jpg";

const TreatmentDetail = () => {
  const { slug = "" } = useParams();
  const t = getTreatment(slug);
  if (!t) return <Navigate to="/treatments" replace />;

  const others = TREATMENTS.filter((x) => x.slug !== t.slug);

  return (
    <SiteLayout
      title={`${t.name} — ${t.category} | Ōra Medical Clinic`}
      description={t.description}
    >
      <Section variant="cream" className="pt-16 md:pt-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>{t.category}</Eyebrow>
            <h1 className="mt-5 text-balance">{t.name}</h1>
            <p className="mt-5 text-lg text-foreground/75 max-w-xl">{t.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="default" size="lg">
                <a href={SITE.bookingUrl} target="_blank" rel="noreferrer">Book a consult <ArrowRight /></a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/how-it-works">How it works</Link>
              </Button>
            </div>
            <dl className="mt-10 grid sm:grid-cols-3 gap-6 text-sm">
              <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Format</dt><dd className="mt-1 font-medium flex items-center gap-2"><Pill className="h-4 w-4 text-sage" /> {t.format}</dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Cadence</dt><dd className="mt-1 font-medium flex items-center gap-2"><Clock className="h-4 w-4 text-sage" /> {t.cadence}</dd></div>
              {t.startingPrice && <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Pricing</dt><dd className="mt-1 font-medium">{t.startingPrice}</dd></div>}
            </dl>
          </div>
          <div className="lg:col-span-5">
            <img src={flatlay} alt={`${t.name} treatment`} width={1024} height={1024} loading="lazy" className="rounded-[2rem] w-full aspect-square object-cover shadow-soft" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-4 text-balance">How {t.name} works.</h2>
            <p className="mt-5 text-foreground/75">{t.description}</p>
            <div className="mt-6 p-5 rounded-2xl bg-muted/60 border border-border">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Best for</div>
              <p className="mt-2 text-foreground/80">{t.bestFor}</p>
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {t.benefits.map((b) => (
              <div key={b.title} className="rounded-2xl bg-card border border-border p-6">
                <h3 className="font-serif text-xl">{b.title}</h3>
                <p className="mt-3 text-sm text-foreground/70">{b.body}</p>
              </div>
            ))}
            <div className="sm:col-span-2 rounded-2xl bg-sage text-sage-foreground p-6">
              <div className="text-xs uppercase tracking-widest text-cream/80">What you get</div>
              <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
                {t.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-cream"><Check className="h-4 w-4 mt-0.5 shrink-0" /> {h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="cream">
        <div className="max-w-3xl">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="mt-4">Common questions about {t.name}.</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 max-w-3xl">
          {t.faqs.map((f, i) => (
            <AccordionItem key={i} value={`f-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-serif text-xl hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-foreground/75">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section>
        <Eyebrow>Other treatments</Eyebrow>
        <h2 className="mt-4 mb-10">Compare other options.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {others.map((o) => (
            <Link key={o.slug} to={`/treatments/${o.slug}`} className="group rounded-2xl bg-card border border-border p-6 hover:shadow-soft transition-all">
              <Eyebrow className="text-sage">{o.category}</Eyebrow>
              <h3 className="mt-3 font-serif text-2xl">{o.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">Learn more <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </Section>

      <CTA />
    </SiteLayout>
  );
};

export default TreatmentDetail;
