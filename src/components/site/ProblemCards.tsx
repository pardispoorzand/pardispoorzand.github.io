import { Section, Eyebrow } from "./Section";
import foodNoise from "@/assets/problem-foodnoise.jpg";
import metabolism from "@/assets/problem-metabolism.jpg";
import cycling from "@/assets/problem-cycling.jpg";

const problems = [
  {
    image: foodNoise,
    title: "The hunger that never shuts off.",
    body: "You eat, but the hunger doesn't stop. Food runs through your mind all day. It's called food noise — and it's biological, not willpower.",
    bullets: ["You just ate and you're already thinking about the next meal", "The mental load of food decisions is exhausting"],
  },
  {
    image: metabolism,
    title: "Your metabolism turned on you.",
    body: "Pregnancy. Perimenopause. Age. Hormones shift how your body stores fat. What worked at 25 doesn't work the same way now.",
    bullets: ["Postpartum weight that never came off", "Slower metabolism, same habits"],
  },
  {
    image: cycling,
    title: "Lose 20. Gain 25 back. Every diet makes it worse.",
    body: "It's called weight cycling. Each time you lose and regain, your body adapts — holding on to fat tighter and making the next attempt harder.",
    bullets: ["You've lost and regained the same 20–30 lbs more than once", "Each restart is harder than the last"],
  },
];

export const ProblemCards = () => (
  <Section variant="default">
    <div className="max-w-3xl mb-16">
      <Eyebrow>Why this happens</Eyebrow>
      <h2 className="mt-4 text-balance">
        Weight loss isn't just <span className="text-accent">about eating less.</span>
      </h2>
      <p className="mt-5 text-foreground/70 text-lg">
        It's about understanding why your body holds on to weight — food noise, hormonal shifts, weight resistance from years of dieting. It's common, and it's medical.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {problems.map((p) => (
        <article key={p.title} className="rounded-3xl bg-card border border-border overflow-hidden shadow-card flex flex-col">
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img src={p.image} alt={p.title} width={1024} height={768} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="p-7 flex-1 flex flex-col">
            <h3 className="font-serif text-2xl text-foreground text-balance">{p.title}</h3>
            <p className="mt-3 text-sm text-foreground/70">{p.body}</p>
            <ul className="mt-5 pt-5 border-t border-border space-y-2 text-sm text-foreground/75">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>

    <div className="mt-14 max-w-2xl">
      <h3 className="font-serif text-3xl md:text-4xl text-balance">
        This was never about discipline.
      </h3>
      <p className="mt-4 text-foreground/70">
        Food noise. Hormonal confusion. Weight cycling. These are biological — not personal flaws. Modern medicine can now treat them at the source.
      </p>
    </div>
  </Section>
);
