import { motion } from "framer-motion";
import { TriangleDivider } from "@/components/TriangleDivider";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { MessageCircle, Search, CheckCircle, Package } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: "Ты пишешь",
    description: "Вайб, характер, гороскоп или фото одежды — в Telegram или WhatsApp",
  },
  {
    number: 2,
    icon: Search,
    title: "Я анализирую",
    description: "Подбираю камни по тону и рисую эскиз специально для тебя",
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "Согласуем",
    description: 'В чате присылаю визуализации, ты говоришь «да» или «поправим»',
  },
  {
    number: 4,
    icon: Package,
    title: "Создаю и отправляю",
    description: "Упаковываю с карточкой камней и высылаю удобным способом",
  },
];

export function ProcessSection() {
  return (
    <SectionWrapper id="process" bgColor="beige">
      <TriangleDivider color="#8B9A84" />

      <ScrollReveal className="text-center mb-12 lg:mb-16">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-ink">
          Как это работает
        </h2>
        <p className="mt-4 text-dim italic max-w-[480px] mx-auto leading-relaxed font-serif text-lg">
          Всё происходит в тёплом личном общении — без форм и роботов
        </p>
      </ScrollReveal>

      {/* Desktop Timeline (horizontal) */}
      <div className="hidden lg:block max-w-[1000px] mx-auto relative">
        {/* Connector line */}
        <div className="absolute top-6 left-12 right-12 h-0.5 bg-fox/25" />

        <StaggerContainer className="flex justify-between relative" staggerDelay={0.25}>
          {steps.map((step) => (
            <StaggerItem key={step.number} className="flex-1 text-center relative z-10">
              <motion.div
                className="w-12 h-12 rounded-full bg-fox text-white font-semibold text-xl leading-[48px] mx-auto mb-5"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                {step.number}
              </motion.div>
              <h3 className="font-semibold text-base text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-dim text-sm leading-relaxed max-w-[200px] mx-auto">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Mobile Timeline (vertical) */}
      <div className="lg:hidden max-w-[400px] mx-auto relative">
        {/* Vertical connector line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-fox/25" />

        <StaggerContainer className="relative" staggerDelay={0.2}>
          {steps.map((step) => (
            <StaggerItem key={step.number} className="flex items-start gap-5 mb-10 last:mb-0">
              <motion.div
                className="w-12 h-12 rounded-full bg-fox text-white font-semibold text-xl leading-[48px] text-center flex-shrink-0 relative z-10"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                {step.number}
              </motion.div>
              <div className="pt-1">
                <h3 className="font-semibold text-base text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-dim text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Note */}
      <ScrollReveal delay={0.5} className="mt-12 lg:mt-14">
        <p className="text-sage text-[13px] text-center max-w-[640px] mx-auto px-6 py-4 bg-sage/8 rounded-xl leading-relaxed">
          Все примерки и правки — только в личном общении. Без автоматических загрузок и роботов.
        </p>
      </ScrollReveal>
    </SectionWrapper>
  );
}
