"use client";

import { Reveal } from "@/app/components/reveal";
import { motion } from "framer-motion";
import { WidgetControl } from "./widget-control";
import { AnalyticsStats } from "./analytics-stats";

export const Analytics = () => {
  return (
    <section>
      <Reveal className="bg-[#F9F9F9] rounded-[100px]  h-full py-[85px] flex flex-col items-center justify-center">
        <div className="px-12 mx-auto w-full">
          <Reveal className="flex justify-between items-center">
            <h3 className="text-[40px] text-ramos-black leading-[45px]">
              Your Key to strategic
              <br /> success through analytics
            </h3>

            <p className="text-[18px] text-[#1A1A1A]">
              Ready for exciting , instantaneous,
              <br /> all-acceessible insights in real time?
            </p>
          </Reveal>
          <div className="flex justify-between items-center mt-20 gap-5">
            <AnalyticsStats />
            <WidgetControl />
          </div>

          <div className="flex justify-center items-center mt-10 max-w-[800px] gap-6 mx-auto">
            <p className="text-[#1A1A1A] self-end text-xl">Up to</p>
            <p className="text-8xl text-[#1A1A1A]">45%</p>

            <motion.p
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-ramos-black font-extralight text-sm"
            >
              Increase your analytics efficiency up to 45% Unique
              <br /> algorithms provide insights from data reduce time for analysis
              <br /> and save time for making important informed decisions
            </motion.p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
