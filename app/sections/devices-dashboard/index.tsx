import Image from "next/image";

export const DevicesDashboard = () => {
  return (
    <section className="bg-[#F9F9F9] rounded-t-[100px]  h-screen flex items-center justify-center">
      <div>
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
          <div className="relative">
            <Image alt="laptop" src="/images/laptop.png" width={500} height={650} />
          </div>
        </div>
        <div className="relative text-center">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[whitw] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
          <h1 className="text-[#FE4A22] text-[300px] font-bold">Ramos</h1>
        </div>
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
