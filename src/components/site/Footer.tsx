import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/lib/site";

export const Footer = () => (
  <footer className="border-t border-border bg-muted/40 mt-24">
    <div className="container-wide py-16 grid gap-12 md:grid-cols-4">
      <div className="md:col-span-1">
        <Logo />
        <p className="mt-4 text-sm text-muted-foreground max-w-xs">
          Physician-guided medical weight loss, delivered virtually across {SITE.states}.
        </p>
      </div>
      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground mb-4">Treatments</h4>
        <ul className="space-y-2.5 text-sm">
          {NAV.treatments.map((t) => (
            <li key={t.href}>
              <Link to={t.href} className="text-muted-foreground hover:text-foreground transition-colors">{t.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground mb-4">Clinic</h4>
        <ul className="space-y-2.5 text-sm">
          <li><Link to="/how-it-works" className="text-muted-foreground hover:text-foreground">How it works</Link></li>
          <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
          <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
          <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About Ōra</Link></li>
          <li><Link to="/blog" className="text-muted-foreground hover:text-foreground">Education</Link></li>
          <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground mb-4">Get started</h4>
        <ul className="space-y-2.5 text-sm">
          <li><a href={SITE.bookingUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">Book a consult</a></li>
          <li><a href={SITE.loginUrl} className="text-muted-foreground hover:text-foreground">Patient login</a></li>
          <li><a href={`mailto:${SITE.email}`} className="text-muted-foreground hover:text-foreground">{SITE.email}</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p className="max-w-xl text-center md:text-right">
          Information on this site is for educational purposes and does not constitute medical advice. Eligibility for treatment is determined during consultation.
        </p>
      </div>
    </div>
  </footer>
);
