import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "./Section";
import { SITE } from "@/lib/site";

type Stat = {
  figure: string;
  title: string;
  body: string;
};

const stats: Stat[] = [
  {
    figure: "15%+",
    title: "Significant Weight Loss",
    body: "Clinical trials show GLP-1 therapies help patients achieve an average weight loss exceeding 15% of their body weight.",
  },
  {
    figure: "20%+",
    title: "Enhanced Results",
    body: "Dual-action GIP/GLP-1 therapies have demonstrated even greater average weight loss, often exceeding 20%, in clinical studies.",
  },
  {
    figure: ">25%",
    title: "Major Milestones Achieved",
    body: "In some studies, a significant portion of patients utilizing specific doses achieved weight loss greater than 25%.",
  },
  {
    figure: "20%",
    title: "Reduced Cardiovascular Risk",
    body: "In a major clinical trial (SELECT), Semaglutide reduced the risk of major adverse cardiovascular events (like heart attack or stroke) by 20% in eligible patients with overweight/obesity and existing heart disease.",
  },
];

export const OutcomeStats = () => (
  <Section>
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      <div className="lg:col-span-5 lg:sticky lg:top-28">
        <Eyebrow>Key metrics of success</Eyebrow>
        <h2 className="mt-4 text-balance">
          Significant outcomes: <span className="text-accent">by the numbers.</span>
        </h2>
        <p className="mt-6 text-foreground/70 max-w-md">
          Data from major studies highlights the success rates and additional health benefits associated with these advanced medical weight loss options.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link to="/contact">Contact us today</Link>
          </Button>
        </div>
      </div>

      <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
        {stats.map((s) => (
          <div
            key={s.title}
            className="rounded-3xl bg-sage/15 border border-sage/20 p-7 md:p-8 flex flex-col min-h-[280px] md:min-h-[320px]"
          >
            <div className="font-serif text-5xl md:text-6xl text-foreground tracking-tight">
              {s.figure}
            </div>
            <div className="mt-auto pt-8">
              <h3 className="font-serif text-lg text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <p className="mt-10 text-xs text-muted-foreground max-w-3xl">
      Sources: published GLP-1 clinical trial data including STEP, SURMOUNT, and SELECT. Individual results may vary; talk to your physician about whether these therapies are right for you. {SITE.name} does not guarantee specific outcomes.
    </p>
  </Section>
);
