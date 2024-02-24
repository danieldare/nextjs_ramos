export const MonitoringIndicators = () => {
  return (
    <div className="bg-white relative -top-[25px] rounded-2xl p-4 border border-[#EEEEEE] shadow-xl shadow-[#e1dcdc31] flex justify-between items-end">
      <div className="text-left">
        <p className="text-xs">Insights</p>
        <p className="text-xs mt-14 text-[#bdbcbc]">Total profit</p>
        <p className="text-2xl mt-2">$ 264.2K</p>
        <button className="min-w-[100px] self-start bg-[#FFD026] text-[#322D1C] rounded-lg py-2 px-3 mt-4 text-[9px]  shadow-lg">
          Data Visualization
        </button>
      </div>
      <BarChart />
    </div>
  );
};

const BarChart = () => {
  return (
    <div className="flex">
      <div className="flex justify-center gap-3 items-end">
        <BarChartItem bgColor="#bdbcbc" year="2021" height="60" />
        <BarChartItem bgColor="#bdbcbc" year="2020" height="25" />
        <BarChartItem bgColor="#bdbcbc" year="2019" height="60" />
        <BarChartItem bgColor="#FFD026" year="2018" height="90" />
        <BarChartItem bgColor="#bdbcbc" year="2017" height="45" />
      </div>
    </div>
  );
};

const BarChartItem = ({
  bgColor,
  year,
  height,
}: {
  bgColor: string;
  year: string;
  height: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-[25px] rounded-md`}
        style={{ height: `${height}px`, background: bgColor }}
      />
      <p className="text-[8px] text-[#bdbcbc] mt-2">{year}</p>
    </div>
  );
};
