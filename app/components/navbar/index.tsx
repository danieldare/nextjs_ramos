"use client";

import Image from "next/image";
import { Variant, motion } from "framer-motion";
import { transform } from "next/dist/build/swc";

const navlinks = [
  { label: "Dashboard", url: "/dashboard" },
  { label: "Reports", url: "/reports" },
  { label: "Documents", url: "/documents" },
  { label: "History", url: "/history" },
  { label: "Settings", url: "/settings" },
];

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ translateY: "60px", opacity: 0 }}
      animate={{ translateY: "0px", opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[98%] mx-auto overflow-hidden bg-[#0D0D0D] p-2 flex justify-between rounded-2xl"
    >
      <motion.div
        initial={{ translateY: "60px", opacity: 0 }}
        animate={{ translateY: "0px", opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex gap-1 items-center"
      >
        <Image alt="logo" src="/images/brand-icon.png" width={25} height={25} />
        <p className="font-bold text-white text-lg">ramos</p>
      </motion.div>
      <motion.ul
        initial={{ translateY: "60px", opacity: 0 }}
        animate={{ translateY: "0px", opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex gap-3 justify-center bg-[#252525] rounded-2xl"
      >
        {navlinks.map(({ label }) => (
          <li key={label}>
            <button className="text-[#EDEDED] text-[12px] py-3 px-5">{label}</button>
          </li>
        ))}
      </motion.ul>
      <motion.button
        initial={{ translateY: "60px", opacity: 0 }}
        animate={{ translateY: "0px", opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-black text-[13px] bg-[#EDEDED] rounded-xl px-6"
      >
        Sign Up
      </motion.button>
    </motion.nav>
  );
};
