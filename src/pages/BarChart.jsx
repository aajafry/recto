import Heading from "../atom/Heading";
import { Bar } from "../molecules/charts/BarChart";

function BarChart() {
  return (
    <div className="chart-page-container">
      <Heading label="Bar Chart" style="common-page-heading" />
      <div className="flex-1">
        <Bar />
      </div>
    </div>
  );
}

export default BarChart