"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const duration = 0.7;

const progressBarVariants1 = {
  initial: { width: 0 },
  animate: {
    width: "33%",
    transition: {
      duration: duration,
      ease: "easeInOut",
      delay: 1.5,
    },
  },
};

const progressBarVariants2 = {
  initial: { width: 0 },
  animate: {
    width: "32%",
    transition: {
      duration: duration,
      ease: "easeInOut",
      delay: 2,
    },
  },
};

const progressBarVariants3 = {
  initial: { width: 0 },
  animate: {
    width: "32%",
    transition: {
      duration: duration,
      ease: "easeInOut",
      delay: 2.5,
    },
  },
};

export const ProgressTripleBar = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <div ref={ref} className="h-[5px] flex gap-[2px] rounded-xl w-full overflow-hidden">
      <motion.div
        variants={progressBarVariants1}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="h-full bg-[#48C884] rounded-2xl"
      />
      <motion.div
        variants={progressBarVariants2}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="h-full bg-[#FFD026] rounded-2xl"
      />
      <motion.div
        variants={progressBarVariants3}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="h-full bg-[#8A5CFF] rounded-2xl"
      />
    </div>
  );
};
