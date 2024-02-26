"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const DevicesDashboard = () => {
  return (
    <section className="bg-[#F9F9F9]  overflow-hidden rounded-t-[100px]  h-full">
      <div className="pt-[100px]  pl-10 relative z-[2]">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-4xl text-[#1A1A1A]">
              Turning data into real
              <br /> actions and ideas.
            </p>
            <div className="flex flex-col gap-4 mt-20">
              <AccordionHeader title="Instant Insights" />
              <AccordionHeader title="AI technology" />
              <AccordionHeader title="Easy integration" />
            </div>
          </div>

          <div className="relative left-[40px]">
            <div className="absolute -left-[250px] -bottom-[120px] z-10">
              <Image
                alt="laptop"
                src="/images/phone.png"
                width={322}
                height={200}
                className="relative left-[130px] top-0"
              />
            </div>
            <div className="relative h-[780px] w-[780px]">
              <Image alt="laptop" src="/images/laptop.png" fill className="relative" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative -top-[200px] -left-2 -z-1 text-center h-[400px]  mx-auto bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <motion.h1 className="text-[#FE4A22] text-[400px] font-bold">Ramos</motion.h1>
      </div>
    </section>
  );
};

const AccordionHeader = ({ title }: { title: string }) => {
  return (
    <div className="bg-white flex justify-between items-center py-4 px-8 rounded-3xl shadow-lg">
      <p className="text-md text-[#1A1A1A]">{title}</p>
      <button className="text-[#1A1A1A] text-lg bg-[#f0f0f0] h-[40px] w-[40px]  flex items-center justify-center rounded-full">
        +
      </button>
    </div>
  );
};
