import React, { useState, useEffect, useRef } from "react";
import { AnimationPlaybackControls, MotionProps, animate, motion, useInView } from "framer-motion";

type AnimatedCounterProps = {
  from: number;
  to: number;
  suffix?: string;
  prefix?: string;
} & MotionProps &
  React.HTMLAttributes<HTMLSpanElement>;

export const AnimatedCounter = ({ from, to, suffix, prefix, ...rest }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    let controls: AnimationPlaybackControls;
    if (isInView) {
      controls = animate(from, to, {
        duration: 2.5,
        ease: "easeInOut",
        onUpdate: (value) => {
          setDisplayValue(Math.floor(value));
        },
      });
    }

    return () => {
      if (controls) {
        controls.stop();
      }
    };
  }, [isInView, from, to]);

  return (
    <motion.span ref={ref} {...rest}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </motion.span>
  );
};
