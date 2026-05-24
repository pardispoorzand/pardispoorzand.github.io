import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import doctorImg from "@/assets/doctor-consult.jpg";

const About = () => (
  <SiteLayout title="About Ōra Medical Clinic" description="A physician-founded virtual weight loss clinic built around real medicine, transparent pricing, and lasting patient relationships.">
    <Section variant="cream" className="pt-16 md:pt-24">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Eyebrow>About Ōra</Eyebrow>
          <h1 className="mt-5 text-balance">Modern medicine, with a doctor who knows your name.</h1>
          <p className="mt-6 text-lg text-foreground/75 max-w-xl">
            Ōra Medical Clinic was founded on a simple belief: weight loss is a medical condition, and it deserves real medical care. Not a quiz, not a chatbot, not a coach — a physician.
          </p>
        </div>
        <div className="lg:col-span-5">
          <img src={doctorImg} alt="Ōra physician" width={1024} height={1024} loading="lazy" className="rounded-[2rem] w-full aspect-square object-cover shadow-soft" />
        </div>
      </div>
    </Section>

    <Section>
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Eyebrow>Our philosophy</Eyebrow>
          <h2 className="mt-4 text-balance">Personalized care over packaged programs.</h2>
        </div>
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
          {[
            { t: "Physician-led", b: "Every prescription, dose change, and follow-up is handled by a licensed physician — not a sales rep or AI script." },
            { t: "Evidence-based", b: "We prescribe what the science supports, and we explain the trade-offs clearly so you can make informed decisions." },
            { t: "Transparent", b: "One predictable monthly cost. No insurance dance. No surprise add-ons. Cancel any time." },
            { t: "Long-term partner", b: "Weight management is a marathon. We're here for the years, not the launch." },
          ].map((v) => (
            <div key={v.t}>
              <h3 className="font-serif text-xl">{v.t}</h3>
              <p className="mt-2 text-sm text-foreground/70">{v.b}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <Section variant="sage">
      <div className="max-w-3xl">
        <Eyebrow className="text-cream">Where we serve</Eyebrow>
        <h2 className="mt-4 text-cream">California & Washington — virtually, statewide.</h2>
        <p className="mt-5 text-cream/85 text-lg">
          All consultations happen by secure video on JaneApp. Medications ship to any address in our licensed states.
        </p>
      </div>
    </Section>

    <CTA />
  </SiteLayout>
);

export default About;
