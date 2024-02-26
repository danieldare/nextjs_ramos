"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const progressBarVariants = {
  initial: { width: "0%" },
  animate: {
    width: "100%",
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

export const ProgressPercentage = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className="p-5 relative overflow-hidden h-full">
      <motion.div
        className="absolute -z-[1px] left-0 top-0 h-full w-full bg-[#FFD026] rounded-2xl"
        variants={progressBarVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      />
      <p className="relative z-10 text-[#1A1A1A] text-5xl">{text}</p>
    </div>
  );
};
