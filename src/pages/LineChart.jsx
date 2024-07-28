import Heading from "../atom/Heading";
import { Line } from "../molecules/charts/LineChart";
function LineChart() {
  return (
    <div className="chart-page-container">
      <Heading label="Line Chart" style="common-page-heading" />
      <div className="flex-1">
        <Line />
      </div>
    </div>
  );
}

export default LineChart