import { motion } from "framer-motion";
import { FoxSvg } from "@/components/FoxSvg";
import { useParallax } from "@/hooks/useParallax";

export function HeroSection() {
  const { ref: parallaxRef, offset } = useParallax(0.15);

  return (
    <section className="relative min-h-[100dvh] flex items-center bg-cream overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #FAF8F5 0%, #F4F0E8 70%, rgba(139,154,132,0.08) 100%)",
        }}
      />

      {/* Fox illustration with parallax */}
      <div
        ref={parallaxRef}
        className="absolute right-4 sm:right-8 lg:right-16 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none"
        style={{ transform: `translateY(calc(-50% + ${offset}px))` }}
      >
        <FoxSvg
          className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[280px] lg:h-[280px]"
          color="#8B9A84"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-[60px] w-full">
        <div className="max-w-[600px]">
          <motion.h1
            className="text-[40px] sm:text-[52px] lg:text-[64px] font-bold text-ink leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Бижутерия,
            <br />
            которая слышит тебя
          </motion.h1>

          <motion.p
            className="mt-5 sm:mt-6 text-base sm:text-lg text-dim leading-relaxed max-w-[520px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Натуральные камни. Современная фурнитура. Два пути к твоему
            украшению.
          </motion.p>

          <motion.div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <a
              href="#two-paths"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-fox text-white font-semibold text-[15px] rounded-full hover:bg-fox-hover hover:-translate-y-0.5 transition-all duration-300 will-change-transform"
            >
              Подобрать по вайбу
            </a>
            <a
              href="#two-paths"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-fox text-fox font-semibold text-[15px] rounded-full hover:bg-fox hover:text-white hover:-translate-y-0.5 transition-all duration-300 will-change-transform"
            >
              Подобрать по образу
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative guide lines */}
      <div className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-px bg-fox/[0.08] pointer-events-none" />
      <div className="hidden lg:block absolute right-[60px] top-0 bottom-0 w-px bg-fox/[0.08] pointer-events-none" />
    </section>
  );
}
