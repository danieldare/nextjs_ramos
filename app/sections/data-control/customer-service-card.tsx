"use client";

import { useRef } from "react";
import { ProgressPercentage } from "./progress-percentage";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: { opacity: 0, x: 50, y: 40 },
  animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
};

export const CustomerServiceCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      className="bg-white rounded-3xl shadow-sm flex flex-col justify-between items-center gap-4 py-8 min-w-[210px] "
    >
      <p className="text-[#1A1A1A] text-xs">Conversion rate</p>
      <ProgressPercentage text="2.3%" />
      <p className="text-[#bdbcbc] text-xs">
        Percentage of
        <br /> website visitors
      </p>
    </motion.div>
  );
};
