import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { FAQ_GROUPS } from "@/data/faqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => (
  <SiteLayout
    title="FAQ — Ōra Medical Clinic | Eligibility, safety, pricing, shipping"
    description="Answers to the most common questions about Ōra's physician-guided weight loss programs — eligibility, safety, pricing, and shipping."
  >
    <Section variant="default">
      <div className="max-w-3xl">
        <Eyebrow>Frequently asked</Eyebrow>
        <h1 className="mt-4 text-balance">
          Everything you need to know <span className="text-accent">before you start.</span>
        </h1>
      </div>

      <div className="mt-14 grid lg:grid-cols-12 gap-12">
        {FAQ_GROUPS.map((group) => (
          <div key={group.title} className="lg:col-span-12">
            <h2 className="font-serif text-3xl text-foreground mb-4">{group.title}</h2>
            <Accordion type="single" collapsible className="border-t border-border">
              {group.items.map((item, i) => (
                <AccordionItem key={i} value={`${group.title}-${i}`} className="border-b border-border">
                  <AccordionTrigger className="text-left text-base font-medium py-5">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground/75 pb-5">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </Section>

    <CTA />
  </SiteLayout>
);

export default FAQ;
