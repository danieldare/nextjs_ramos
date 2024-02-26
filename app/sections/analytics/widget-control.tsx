"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LiveUpdateMeter } from "./live-update-meter";
import { AnimatedCounter } from "@/app/components/animated-counter";

const variantOne = {
  initial: { opacity: 0, x: 50, y: 40 },
  animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
};

const variantTwo = {
  initial: { opacity: 0, x: -50, y: 40 },
  animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
};

export const WidgetControl = () => {
  return (
    <div className="bg-black p-10 px-14 shadow-[#eaeaea84] rounded-3xl shadow-xl flex flex-col items-center justify-between basis-[40%] self-stretch">
      <div className="flex gap-2">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={variantOne}
          className="py-1 border min-w-[135px] border-[#232323] bg-ramos-black rounded-[30px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="flex flex-col justify-center items-center p-4 px-6"
          >
            <Image
              alt="user-connecting"
              src="/images/user-connecting-icon.png"
              width={35}
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
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={variantTwo}
          className="py-1 border min-w-[135px] border-[#232323] bg-ramos-black rounded-[30px] "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="flex flex-col h-full justify-between items-stretch p-4 px-7"
          >
            <p className="text-[10px] text-white">Transactions</p>

            <div className="relative">
              <div className="absolute -right-[13px] -top-[23px]">
                <LiveUpdateMeter />
              </div>
              <AnimatedCounter
                from={10}
                to={43}
                suffix="K"
                className="text-white text-[40px] font-light leading-none"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <h4 className="text-white text-2xl my-5 mb-3">Widget control</h4>
      <p className="text-[#a7a6a6] text-sm text-center font-extralight">
        Reports provide a comprehensive overview <br />
        of important aspects of web analytics
      </p>
    </div>
  );
};
