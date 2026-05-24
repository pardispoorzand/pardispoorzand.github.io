import { Section, Eyebrow } from "./Section";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star } from "lucide-react";

export const Testimonials = () => (
  <Section variant="default">
    <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
      <div className="md:col-span-7">
        <Eyebrow>Patient stories</Eyebrow>
        <h2 className="mt-4 text-balance">
          Real patients. <span className="text-accent">Real results.</span>
        </h2>
      </div>
      <p className="md:col-span-5 text-foreground/70">
        Names changed for privacy. Outcomes reflect individual experience and aren't a guarantee of similar results.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {TESTIMONIALS.map((t) => (
        <figure key={t.name} className="rounded-3xl bg-card border border-border shadow-card p-7 flex flex-col">
          <div className="flex gap-0.5 text-accent" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
          <blockquote className="mt-5 text-foreground/85 leading-relaxed font-serif text-lg">
            "{t.quote}"
          </blockquote>
          <figcaption className="mt-6 pt-6 border-t border-border flex items-center gap-4">
            <img src={t.image} alt="" width={64} height={64} loading="lazy" className="w-14 h-14 rounded-full object-cover" />
            <div className="flex-1">
              <div className="font-medium text-foreground">{t.name}, {t.age}</div>
              <div className="text-xs text-muted-foreground">{t.state} · on {t.treatment}</div>
            </div>
            <div className="text-right">
              <div className="font-serif text-2xl text-accent leading-none">{t.result}</div>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{t.duration}</div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  </Section>
);
