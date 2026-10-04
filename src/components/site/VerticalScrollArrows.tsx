import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export function VerticalScrollArrows() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isDesktop = window.innerWidth >= 768;
      if (isDesktop) {
        // Desktop uses horizontal container on index, or normal page
        const container = document.querySelector(".horizontal-scroll-container");
        if (container) {
          setShowUp(container.scrollLeft > 100);
          setShowDown(container.scrollLeft < container.scrollWidth - container.clientWidth - 100);
          return;
        }
      }

      // Vertical page scroll
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setShowUp(scrollY > 100);
      setShowDown(scrollY < maxScroll - 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const container = document.querySelector(".horizontal-scroll-container");
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
    }

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScrollStep = (direction: "up" | "down") => {
    const isDesktop = window.innerWidth >= 768;
    const container = document.querySelector(".horizontal-scroll-container");

    if (isDesktop && container) {
      const delta = direction === "up" ? -600 : 600;
      window.dispatchEvent(new CustomEvent("scrollytelling-scroll-delta", { detail: { delta } }));
      return;
    }

    // Vertical page scrolling
    const delta = direction === "up" ? -window.innerHeight * 0.75 : window.innerHeight * 0.75;
    window.scrollBy({ top: delta, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-auto select-none">
      <button
        onClick={() => handleScrollStep("up")}
        className={`w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#0B3D91]/25 text-[#0B3D91] shadow-xl flex items-center justify-center hover:bg-[#0B3D91] hover:text-white transition-all duration-300 active:scale-95 ${
          showUp ? "opacity-100 scale-100" : "opacity-40 scale-95"
        }`}
        title="Scroll Up / Previous Section"
        aria-label="Scroll Up / Previous Section"
      >
        <ChevronUp className="w-5 h-5 stroke-[2.5]" />
      </button>

      <button
        onClick={() => handleScrollStep("down")}
        className={`w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#0B3D91]/25 text-[#0B3D91] shadow-xl flex items-center justify-center hover:bg-[#0B3D91] hover:text-white transition-all duration-300 active:scale-95 ${
          showDown ? "opacity-100 scale-100" : "opacity-40 scale-95"
        }`}
        title="Scroll Down / Next Section"
        aria-label="Scroll Down / Next Section"
      >
        <ChevronDown className="w-5 h-5 stroke-[2.5]" />
      </button>
    </div>
  );
}
