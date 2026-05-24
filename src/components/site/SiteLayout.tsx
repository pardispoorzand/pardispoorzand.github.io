import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyMobileCTA } from "./StickyMobileCTA";

export const SiteLayout = ({ children, title, description }: { children: ReactNode; title?: string; description?: string }) => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let m = document.querySelector('meta[name="description"]');
      if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); }
      m.setAttribute('content', description);
    }
  }, [title, description]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">{children}</main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};
