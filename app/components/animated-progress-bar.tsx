import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const AnimatedProgressBar = ({ duration = 1.5 }) => {
  const progressBarVariants = {
    initial: { width: 0 },
    animate: {
      width: "35%",
      transition: {
        duration: duration,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="h-[2.5px] w-full bg-[#d5d5d59c] rounded-[10px] overflow-hidden">
      <motion.div
        variants={progressBarVariants}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: false }}
        className="h-full bg-[#48C884] rounded-[10px]"
      />
    </div>
  );
};

export default AnimatedProgressBar;
