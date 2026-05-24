import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import { SITE } from "@/lib/site";
import { Mail, Calendar, MapPin } from "lucide-react";

const Contact = () => (
  <SiteLayout title="Contact Ōra Medical Clinic" description="Get in touch with the Ōra team or book a virtual consultation with a licensed physician.">
    <Section variant="cream" className="pt-16 md:pt-24 pb-16">
      <div className="max-w-3xl">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-5 text-balance">We'd love to hear from you.</h1>
        <p className="mt-6 text-lg text-foreground/75">For new patients, the fastest way to start is by booking a consultation directly. For everything else, we're an email away.</p>
      </div>
    </Section>

    <Section>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Calendar, title: "Book a consult", body: "Schedule a virtual visit on JaneApp.", cta: "Book now", href: SITE.bookingUrl, ext: true },
          { icon: Mail, title: "Email us", body: SITE.email, cta: "Send email", href: `mailto:${SITE.email}`, ext: false },
          { icon: MapPin, title: "Service area", body: `Virtual care across ${SITE.states}.`, cta: "About Ōra", href: "/about", ext: false },
        ].map((c) => (
          <div key={c.title} className="rounded-3xl bg-card border border-border p-8 shadow-card">
            <div className="w-12 h-12 rounded-2xl bg-sage/20 text-sage inline-flex items-center justify-center">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-serif text-2xl">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            <Button asChild variant="outline" size="sm" className="mt-6">
              <a href={c.href} target={c.ext ? "_blank" : undefined} rel={c.ext ? "noreferrer" : undefined}>{c.cta}</a>
            </Button>
          </div>
        ))}
      </div>
    </Section>
  </SiteLayout>
);

export default Contact;
