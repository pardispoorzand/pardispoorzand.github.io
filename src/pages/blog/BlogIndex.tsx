import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { POSTS } from "@/data/blog";

const BlogIndex = () => (
  <SiteLayout
    title="Education & Resources | Ōra Medical Clinic"
    description="Physician-written articles on GLP-1 medications, weight loss science, nutrition, and managing side effects."
  >
    <Section variant="cream" className="pt-16 md:pt-24 pb-16">
      <div className="max-w-3xl">
        <Eyebrow>Education</Eyebrow>
        <h1 className="mt-5 text-balance">Real answers, written by physicians.</h1>
        <p className="mt-6 text-lg text-foreground/75">A growing library covering the medications we prescribe, the science behind them, and the everyday questions our patients ask most.</p>
      </div>
    </Section>

    <Section className="pt-0 md:pt-0">
      {POSTS[0] && (
        <Link to={`/blog/${POSTS[0].slug}`} className="group block rounded-3xl bg-gradient-hero p-10 md:p-16 mb-12 hover:shadow-soft transition-all">
          <Eyebrow>Featured · {POSTS[0].category}</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-balance group-hover:text-accent transition-colors">{POSTS[0].title}</h2>
          <p className="mt-5 max-w-2xl text-foreground/75">{POSTS[0].excerpt}</p>
          <span className="mt-6 inline-flex items-center gap-1 text-accent font-medium group-hover:gap-2 transition-all">Read article <ArrowRight className="h-4 w-4" /></span>
        </Link>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {POSTS.slice(1).map((p) => (
          <Link key={p.slug} to={`/blog/${p.slug}`} className="group">
            <div className="aspect-[16/9] rounded-2xl bg-muted mb-5 overflow-hidden flex items-end p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-foreground/70">{p.category} · {p.readMin} min</span>
            </div>
            <h3 className="font-serif text-2xl group-hover:text-accent transition-colors text-balance">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </Section>

    <CTA />
  </SiteLayout>
);

export default BlogIndex;
