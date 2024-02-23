import { StaggeringAnimatedText } from "@/app/components/stagerring-animated-text";

export const DataControl = () => {
  return (
    <section>
      <div className="max-w-[1300px] mx-auto">
        <h1 className="text-[#1A1A1A] text-[114px] leading-[140px] py-10">
          <StaggeringAnimatedText text="We give you full" /> <br />{" "}
          <StaggeringAnimatedText className="text-[#CCCCCC]" text="control" />
          <StaggeringAnimatedText className="" text={["over your data"]} />
        </h1>
        <div>
          <div>
            <h6>Improved customer service</h6>
            <p>
              Analytics helps optimize service process by providing information on how to improve
              interactions with customers and increase their satisfication
            </p>
          </div>
          <div>
            <h6>Montoring Key indicators</h6>
            <p>
              Analytics platform allows businesses to ttrack KPIs an important tool for measuring
              success and achieving goals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
