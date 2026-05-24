import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Section = ({
  children,
  className,
  variant = "default",
  id,
}: { children: ReactNode; className?: string; variant?: "default" | "cream" | "sage" | "ink"; id?: string }) => {
  const v = {
    default: "bg-background",
    cream: "bg-cream",
    sage: "bg-sage text-sage-foreground",
    ink: "bg-primary text-primary-foreground",
  }[variant];
  return (
    <section id={id} className={cn("py-20 md:py-28", v, className)}>
      <div className="container-wide">{children}</div>
    </section>
  );
};

export const Eyebrow = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span className={cn("inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent", className)}>
    {children}
  </span>
);
