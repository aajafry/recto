import Heading from "../atom/Heading";
import { Doughnut } from "../molecules/charts/DoughnutChart";
function DoughnutChart() {
  return (
    <div className="chart-page-container">
      <Heading label="Doughnut Chart" style="common-page-heading" />
      <div className="flex-1">
        <Doughnut />
      </div>
    </div>
  );
}

export default DoughnutChart;
