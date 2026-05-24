import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, Eyebrow } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { getPost, POSTS } from "@/data/blog";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const p = getPost(slug);
  if (!p) return <Navigate to="/blog" replace />;
  const others = POSTS.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <SiteLayout title={`${p.title} | Ōra`} description={p.excerpt}>
      <Section variant="cream" className="pt-16 md:pt-24 pb-12">
        <div className="max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <Eyebrow>{p.category} · {p.readMin} min read</Eyebrow>
          <h1 className="mt-5 text-balance">{p.title}</h1>
          <p className="mt-6 text-lg text-foreground/75">{p.excerpt}</p>
        </div>
      </Section>

      <Section className="pt-0 md:pt-0">
        <article className="max-w-3xl mx-auto prose-article">
          {p.body.map((b, i) => (
            <div key={i} className="mb-8">
              {b.heading && <h2 className="font-serif text-3xl mb-4 mt-12">{b.heading}</h2>}
              <p className="text-lg leading-relaxed text-foreground/80">{b.paragraph}</p>
            </div>
          ))}
        </article>
      </Section>

      <Section variant="cream">
        <Eyebrow>Keep reading</Eyebrow>
        <h2 className="mt-4 mb-10">More from Ōra.</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {others.map((o) => (
            <Link key={o.slug} to={`/blog/${o.slug}`} className="group rounded-2xl bg-card border border-border p-6 hover:shadow-soft transition-all">
              <Eyebrow className="text-sage">{o.category}</Eyebrow>
              <h3 className="mt-3 font-serif text-xl group-hover:text-accent transition-colors">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CTA />
    </SiteLayout>
  );
};

export default BlogPost;
