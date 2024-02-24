import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black pt-[100px] pb-20">
      <div className="max-w-[1300px] mx-auto">
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
              <p>Warrensville Heights</p>
              <p className="text-[#999999] text-[13px]">1418 Vineyard Drive, NC</p>
              <p className="text-[#999999] text-[13px]">44128</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>Saint Louis</p>
              <p className="text-[#999999] text-[13px]">1366 Penn Street</p>
              <p className="text-[#999999] text-[13px]">63101</p>
            </div>
          </div>
          <ul className="flex flex-col gap-3">
            <li className="text-md font-extralight">Linkedin</li>
            <li className="text-md font-extralight">Instagram</li>
            <li className="text-md font-extralight">Facebook</li>
          </ul>
        </div>
        <div className="flex justify-between items-center mt-14">
          <h2 className="text-9xl font-medium relative text-white">
            Ramos{" "}
            <sup className="border border-3 rounded-full text-sm absolute top-[20px] right-[-10px]">
              R
            </sup>
          </h2>
          <p className="text-[#999999] text-[13px]">Privacy policy</p>
          <p className="text-[#999999] text-[13px]">License agreement</p>
          <div className="bg-white rounded-2xl p-1">
            <Image alt="bar-code" src="/images/barcode.png" width={100} height={0} />
          </div>
        </div>
      </div>
    </footer>
  );
};
