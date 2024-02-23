"use client";

import { motion, useInView, Variant } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./reveal";

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

export const StaggeringAnimatedText = ({
  text,
  el: Wrapper = "span",
  className,
  once,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  return (
    <Reveal>
      <Wrapper className={`${className} relative overflow-hidden`}>
        <span className="sr-only">{textArray.join(" ")}</span>
        <motion.span
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                type: "tween",
                staggerChildren: 0.1,
              },
            },
            hidden: {},
          }}
          transition={{ once: false, duration: 0.5, delay: 0.25 }}
          aria-hidden
        >
          {textArray.map((line, lineIndex) => (
            <span className="inline-block" key={`${line}-${lineIndex}`}>
              {line.split(" ").map((word, wordIndex) => (
                <span className="inline-block" key={`${word}-${wordIndex}`}>
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${char}-${charIndex}`}
                      className="inline-block"
                      variants={animation}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
                </span>
              ))}
            </span>
          ))}
        </motion.span>
      </Wrapper>
    </Reveal>
  );
};
