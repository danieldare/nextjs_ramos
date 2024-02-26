"use client";

import { StaggeringAnimatedText } from "@/app/components/stagerring-animated-text";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/app/components/button";

export const GetStarted = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 my-20">
      <motion.div
        initial={{ scale: 2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-ramos-orange rounded-[35px] shadow-lg shadow-[#fe4a229a] h-[100px] w-[100px] flex justify-center items-center"
      >
        <Image alt="chain" src="/images/chain.png" width={45} height={0} objectFit="cover" />
      </motion.div>

      <h2>
        <StaggeringAnimatedText
          className="text-[#1A1A1A]  text-[90px] leading-[85px]"
          text="Get Started"
        />
      </h2>
      <p className="text-[#999999] my-1 text-center">
        Turn information into advantage! Start using <br />
        Ramos today. Sign up for a free trial.
      </p>
      <div className="flex items-center gap-2">
        <Button variant="secondary">Request a demo</Button>
        <Button variant="primary">Start for Free</Button>
      </div>
    </section>
  );
};
