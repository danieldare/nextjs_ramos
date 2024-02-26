"use client";

import React from "react";
import { motion } from "framer-motion";

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
  return (
    <div className="p-5 relative overflow-hidden h-full">
      <motion.div
        className="absolute -z-[1px] left-0 top-0 h-full w-full bg-[#FFD026] rounded-2xl"
        variants={progressBarVariants}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: false }}
      />
      <p className="relative z-10 text-[#1A1A1A] text-5xl">{text}</p>
    </div>
  );
};
