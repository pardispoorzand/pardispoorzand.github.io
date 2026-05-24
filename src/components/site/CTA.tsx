import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./Section";
import { SITE } from "@/lib/site";

export const CTA = () => (
  <section className="py-20 md:py-28">
    <div className="container-wide">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-sage text-sage-foreground p-10 md:p-20">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative max-w-2xl">
          <Eyebrow className="text-cream">Ready when you are</Eyebrow>
          <h2 className="mt-4 text-balance text-cream">Start your weight loss journey today.</h2>
          <p className="mt-5 text-lg text-cream/85 max-w-xl">
            Book a virtual consultation with a licensed physician. No commitment, no pressure — just a real conversation about your goals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href={SITE.bookingUrl} target="_blank" rel="noreferrer">Book consult <ArrowRight /></a>
            </Button>
            <Button asChild variant="cream" size="lg">
              <a href="/how-it-works">See how it works</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
