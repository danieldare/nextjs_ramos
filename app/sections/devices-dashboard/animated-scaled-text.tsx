import React from "react";
import { MotionProps, motion } from "framer-motion";

type AnimatedScaledTextProps = {
  text: string;
  className: string;
} & React.HTMLAttributes<HTMLHeadingElement> &
  MotionProps;

export const AnimatedScaledText = ({ text, className }: AnimatedScaledTextProps) => {
  const variants = {
    open: {
      clipPath: `circle(1000px at 300px 300px)`,
      width: "1300px",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
        delay: 1,
        duration: 1.3,
      },
    },
    closed: {
      width: 0,
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.h1
      initial="closed"
      whileInView="open"
      variants={variants}
      className={`text-ramos-orange font-bold ${className}`}
    >
      {text}
    </motion.h1>
  );
};
