import { motion } from "framer-motion";
import { TriangleDivider } from "@/components/TriangleDivider";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Send, MessageCircle, Mail } from "lucide-react";

const contactButtons = [
  {
    label: "Telegram",
    href: "https://t.me/lisenok_besenok",
    icon: Send,
    style: "bg-fox hover:bg-fox-hover text-white",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/79990000000",
    icon: MessageCircle,
    style: "bg-sage hover:bg-sage-hover text-white",
  },
  {
    label: "Написать на почту",
    href: "mailto:hello@lisenok-besenok.ru",
    icon: Mail,
    style:
      "bg-transparent border-2 border-ink text-ink hover:bg-ink hover:text-white",
  },
];

export function ContactSection() {
  return (
    <SectionWrapper id="contact" bgColor="beige">
      <TriangleDivider />

      <ScrollReveal className="text-center">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-ink">
          Начнём диалог
        </h2>
        <p className="mt-4 text-dim max-w-[520px] mx-auto leading-relaxed">
          Опиши настроение в трёх словах или прикрепи фото образа. Я отвечу в
          течение 12 часов и пришлю первые варианты.
        </p>
      </ScrollReveal>

      <StaggerContainer
        className="mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4"
        staggerDelay={0.15}
      >
        {contactButtons.map((btn) => (
          <StaggerItem key={btn.label}>
            <motion.a
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2.5 px-9 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-300 hover:-translate-y-0.5 ${btn.style}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <btn.icon size={18} strokeWidth={2} />
              {btn.label}
            </motion.a>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScrollReveal delay={0.5} className="mt-10">
        <p className="text-sage text-[13px] text-center max-w-[480px] mx-auto leading-relaxed">
          Все визуализации, примерки и согласования проходят в чате. Без форм
          на сайте, без автоответчиков.
        </p>
      </ScrollReveal>
    </SectionWrapper>
  );
}
