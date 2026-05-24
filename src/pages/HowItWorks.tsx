import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { SITE } from "@/lib/site";
import { ArrowRight, Calendar, FileText, Pill, RefreshCw } from "lucide-react";

const steps = [
  { icon: Calendar, title: "Book your virtual visit", body: "Pick a time on JaneApp that works for you. Visits are 30–45 minutes — enough room for real conversation, not a rushed checkbox.", n: "01" },
  { icon: FileText, title: "Physician evaluation", body: "Your Ōra physician reviews your medical history, current medications, labs (if available), and goals to determine eligibility and the best-fit treatment.", n: "02" },
  { icon: Pill, title: "Treatment shipped", body: "If prescribed, your medication ships from a licensed compounding pharmacy directly to your home in discreet packaging.", n: "03" },
  { icon: RefreshCw, title: "Ongoing care & adjustments", body: "Regular follow-ups so we can titrate doses, manage side effects, and keep your plan working as your body changes.", n: "04" },
];

const HowItWorks = () => (
  <SiteLayout title="How it works | Ōra Medical Clinic" description="From booking your virtual consult to ongoing physician care — here's exactly how Ōra delivers personalized medical weight loss.">
    <Section variant="cream" className="pt-16 md:pt-24">
      <div className="max-w-3xl">
        <Eyebrow>How it works</Eyebrow>
        <h1 className="mt-5 text-balance">Personalized medical weight loss in four straightforward steps.</h1>
        <p className="mt-6 text-lg text-foreground/75">No insurance gymnastics, no chatbot triage. A direct relationship with a physician, supported by modern logistics.</p>
        <div className="mt-8">
          <Button asChild variant="default" size="lg">
            <a href={SITE.bookingUrl} target="_blank" rel="noreferrer">Book your consult <ArrowRight /></a>
          </Button>
        </div>
      </div>
    </Section>

    <Section>
      <div className="grid gap-10">
        {steps.map((s) => (
          <div key={s.n} className="grid md:grid-cols-12 gap-8 items-start border-t border-border pt-10">
            <div className="md:col-span-3 font-serif text-6xl text-accent">{s.n}</div>
            <div className="md:col-span-2">
              <div className="w-14 h-14 rounded-2xl bg-sage/20 text-sage inline-flex items-center justify-center">
                <s.icon className="h-6 w-6" />
              </div>
            </div>
            <div className="md:col-span-7">
              <h3 className="font-serif">{s.title}</h3>
              <p className="mt-3 text-foreground/70 max-w-2xl">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    <Section variant="ink">
      <div className="max-w-3xl">
        <Eyebrow className="text-cream">What to expect</Eyebrow>
        <h2 className="mt-4 text-cream">Your first 90 days, mapped out.</h2>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {[
          { w: "Week 1", t: "Onboarding & first dose", b: "Receive your medication, walk through injection technique with your physician, and start your lowest dose." },
          { w: "Week 4", t: "First titration check-in", b: "We assess tolerance and side effects, then step you up to the next dose if appropriate." },
          { w: "Week 12", t: "Progress review", b: "Most patients see meaningful weight change by this point. We adjust dose, lifestyle plan, and timing." },
        ].map((p) => (
          <div key={p.w} className="rounded-2xl bg-cream/5 border border-cream/15 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent">{p.w}</div>
            <h3 className="mt-3 font-serif text-2xl text-cream">{p.t}</h3>
            <p className="mt-3 text-sm text-cream/70">{p.b}</p>
          </div>
        ))}
      </div>
    </Section>

    <CTA />
  </SiteLayout>
);

export default HowItWorks;
