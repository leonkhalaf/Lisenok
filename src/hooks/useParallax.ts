import { useEffect, useRef, useState } from "react";

export function useParallax(ratio = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Disable parallax on touch devices
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const scrolled = window.innerHeight - rect.top;
            if (scrolled > 0 && rect.bottom > 0) {
              setOffset(scrolled * ratio);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ratio]);

  return { ref, offset };
}
