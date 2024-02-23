"use client";

import { MotionProps, motion } from "framer-motion";
import { StaggeringAnimatedText } from "@/app/components/stagerring-animated-text";
import Image from "next/image";
import { SlidingText } from "./sliding-text";

type AnimatedIconProps = {
  children: React.ReactNode;
} & MotionProps &
  React.HTMLAttributes<HTMLSpanElement>;
const AnimatedScaleIcon = ({ children, ...props }: AnimatedIconProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export const ProductBriefDemo = () => {
  return (
    <section className="bg-white p-10">
      <div className="max-w-[1300px] mx-auto">
        <h1 className="text-[115px] leading-[140px] font-medium  tracking-tight text-gray-900 mb-4">
          <StaggeringAnimatedText text="Maximize" />
          <StaggeringAnimatedText className="text-[#CCCCCC]" text={["efficiency"]} /> <br />{" "}
          <StaggeringAnimatedText text="with our inituitive" />
        </h1>
        <div className="mt-10 flex justify-between items-center">
          <div className="flex  items-center">
            <AnimatedScaleIcon className="inline-flex h-[130px] w-[130px] bg-[#F2F2F2] rounded-full justify-center items-center relative left-4">
              <Image alt="orange" src="/images/orange-thunder-icon.png" width={90} height={90} />
            </AnimatedScaleIcon>
            <AnimatedScaleIcon className="inline-flex flex-col h-[130px] w-[130px] text-center bg-[#FFD026] rounded-full justify-center items-center">
              <p className="text-[#1A1A1A] text-2xl">45%</p>
              <p className="text-[#1A1A1A] text-[9px]">
                System grow <br />
                faster
              </p>
            </AnimatedScaleIcon>
          </div>
          <SlidingText text="Analytics service" />
        </div>

        <hr className="my-14" />
        <div className="flex justify-between items-center mt-10">
          <p className="text-[#1A1A1A] ">
            Explore traffic sources page behaviour , conversions and more to gain deep insight
            <br /> into your audience. Withus, your business donesn't just adapt - it evolves
          </p>

          <div className="flex items-center gap-2">
            <button className="bg-[#F2F2F2]  text-[#1A1A1A] text-xs rounded-md py-3 px-8">
              Request a demo
            </button>
            <button className="bg-[#FE4A22] text-white text-xs rounded-md py-3 px-8">
              Start for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
