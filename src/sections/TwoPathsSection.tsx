import { motion } from "framer-motion";
import { TriangleDivider } from "@/components/TriangleDivider";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Waves, Shirt } from "lucide-react";

const paths = [
  {
    icon: Waves,
    title: "По вайбу",
    description:
      "Расскажи, как ты себя чувствуешь. Я подберу камни, которые резонируют с твоим ритмом: спокойствие, решимость, лёгкость или фокус.",
    button: "Написать по вайбу",
    href: "https://t.me/lisenok_besenok",
    iconColor: "text-fox",
    borderColor: "border-fox/15",
    hoverBorder: "hover:border-fox/30",
    hoverShadow: "hover:shadow-[0_8px_32px_rgba(233,168,124,0.12)]",
    buttonBg: "bg-fox hover:bg-fox-hover",
  },
  {
    icon: Shirt,
    title: "По образу",
    description:
      "Покажи, что носишь. Добавлю акцент, который оживит гардероб или раскроет его заново. Под цвет, крой или настроение комплекта.",
    button: "Написать по образу",
    href: "https://wa.me/79990000000",
    iconColor: "text-sage",
    borderColor: "border-sage/15",
    hoverBorder: "hover:border-sage/30",
    hoverShadow: "hover:shadow-[0_8px_32px_rgba(139,154,132,0.12)]",
    buttonBg: "bg-sage hover:bg-sage-hover",
  },
];

export function TwoPathsSection() {
  return (
    <SectionWrapper id="two-paths">
      <TriangleDivider />

      <ScrollReveal className="text-center mb-12">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-ink">
          Выбери свой путь
        </h2>
        <p className="mt-4 text-dim max-w-[480px] mx-auto leading-relaxed">
          Каждый способ ведёт к украшению, которое подходит именно тебе
        </p>
      </ScrollReveal>

      <StaggerContainer
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[960px] mx-auto"
        staggerDelay={0.2}
      >
        {paths.map((path) => (
          <StaggerItem key={path.title}>
            <motion.div
              className={`bg-white rounded-2xl p-8 sm:p-10 border ${path.borderColor} ${path.hoverBorder} ${path.hoverShadow} transition-all duration-400`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <path.icon
                className={`w-12 h-12 ${path.iconColor} mb-6`}
                strokeWidth={1.5}
              />
              <h3 className="text-[22px] font-semibold text-ink mb-4">
                {path.title}
              </h3>
              <p className="text-dim leading-relaxed mb-8">
                {path.description}
              </p>
              <a
                href={path.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-7 py-3 ${path.buttonBg} text-white font-semibold text-[15px] rounded-full transition-all duration-300 hover:-translate-y-0.5 will-change-transform`}
              >
                {path.button}
              </a>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
