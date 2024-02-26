"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export const Reveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "10px" });

  return (
    <div ref={ref} className="w-full relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: 90 },
          visible: {
            opacity: 1,
            translateY: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.25,
              type: "spring",
            },
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
