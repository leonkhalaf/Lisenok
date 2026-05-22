import { motion } from "framer-motion";
import { TriangleDivider } from "@/components/TriangleDivider";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <TriangleDivider color="#8B9A84" />

      <ScrollReveal className="text-center">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-ink">
          Не магия. Просто точность
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="mt-8 max-w-[680px] mx-auto text-center">
        <p className="text-dim leading-[1.8] text-[17px]">
          Камни не меняют судьбу. Они поддерживают твой текущий тон. Я подбираю
          их по цвету, форме и смыслу, сочетаю с гипоаллергенной фурнитурой и
          слежу за трендами. Итог — вещь, которую не хочется снимать, и которая
          не заставляет тебя подстраиваться.
        </p>
      </ScrollReveal>

      {/* Accent quote */}
      <ScrollReveal delay={0.35} className="mt-14 lg:mt-16 text-center relative">
        {/* Decorative side lines (desktop only) */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-full max-w-[720px]">
          <div className="absolute left-10 top-1/2 -translate-y-1/2 w-px h-20 bg-fox/20" />
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-px h-20 bg-fox/20" />
        </div>

        <div className="relative max-w-[640px] mx-auto px-8">
          {/* Opening quote */}
          <motion.span
            className="block font-serif text-[72px] text-fox/40 leading-[0.5] -mb-4 select-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            &laquo;
          </motion.span>

          <motion.blockquote
            className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-ink leading-[1.35]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Украшение должно отвечать на вопрос &laquo;это я?&raquo;, а не
            &laquo;как это носить?&raquo;
          </motion.blockquote>

          {/* Closing quote */}
          <motion.span
            className="block font-serif text-[72px] text-fox/40 leading-[0.3] mt-2 select-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            &raquo;
          </motion.span>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
