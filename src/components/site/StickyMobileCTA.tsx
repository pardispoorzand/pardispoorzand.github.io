import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export const StickyMobileCTA = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="bg-background/95 backdrop-blur border-t border-border px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-soft">
        <Button asChild className="w-full" size="lg">
          <a href={SITE.bookingUrl} target="_blank" rel="noreferrer">Book your consult <ArrowRight /></a>
        </Button>
      </div>
    </div>
  );
};
