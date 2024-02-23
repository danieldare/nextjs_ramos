"use client";

import Image from "next/image";
import { MotionProps, motion } from "framer-motion";
import { StaggeringAnimatedText } from "@/app/components/stagerring-animated-text";
import { Reveal } from "@/app/components/reveal";

type AnimatedIconProps = {
  children: React.ReactNode;
} & MotionProps &
  React.HTMLAttributes<HTMLSpanElement>;
const AnimatedIcon = ({ children, ...props }: AnimatedIconProps) => {
  return (
    <motion.span
      initial={{ rotate: 0, opacity: 0, scale: 0 }}
      animate={{ rotate: 360, opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export const Hero = () => {
  return (
    <section className="bg-white h-screen flex justify-center items-center px-4">
      <div className="hero-container flex justify-between items-center py-12 md:py-24">
        <div className="hero-text">
          <div className="text-[115px] leading-[140px] font-medium  tracking-tight text-gray-900 mb-4">
            <div className="flex items-center">
              <div className="flex flex-col  mr-6">
                <div className="flex items-center self-end">
                  <AnimatedIcon className="inline-flex h-[100px] w-[100px] bg-[#F2F2F2] rounded-full justify-center items-center relative left-4">
                    <Image alt="orange" src="/images/grey-icon.png" width={55} height={55} />
                  </AnimatedIcon>
                  <AnimatedIcon className="inline-flex h-[100px] w-[100px] bg-[#FE4A22] rounded-full justify-center items-center">
                    <Image alt="orange" src="/images/orange-icon.png" width={70} height={70} />
                  </AnimatedIcon>

                  <StaggeringAnimatedText text={["Analytics"]} />
                </div>
                <div className="block translate-x-[-50px]">
                  <StaggeringAnimatedText text={["that"]} />
                  <StaggeringAnimatedText className="text-[#CCCCCC]" text={["helps"]} />
                  <StaggeringAnimatedText className="" text={["you"]} />
                </div>
              </div>
              <div className="relative">
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -top-[20px] -left-[20px] inline-flex rounded-[50px] bg-[#FE4A22] justify-center items-center w-[60px] h-[60px]"
                >
                  <Image alt="yellow" src="/images/play-icon.png" width={30} height={30} />
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.7 }}
                  className="inline-block"
                >
                  <Image alt="orange" src="/images/small-laptop.png" width={400} height={400} />
                </motion.span>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <StaggeringAnimatedText text={["shape"]} />
              <AnimatedIcon className="inline-flex h-[100px] w-[100px] bg-[#FFD026] rounded-full justify-center items-center mx-6 ml-1">
                <Image alt="yellow" src="/images/yellow.png" width={60} height={60} />
              </AnimatedIcon>
              <StaggeringAnimatedText text={["the future"]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
