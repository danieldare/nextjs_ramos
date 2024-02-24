import Image from "next/image";
import { ProgressBar } from "./progress-bar";

export const SalesRevenue = () => {
  return (
    <div className="bg-white rounded-3xl shadow-md relative top-[20px] -left-[20px] flex flex-col justify-between items-start gap-2 px-3 py-4">
      <p className="text-[#bdbcbc] text-xs">Sales revenue</p>
      <p className="text-[#1A1A1A]  text-2xl">$131.3k</p>
      <ProgressBar />
      <div className="flex justify-between items-center gap-10">
        <div className="flex justify-center items-center gap-1 relative -left-[5px]">
          <Image alt="user-female" src="/images/female-user.png" width={40} height={20} />
          <p className="text-[#bdbcbc] text-[10px]">Min Price</p>
        </div>
        <p className="text-[#1A1A1A] text-[10px]">1,200 $</p>
      </div>
      <div className="flex justify-between items-center gap-10">
        <div className="flex justify-center items-center gap-1 relative -left-[5px]">
          <Image alt="user-female" src="/images/male-user.png" width={40} height={20} />
          <p className="text-[#bdbcbc] text-[10px]">Min Price</p>
        </div>
        <p className="text-[#1A1A1A] text-[10px]">2,320 $</p>
      </div>
      <hr className="border-[#eeeeee] border-[0.5px] w-full my-1 block" />
      <div className="flex justify-between items-center w-full">
        <p className="text-[#bdbcbc] text-[10px]">Engagement rate</p>
        <p className="text-[#1A1A1A] text-[10px]">47.84%</p>
      </div>
    </div>
  );
};
