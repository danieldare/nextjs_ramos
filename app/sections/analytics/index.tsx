"use client";

import { AnimatedCounter } from "@/app/components/animated-counter";
import AnimatedProgressBar from "@/app/components/animated-progress-bar";
import { Reveal } from "@/app/components/reveal";
import { motion } from "framer-motion";
import Image from "next/image";

export const Analytics = () => {
  return (
    <section className="bg-[#F9F9F9] rounded-t-[100px]  h-full py-[85px] flex flex-col items-center justify-center">
        <div className="px-12 mx-auto w-full">
          <div className="flex justify-between items-center">
            <Reveal>
              <h3 className="text-[40px] text-[#1A1A1A] leading-[45px]">
                Your Key to strategic
                <br /> success through analytics
              </h3>
            </Reveal>
            <Reveal>
              <p className="text-[18px] text-[#1A1A1A]">
                Ready for exciting , instantaneous,
                <br /> all-acceessible insights in real time?
              </p>
            </Reveal>
          </div>
          <div className="flex justify-between items-center mt-20 gap-5">
            <WhiteBackgroudStats />
            <BlackBackgroundWidgetControl />
          </div>

          <div className="flex justify-center items-center mt-10 max-w-[800px] gap-6 mx-auto">
            <p className="text-[#1A1A1A] self-end text-xl">Up to</p>
            <p className="text-8xl text-[#1A1A1A]">45%</p>
            <p className="text-[#1A1A1A] font-extralight text-sm">
              Increase your analytics efficiency up to 45% Unique
              <br /> algorithms provide insights from data reduce time for analysis
              <br /> and save time for making important informed decisions
            </p>
          </div>
        </div>
    </section>
  );
};

const WhiteBackgroudStats = () => {
  return (
    <div className="bg-white pt-8 pl-8  border border-[#E6E6E6] rounded-[50px] shadow-xl flex justify-between items-center gap-8 overflow-hidden flex-[60%]">
      <div className="flex flex-col self-start">
        <button className="self-start bg-[#FFD026] text-[#322D1C] rounded-lg py-2 px-3 text-xs  shadow-lg">
          Setting up reports
        </button>
        <h4 className="text-[#1A1A1A] text-[20px] mt-14">
          Fast and easy access
          <br /> to analytics
        </h4>
        <p className="self-end text-[#9C9C9C] mt-6 text-sm font-extralight">
          One platform is a comprehensive <br /> system of solution that will be the <br /> first
          step towars digitalization of <br /> your business!
        </p>
      </div>
      <div className="border rounded-[25px] rounded-bl-none rounded-r-none p-3 flex flex-col gap-2">
        <p className="text-[#1A1A1A] text-sm">Sales statistic</p>

        <div className="flex justify-between items-center gap-4">
          <div className="flex justify-center items-center gap-3">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex rounded-[50px] bg-[#FE4A22] justify-center items-center w-[40px] h-[40px]"
            >
              <Image
                alt="user-connecting"
                src="/images/user-connecting-icon.png"
                width={15}
                height={0}
              />
            </motion.span>
            <div className="flex flex-col gap-1">
              <p className="text-[#9C9C9C] text-xs">Total profit</p>
              <p className="text-[#1A1A1A] text-2xl">$ 264.2k</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-3 bg-[#F6F6F6] p-3 rounded-[20px] min-w-[110px]">
            <p className="text-[#1A1A1A] text-xs">Visitors</p>
            <AnimatedProgressBar />
            <AnimatedCounter
              from={24}
              to={56}
              suffix={"K"}
              className="text-[#1A1A1A] text-2xl font-extralight"
            />
          </div>
        </div>
        <div className="relative">
          <Image alt="graph" src="/images/graph.png" width={270} height={0} objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

const BlackBackgroundWidgetControl = () => {
  return (
    <div className="bg-black p-10 px-14 rounded-3xl shadow-xl flex flex-col items-center justify-between basis-[40%] self-stretch">
      <div className="flex gap-3">
        <div className="border border-[#232323] bg-[#000000] rounded-[30px]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="flex flex-col justify-center items-center p-4 px-6"
          >
            <Image
              alt="user-connecting"
              src="/images/user-connecting-icon.png"
              width={40}
              height={0}
            />
            <Image
              alt="user-connecting"
              className="mt-3"
              src="/images/users.png"
              width={80}
              height={0}
            />
          </motion.div>
        </div>
        <div className="border border-[#232323] bg-[#000000] rounded-[30px]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="flex flex-col h-full justify-between items-center p-4 px-7"
          >
            <p className="text-[10px] text-white">Transactions</p>
            <AnimatedCounter
              from={10}
              to={43}
              suffix="K"
              className="text-white text-4xl font-extralight"
            />
          </motion.div>
        </div>
      </div>

      <h4 className="text-white text-xl my-5">Widget control</h4>
      <p className="text-[#898989] text-sm font-extralight">
        Reports provide a comprehensive overview <br />
        of important aspects of web analytics
      </p>
    </div>
  );
};
