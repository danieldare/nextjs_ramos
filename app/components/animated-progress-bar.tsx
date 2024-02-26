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
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }

    return () => controls.stop();
  }, [controls, isInView]);

  return (
    <div ref={ref} className="h-[2.5px] w-full bg-[#d5d5d59c] rounded-[10px] overflow-hidden">
      <motion.div
        variants={progressBarVariants}
        initial="initial"
        animate={controls}
        className="h-full bg-[#48C884] rounded-[10px]"
      />
    </div>
  );
};

export default AnimatedProgressBar;
