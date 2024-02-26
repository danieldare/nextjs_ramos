"use client";

import React, { useRef } from "react";
import { Variants, motion } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
  }),
};

const childVariants: Variants = {
  animate: {
    opacity: 1,
    y: 0,
    rotate: "0deg",
    transition: {
      type: "spring",
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.3,
      delay: 0.25,
    },
  },
  initial: {
    opacity: 0,
    y: 100,
    rotate: "5deg",
    transition: {
      type: "spring",
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export const StaggeringAnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <motion.span
      ref={ref}
      className={`${className} overflow-y-hidden inline-flex`}
      style={{ whiteSpace: "nowrap" }}
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.5 }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span variants={childVariants} key={`${word}-${index}`} className=" overflow-hidden">
          {word}
          <span className="inline-block">&nbsp;</span>
        </motion.span>
      ))}
    </motion.span>
  );
};
