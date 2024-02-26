import Image from "next/image";

export const LiveUpdateMeter = ({ size = "large" }: { size?: "small" | "large" }) => {
  const sizes = {
    small: "h-[13px] w-[13px]",
    large: "h-[17px] w-[17px]",
  } as const;

  return (
    <div className="flex justify-center items-center">
      <div className={`rounded-full ${sizes[size]} bg-[#48C884] flex justify-center items-center`}>
        <Image
          alt="graph"
          src="/images/arrow-up.png"
          width={size === "small" ? 6 : 11}
          height={0}
          objectFit="cover"
        />
      </div>
      <span className="text-[#48C884] text-[8px] ml-1">+14%</span>
    </div>
  );
};
