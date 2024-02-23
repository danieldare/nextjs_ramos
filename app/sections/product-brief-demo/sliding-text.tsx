"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const SlidingText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const setWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    setWidth();
    window.addEventListener("resize", setWidth);

    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, []);

  const scrollVariants = {
    animate: {
      x: [40, -containerWidth + 100, 40],
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      style={{ whiteSpace: "nowrap" }}
      className="w-[500px] overflow-hidden
    bg-[#FFD026] rounded-[80px] text-[115px] text-[#1A1A1A]
    leading-[153px]
    "
    >
      <motion.div
        variants={scrollVariants}
        initial="animate"
        animate="animate"
        className="inline-block"
      >
        {text}
      </motion.div>
    </motion.div>
  );
};
