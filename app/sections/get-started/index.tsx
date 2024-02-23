import { Reveal } from "@/app/components/reveal";
import Image from "next/image";

export const GetStarted = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 my-20">
      <div className="relative bg-[#FE4A22] rounded-[35px] shadow-lg shadow-[#fe4a229a] h-[100px] w-[100px] flex justify-center items-center">
        <Image alt="chain" src="/images/chain.png" width={45} height={0} objectFit="cover" />
      </div>

      <Reveal>
        <h2 className="text-[#1A1A1A]  text-[90px] leading-[85px]">Get Started</h2>
      </Reveal>
      <Reveal>
        <p className="text-[#999999] my-1 text-center">
          Turn information into advantage! Start using <br />
          Ramos today. Sign up for a free trial.
        </p>
      </Reveal>
      <div className="flex items-center gap-2">
        <button className="bg-[#F2F2F2]  text-[#1A1A1A] text-xs rounded-md py-3 px-8">
          Request a demo
        </button>
        <button className="bg-[#FE4A22] text-white text-xs rounded-md py-3 px-8">
          Start for free
        </button>
      </div>
    </section>
  );
};
