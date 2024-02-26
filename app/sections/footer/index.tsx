import { StaggeringAnimatedText } from "@/app/components/stagerring-animated-text";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black pt-[100px] pb-20">
      <div className="max-w-[1300px] mx-auto p-10">
        <div className="flex justify-between items-center">
          <ul className="flex gap-8 text-[#999999]">
            <li>About</li>
            <li>Why Us </li>
            <li>Platform</li>
            <li>Pricing</li>
            <li>Contacts</li>
          </ul>
          <h3 className="text-white text-5xl">hello@ramos.com</h3>
        </div>
        <hr className="border-[0.5px] border-[#99999951]  my-10" />
        <div className="flex justify-between items-center">
          <div className="flex gap-20">
            <div className="flex flex-col gap-1">
              <p className="text-white">Warrensville Heights</p>
              <p className="text-[#939393] text-[13px] font-light">1418 Vineyard Drive, NC</p>
              <p className="text-[#939393] text-[13px] font-light">44128</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-white">Saint Louis</p>
              <p className="text-[#939393] text-[13px] font-light">1366 Penn Street</p>
              <p className="text-[#939393] text-[13px] font-light">63101</p>
            </div>
          </div>
          <ul className="flex flex-col gap-3">
            <li className="text-lg font-extralight text-white">Linkedin</li>
            <li className="text-lg font-extralight text-white">Instagram</li>
            <li className="text-lg font-extralight text-white">Facebook</li>
          </ul>
        </div>
        <div className="flex justify-between items-center mt-14">
          <h2 className="text-9xl font-medium relative text-white">
            <StaggeringAnimatedText text="Ramos" />
            <span className="border-4 rounded-full text-[20px]  absolute top-[20px] right-[-15px] w-[33px] h-[33px] flex justify-center items-center p-1">
              R
            </span>
          </h2>
          <p className="text-[#939393] text-[13px] font-light">Privacy policy</p>
          <p className="text-[#939393] text-[13px] font-light">License agreement</p>
          <div className="bg-white rounded-2xl p-1">
            <Image alt="bar-code" src="/images/barcode.png" width={100} height={0} />
          </div>
        </div>
      </div>
    </footer>
  );
};
