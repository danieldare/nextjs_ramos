import { StaggeringAnimatedText } from "@/app/components/stagerring-animated-text";
import { SalesRevenue } from "./sales-revenue";
import { MonitoringIndicators } from "./monitoring-indicators";
import { CustomerServiceCard } from "./customer-service-card";
import { Reveal } from "@/app/components/reveal";

export const DataControl = () => {
  return (
    <section>
      <div className="max-w-[1300px] mx-auto p-10">
        <h1 className="text-[#1A1A1A] text-[105px] leading-[130px] py-10 mb-6 font-medium">
          <StaggeringAnimatedText text="We give you full" /> <br />{" "}
          <StaggeringAnimatedText className="text-ramos-grey-200" text="control" />
          <StaggeringAnimatedText className="" text={"over your data"} />
        </h1>
        <Reveal>
          <div className="flex gap-4 justify-center items-center">
            <div className="relative p-[40px_90px] self-stretch justify-between flex flex-col  flex-1 rounded-[50px] bg-[#F9F9F9] text-center mx-auto shadow-xl shadow-[#b0aeae27] border border-[#ededed] ">
              <div className="absolute bg-[#F9F9F9] top-0 left-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
              <div className="flex relative left-[15px]">
                <CustomerServiceCard />
                <SalesRevenue />
              </div>
              <div>
                <h6 className="text-[#1A1A1A] text-2xl  my-4">Improved customer service</h6>
                <p className="text-[#1A1A1A] text-sm">
                  Analytics helps optimize service process by <br /> providing information on how to
                  improve interactions <br /> with customers and increase their satisfication
                </p>
              </div>
            </div>

            <div className="flex-1 relative p-[40px_90px] rounded-[50px] bg-[#F9F9F9] text-center mx-auto shadow-xl shadow-[#b0aeae27] border border-[#ededed] ">
              <div className="absolute bg-[#F9F9F9] top-0 left-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />

              <div className="bg-[#FBFBFB] w-[80%] mx-auto -z-2 rounded-t-2xl p-5 border border-[#EEEEEE] shadow-xl shadow-[#e1dcdc31] flex justify-center items-end gap-16">
                {""}
              </div>
              <div className="bg-[#FBFBFB] w-[90%] relative -top-[20px] mx-auto -z-1 rounded-t-2xl p-3  border border-[#EEEEEE] shadow-xl shadow-[#e1dcdc31] flex justify-starrt items-end gap-16">
                <span className="text-xs">Finance reports</span>
              </div>
              <MonitoringIndicators />
              <div>
                <h6 className="text-[#1A1A1A] text-xl my-4">Montoring Key indicators</h6>
                <p className="text-sm">
                  Analytics platform allows businesses to ttrack KPIs
                  <br /> an important tool for measuring success
                  <br /> and achieving goals
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
