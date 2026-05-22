import { motion } from "framer-motion";
import { TriangleDivider } from "@/components/TriangleDivider";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const galleryItems = [
  {
    src: "/images/jewelry-1.jpg",
    alt: "Браслет из авантюрина с серебряной фурнитурой",
    title: "Авантюрин + серебро",
    phrase: "для тихой уверенности",
  },
  {
    src: "/images/jewelry-2.jpg",
    alt: "Колье из яшмы с латунной фурнитурой",
    title: "Яшма + латунь",
    phrase: "чтобы чувствовать землю",
  },
  {
    src: "/images/jewelry-3.jpg",
    alt: "Серьги из лабрадора с позолоченной фурнитурой",
    title: "Лабрадор + позолота",
    phrase: "для ярких решений",
  },
  {
    src: "/images/jewelry-4.jpg",
    alt: "Браслет из розового кварца с серебром",
    title: "Розовый кварц + серебро",
    phrase: "мягкость начала дня",
  },
  {
    src: "/images/jewelry-5.jpg",
    alt: "Кольцо из агата с латунной оправой",
    title: "Агат + латунь",
    phrase: "держать баланс",
  },
  {
    src: "/images/jewelry-6.jpg",
    alt: "Подвеска из содалита на серебряной цепочке",
    title: "Содалит + серебро",
    phrase: "ясность мысли",
  },
];

export function GallerySection() {
  return (
    <SectionWrapper id="gallery">
      <TriangleDivider />

      <ScrollReveal className="text-center mb-10 lg:mb-14">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-ink">
          Украшения в жизни
        </h2>
        <p className="mt-4 text-dim max-w-[480px] mx-auto leading-relaxed">
          Каждое — с историей, камнем и настроением
        </p>
      </ScrollReveal>

      <StaggerContainer
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-[1000px] mx-auto"
        staggerDelay={0.12}
      >
        {galleryItems.map((item) => (
          <StaggerItem key={item.src}>
            <motion.div
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Image container with aspect ratio */}
              <div className="relative pb-[133%]">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Hover border top */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-fox scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                {/* Hover shadow */}
                <div className="absolute inset-0 shadow-[0_12px_40px_rgba(42,42,42,0.12)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" />
                {/* Text overlay */}
                <div className="absolute bottom-5 left-5 right-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="font-semibold text-base text-white">
                    {item.title}
                  </p>
                  <p className="text-[13px] text-white/85 mt-1">
                    — {item.phrase}
                  </p>
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
