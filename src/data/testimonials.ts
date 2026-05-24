import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

export type Testimonial = {
  name: string;
  age: number;
  state: "CA" | "WA";
  treatment: string;
  result: string;
  duration: string;
  quote: string;
  image: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah K.",
    age: 47,
    state: "CA",
    treatment: "Tirzepatide",
    result: "−42 lbs",
    duration: "8 months",
    quote: "For the first time in 20 years, food noise is just… gone. My doctor at Ōra actually listens — every visit feels like a real medical appointment, not a refill.",
    image: t1,
  },
  {
    name: "Michael R.",
    age: 54,
    state: "WA",
    treatment: "Semaglutide",
    result: "−31 lbs",
    duration: "6 months",
    quote: "I'd tried everything. What changed wasn't my willpower — it was finally having a physician treat this like the medical condition it is.",
    image: t2,
  },
  {
    name: "Daniela M.",
    age: 36,
    state: "CA",
    treatment: "Semaglutide",
    result: "−24 lbs",
    duration: "5 months",
    quote: "Postpartum weight wouldn't budge. Ōra built a plan around my body, not a template. I feel like myself again.",
    image: t3,
  },
];
