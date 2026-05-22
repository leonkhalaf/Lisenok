import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: "cream" | "beige";
}

export function SectionWrapper({
  children,
  className = "",
  id,
  bgColor = "cream",
}: SectionWrapperProps) {
  const bgClass = bgColor === "beige" ? "bg-beige" : "bg-cream";

  return (
    <section
      id={id}
      className={`${bgClass} py-20 md:py-28 lg:py-32 ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-[60px]">
        {children}
      </div>
    </section>
  );
}
