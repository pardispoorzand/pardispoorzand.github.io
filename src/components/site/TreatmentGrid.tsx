import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import cardSema from "@/assets/card-semaglutide.jpg";
import cardTirz from "@/assets/card-tirzepatide.jpg";
import cardNad from "@/assets/card-nad.jpg";
import cardSerm from "@/assets/card-sermorelin.jpg";
import cardB12 from "@/assets/card-b12.jpg";
import cardMet from "@/assets/card-metformin.jpg";

type Card = {
  href: string;
  eyebrow: string;
  title: string;
  sub: string;
  image: string;
  /** Tailwind background class for the color block */
  tone: string;
  /** Text color on tone */
  textTone: string;
};

const hero: Card[] = [
  {
    href: "/treatments/semaglutide",
    eyebrow: "for weight loss",
    title: "Semaglutide",
    sub: "Wegovy® / Ozempic®",
    image: cardSema,
    tone: "bg-[hsl(142_45%_28%)]",
    textTone: "text-white",
  },
  {
    href: "/treatments/tirzepatide",
    eyebrow: "for weight loss",
    title: "Tirzepatide",
    sub: "Mounjaro® / Zepbound®",
    image: cardTirz,
    tone: "bg-[hsl(18_72%_56%)]",
    textTone: "text-white",
  },
  {
    href: "/treatments/nad",
    eyebrow: "for energy & longevity",
    title: "NAD+",
    sub: "Compounded injection",
    image: cardNad,
    tone: "bg-[hsl(212_72%_52%)]",
    textTone: "text-white",
  },
];

const small: Card[] = [
  {
    href: "/treatments/sermorelin",
    eyebrow: "for recovery & sleep",
    title: "Sermorelin",
    sub: "Peptide injection",
    image: cardSerm,
    tone: "bg-card",
    textTone: "text-foreground",
  },
  {
    href: "/treatments/b12",
    eyebrow: "for energy & mood",
    title: "B12 Injection",
    sub: "Methylcobalamin",
    image: cardB12,
    tone: "bg-card",
    textTone: "text-foreground",
  },
  {
    href: "/treatments/metformin",
    eyebrow: "for metabolic health",
    title: "Metformin",
    sub: "Daily oral tablet",
    image: cardMet,
    tone: "bg-card",
    textTone: "text-foreground",
  },
];

export const TreatmentGrid = () => (
  <div className="space-y-5">
    <div className="grid md:grid-cols-3 gap-5">
      {hero.map((c) => (
        <Link
          key={c.href}
          to={c.href}
          className={`group relative overflow-hidden rounded-[2rem] ${c.tone} ${c.textTone} aspect-[4/5] flex flex-col justify-between p-7 transition-transform duration-500 hover:-translate-y-1`}
        >
          <div className="relative z-10">
            <h3 className={`font-serif text-3xl md:text-4xl ${c.textTone}`}>{c.title}</h3>
            <p className="mt-1 text-sm opacity-90">{c.eyebrow}</p>
          </div>
          <img
            src={c.image}
            alt={`${c.title} — ${c.sub}`}
            loading="lazy"
            width={1024}
            height={1024}
            className="absolute inset-0 w-full h-full object-cover opacity-95 mix-blend-normal transition-transform duration-700 group-hover:scale-105"
          />
          <div className="relative z-10 inline-flex items-center gap-2 self-start rounded-full bg-white/95 text-foreground text-xs font-semibold uppercase tracking-widest px-4 py-2 w-max">
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </Link>
      ))}
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {small.map((c) => (
        <Link
          key={c.href}
          to={c.href}
          className="group relative flex items-center gap-4 rounded-[2rem] bg-card border border-border p-5 pr-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
        >
          <div className="shrink-0 w-28 h-28 rounded-2xl overflow-hidden">
            <img
              src={c.image}
              alt={`${c.title} — ${c.sub}`}
              loading="lazy"
              width={448}
              height={448}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-serif text-2xl text-foreground">{c.title}</h4>
            <p className="mt-1 text-xs text-muted-foreground">{c.eyebrow}</p>
          </div>
          <div className="shrink-0 w-10 h-10 rounded-full border border-border inline-flex items-center justify-center text-foreground/70 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all">
            <ArrowRight className="h-4 w-4" />
          </div>
        </Link>
      ))}
    </div>
  </div>
);
