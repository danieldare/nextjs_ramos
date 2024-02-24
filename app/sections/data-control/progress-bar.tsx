"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const ProgressBar = ({ duration = 1.5 }) => {
  const progressBarVariants1 = {
    initial: { width: 0 },
    animate: {
      width: "33.333%",
      transition: {
        duration: duration,
        ease: "easeInOut",
      },
    },
  };

  const progressBarVariants2 = {
    initial: { width: 0 },
    animate: {
      width: "33.333%",
      transition: {
        duration: duration,
        ease: "easeInOut",
      },
    },
  };

  const progressBarVariants3 = {
    initial: { width: 0 },
    animate: {
      width: "33.333%",
      transition: {
        duration: duration,
        ease: "easeInOut",
      },
    },
  };

  const ref = useRef(null);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    const sequence = async () => {
      if (isInView) {
        await controls1.start("animate");
        await controls2.start("animate");
        await controls3.start("animate");
      }
    };

    sequence();

    return () => {
      controls1.stop();
      controls2.stop();
      controls3.stop();
    };
  }, [controls1, controls2, controls3, isInView]);

  return (
    <div ref={ref} className="h-[5px] flex gap-[2px] rounded-xl w-full overflow-hidden">
      <motion.div
        variants={progressBarVariants1}
        initial="initial"
        animate={controls1}
        className="h-full bg-[#48C884] rounded-2xl"
      />
      <motion.div
        variants={progressBarVariants2}
        initial="initial"
        animate={controls2}
        className="h-full bg-[#FFD026] rounded-2xl"
      />
      <motion.div
        variants={progressBarVariants3}
        initial="initial"
        animate={controls3}
        className="h-full bg-[#8A5CFF] rounded-2xl"
      />
    </div>
  );
};
