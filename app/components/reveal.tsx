"use client";

import { motion } from "framer-motion";

export const Reveal = ({
  children,
  className,
  delay = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <div className="w-full relative ">
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: 90 },
          visible: {
            opacity: 1,
            translateY: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
              delay,
              type: "spring",
            },
          },
        }}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};
