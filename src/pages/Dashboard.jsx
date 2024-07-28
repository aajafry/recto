import { AiOutlineRadarChart } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";
import { GrLineChart } from "react-icons/gr";
import { cards, OrderColumns, OrderRows, SalesColumns, SalesRows } from "../data/data";
import { Line } from "../molecules/charts/LineChart";
import { Pie } from "../molecules/charts/PieChart";
import { Radar } from "../molecules/charts/RadarChart";
import Card from "../organisms/Card";
import ChartWidget from "../organisms/ChartWidget";
import TableWidget from "../organisms/TableWidget";

export default function Dashboard() {
  return (
    <>
      <div className="mt-4 flex gap-4 flex-wrap">
        {cards.map((card, index)=> {
          const { icon, title, amount, percentage} = card
          return (
            <Card
              key={index}
              icon={icon}
              title={title}
              amount={amount}
              percentage={percentage}
            />
          );
        })}
      </div>

      <div className="my-12 p-4 w-full primary-bg-theme shadow-md">
        <ChartWidget icon={GrLineChart} title="Sales Graph" chart={Line} />
      </div>

      <div className="my-12 flex flex-wrap gap-4 w-full">
        <div className="w-full md:w-[calc(40%-8px)]  p-3 primary-bg-theme shadow-md">
          <ChartWidget icon={FaChartPie} title="Digital Sales Graph" chart={Pie} />
        </div>
        <div className="w-full md:w-[calc(60%-8px)] p-3 primary-bg-theme shadow-md">
          <TableWidget
            title="Recent Sales"
            rows={SalesRows}
            columns={SalesColumns}
          />
        </div>
      </div>

      <div className="my-12 flex flex-wrap gap-4 w-full md:flex-row flex-col-reverse">
        <div className="w-full md:w-[calc(60%-8px)] p-3 primary-bg-theme shadow-md">
          <TableWidget
            title="Recent Orders"
            rows={OrderRows}
            columns={OrderColumns}
          />
        </div>
        <div className="w-full md:w-[calc(40%-8px)] p-3 primary-bg-theme shadow-md">
          <ChartWidget
            icon={AiOutlineRadarChart}
            title="Radar Grap"
            chart={Radar}
          />
        </div>
      </div>
    </>
  );
}