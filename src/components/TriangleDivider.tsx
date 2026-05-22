import { motion } from "framer-motion";

interface TriangleDividerProps {
  color?: string;
}

export function TriangleDivider({ color = "#E9A87C" }: TriangleDividerProps) {
  return (
    <motion.div
      className="flex justify-center mb-10"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <svg
        width="120"
        height="20"
        viewBox="0 0 120 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60 0L120 20H0L60 0Z"
          fill={color}
          fillOpacity="0.3"
        />
      </svg>
    </motion.div>
  );
}
