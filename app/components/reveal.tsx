"use client";

import { useInView, motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const Reveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className="relative overflow-hidden inline-block">
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: 80, transition: { duration: 0.25 } },
          visible: {
            opacity: 1,
            translateY: 0,
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
