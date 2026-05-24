import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/lib/site";
import { TREATMENTS } from "@/data/treatments";
import { cn } from "@/lib/utils";
import cardSema from "@/assets/card-semaglutide.jpg";
import cardTirz from "@/assets/card-tirzepatide.jpg";
import cardMet from "@/assets/card-metformin.jpg";
import cardNad from "@/assets/card-nad.jpg";
import cardSerm from "@/assets/card-sermorelin.jpg";
import cardB12 from "@/assets/card-b12.jpg";

const TREATMENT_IMAGES: Record<string, string> = {
  semaglutide: cardSema,
  tirzepatide: cardTirz,
  metformin: cardMet,
  nad: cardNad,
  sermorelin: cardSerm,
  b12: cardB12,
};

const GROUPS = [
  { label: "Weight Loss", focus: "Weight Loss" as const },
  { label: "Longevity & Performance", focus: ["Longevity", "Performance", "Energy"] as const },
];

const FEATURED = TREATMENTS.find((t) => t.slug === "tirzepatide")!;

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      onMouseLeave={() => setHovered(null)}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled || hovered ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setHovered("treatments")}
          >
            <button
              className={cn(
                "px-4 py-2 text-sm font-medium inline-flex items-center gap-1 transition-colors",
                hovered === "treatments" ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              )}
            >
              Treatments
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform",
                  hovered === "treatments" && "rotate-180"
                )}
              />
            </button>
          </div>

          {NAV.primary.slice(1).map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onMouseEnter={() => setHovered(null)}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={SITE.loginUrl} className="text-sm font-medium text-foreground/70 hover:text-foreground">
            Patient Login
          </a>
          <Button asChild variant="default" size="default">
            <a href={SITE.bookingUrl} target="_blank" rel="noreferrer">Book consult</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mega menu */}
      {hovered === "treatments" && (
        <div className="absolute inset-x-0 top-full hidden lg:block border-t border-border bg-background shadow-soft animate-fade-in">
          <div className="container-wide py-10">
            <div className="grid grid-cols-12 gap-8">
              {/* Left: Featured card */}
              <div className="col-span-4">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Most popular
                </p>
                <Link
                  to={`/treatments/${FEATURED.slug}`}
                  onClick={() => setHovered(null)}
                  className="group block overflow-hidden rounded-3xl bg-muted relative aspect-[4/5]"
                >
                  <img
                    src={TREATMENT_IMAGES[FEATURED.slug]}
                    alt={FEATURED.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-xs uppercase tracking-[0.18em] opacity-80">For weight loss</p>
                    <h3 className="mt-1 text-2xl font-display">{FEATURED.name}</h3>
                    <p className="mt-1 text-sm opacity-90">{FEATURED.brandNames}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </div>

              {/* Right: grouped lists */}
              <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-8">
                {GROUPS.map((group) => {
                  const items = TREATMENTS.filter((t) =>
                    Array.isArray(group.focus)
                      ? (group.focus as readonly string[]).includes(t.focus ?? "")
                      : t.focus === group.focus
                  );
                  return (
                    <div key={group.label}>
                      <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {group.label}
                      </p>
                      <ul className="space-y-2">
                        {items.map((t) => (
                          <li key={t.slug}>
                            <Link
                              to={`/treatments/${t.slug}`}
                              onClick={() => setHovered(null)}
                              className="group flex items-center gap-3 rounded-2xl p-2 transition-colors hover:bg-muted"
                            >
                              <div className="h-12 w-12 flex-none overflow-hidden rounded-xl bg-muted">
                                <img
                                  src={TREATMENT_IMAGES[t.slug]}
                                  alt=""
                                  className="h-full w-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-sm font-medium text-foreground">{t.name}</div>
                                <div className="truncate text-xs text-muted-foreground">
                                  {t.brandNames ?? t.category}
                                </div>
                              </div>
                              <ArrowRight className="h-4 w-4 flex-none text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}

                <div className="col-span-2 flex items-center justify-between rounded-2xl bg-muted/60 px-5 py-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">Not sure where to start?</p>
                    <p className="text-xs text-muted-foreground">Compare every treatment side-by-side.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      to="/treatments"
                      onClick={() => setHovered(null)}
                      className="text-sm font-medium text-foreground hover:underline"
                    >
                      All treatments
                    </Link>
                    <Button asChild size="sm">
                      <a href={SITE.bookingUrl} target="_blank" rel="noreferrer">Book consult</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-wide py-4 flex flex-col gap-1">
            <p className="px-1 pt-2 pb-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Treatments
            </p>
            {TREATMENTS.map((t) => (
              <Link
                key={t.slug}
                to={`/treatments/${t.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-2"
              >
                <div className="h-10 w-10 overflow-hidden rounded-lg bg-muted flex-none">
                  <img src={TREATMENT_IMAGES[t.slug]} alt="" className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="text-base font-medium text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.brandNames ?? t.category}</div>
                </div>
              </Link>
            ))}
            <Link
              to="/treatments"
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-foreground/80"
            >
              All treatments →
            </Link>
            <div className="h-px bg-border my-2" />
            {NAV.primary.slice(1).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="default" className="mt-3">
              <a href={SITE.bookingUrl} target="_blank" rel="noreferrer">Book consult</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
