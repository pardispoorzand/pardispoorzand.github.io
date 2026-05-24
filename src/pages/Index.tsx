import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Truck, MessagesSquare, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { ProblemCards } from "@/components/site/ProblemCards";
import { PlanComparison } from "@/components/site/PlanComparison";
import { Testimonials } from "@/components/site/Testimonials";
import { OutcomeStats } from "@/components/site/OutcomeStats";
import { TreatmentGrid } from "@/components/site/TreatmentGrid";
import { POSTS } from "@/data/blog";
import { SITE } from "@/lib/site";
import flatlay from "@/assets/treatments-flatlay.jpg";
import doctorImg from "@/assets/doctor-consult.jpg";
import heroEditorial from "@/assets/hero-editorial.jpg";
import heroLoop from "@/assets/hero-loop.mp4.asset.json";

const steps = [
  { icon: MessagesSquare, title: "Book a virtual consult", body: "Meet 1:1 with a licensed Ōra physician on JaneApp — no waiting room, no rushed visit." },
  { icon: Stethoscope, title: "Get a personalized plan", body: "Your physician reviews your history and recommends the treatment best suited to you." },
  { icon: Truck, title: "Medication delivered", body: "Prescriptions ship discreetly from a licensed pharmacy, straight to your door." },
  { icon: ShieldCheck, title: "Ongoing physician care", body: "Adjustments, check-ins, and support throughout your journey — never just a refill." },
];

const Index = () => (
  <SiteLayout
    title="Ōra Medical Clinic — Physician-guided weight loss in CA & WA"
    description="Virtual medical weight loss with semaglutide, tirzepatide, and oral medications. Real physicians, real results, delivered to your door across California and Washington."
  >
    {/* HERO — editorial split with imagery */}
    <section className="relative">
      <div className="container-wide pt-6 pb-10 md:pt-10 md:pb-16">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch animate-fade-up">
          {/* Left: copy block */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-[2.5rem] bg-gradient-hero p-8 md:p-14 flex flex-col justify-between min-h-[520px] md:min-h-[640px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-sage" /> Now serving {SITE.states}
              </span>
              <h1 className="mt-6 text-balance">
                Feel like<br />
                <span className="text-accent">yourself</span> again.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-lg">
                Physician-guided weight loss, energy, and longevity — prescribed online by real doctors and delivered to your door.
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Button asChild variant="default" size="lg">
                <a href={SITE.bookingUrl} target="_blank" rel="noreferrer">Book your consult <ArrowRight /></a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/treatments">Explore treatments</Link>
              </Button>
              <div className="sm:ml-4 flex items-center gap-2 text-sm text-foreground/70">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="font-medium">4.9 from real patients</span>
              </div>
            </div>
          </div>

          {/* Right: editorial portrait */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-[2.5rem] min-h-[420px] md:min-h-[640px]">
            <video
              src={heroLoop.url}
              poster={heroEditorial}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Ōra patient enjoying renewed energy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 rounded-2xl bg-background/85 backdrop-blur px-5 py-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Patient story</div>
                <div className="mt-1 font-serif text-base text-foreground">"Down 38 lbs and finally sleeping again."</div>
              </div>
              <Link to="/about" className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background hover:bg-accent transition-colors">
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* MARQUEE / TRUST */}
    <div className="border-y border-border bg-muted/40 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-5 gap-12">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex gap-12 items-center text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground shrink-0">
            <span>· Physician-supervised</span>
            <span>· Compounded by licensed pharmacies</span>
            <span>· Virtual visits in CA & WA</span>
            <span>· Real care, no chatbots</span>
            <span>· Discreet shipping</span>
          </div>
        ))}
      </div>
    </div>

    {/* TREATMENTS GRID */}
    <Section>
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <Eyebrow>Treatments</Eyebrow>
          <h2 className="mt-4 text-balance">Care for how you actually live.</h2>
        </div>
        <Link to="/treatments" className="text-sm font-medium text-accent inline-flex items-center gap-1 hover:gap-2 transition-all">
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <TreatmentGrid />
    </Section>

    {/* PROBLEM-AWARE STORY */}
    <ProblemCards />

    {/* PLAN COMPARISON */}
    <PlanComparison />

    {/* HOW IT WORKS */}
    <Section variant="cream">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <img
            src={doctorImg}
            alt="Ōra physician on a virtual visit"
            width={1024}
            height={1024}
            loading="lazy"
            className="rounded-[2rem] shadow-soft w-full aspect-square object-cover"
          />
        </div>
        <div className="lg:col-span-7">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 text-balance">Real medicine, simplified.</h2>
          <p className="mt-5 text-foreground/70 max-w-xl">
            No waiting rooms. No middle-managers. Just a direct relationship with a physician who cares about your outcomes.
          </p>
          <ol className="mt-10 space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-sage text-sage-foreground inline-flex items-center justify-center">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Step {i + 1}</div>
                  <h3 className="mt-1 font-serif text-xl text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-foreground/70 max-w-md">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>

    {/* WHY ORA */}
    <Section variant="ink">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Eyebrow className="text-cream">Why Ōra</Eyebrow>
          <h2 className="mt-4 text-balance text-cream">Care that actually feels like care.</h2>
          <p className="mt-5 text-cream/75 max-w-xl">
            Most weight loss apps are built around volume. Ōra is built around physicians who know your name, your history, and your goals.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { t: "Physician-led, every visit", b: "You'll never be handed off to a chatbot or non-medical 'coach'." },
              { t: "Personalized, not packaged", b: "Plans are built around your labs, history, and lifestyle — not a template." },
              { t: "Transparent pricing", b: "Clear monthly cost. No surprise fees. Cancel any time." },
              { t: "Real follow-up", b: "Regular check-ins to titrate, troubleshoot, and adjust as you progress." },
            ].map((f) => (
              <div key={f.t}>
                <div className="font-serif text-xl text-cream">{f.t}</div>
                <p className="mt-2 text-sm text-cream/70">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <img
            src={flatlay}
            alt="Ōra weight loss treatment supplies"
            width={1024}
            height={1024}
            loading="lazy"
            className="rounded-[2rem] w-full aspect-square object-cover"
          />
        </div>
      </div>
    </Section>

    {/* OUTCOME STATS */}
    <OutcomeStats />

    {/* EDUCATION */}
    <Section>
      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <div>
          <Eyebrow>Education</Eyebrow>
          <h2 className="mt-4">Learn the science.</h2>
        </div>
        <Link to="/blog" className="text-sm font-medium text-accent inline-flex items-center gap-1 hover:gap-2 transition-all">
          All articles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {POSTS.slice(0, 3).map((p) => (
          <Link key={p.slug} to={`/blog/${p.slug}`} className="group">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-hero mb-5 overflow-hidden">
              <div className="w-full h-full flex items-end p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground/70">{p.category}</span>
              </div>
            </div>
            <h3 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors text-balance">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </Section>

    {/* TESTIMONIALS */}
    <Testimonials />

    <CTA />
  </SiteLayout>
);

export default Index;
