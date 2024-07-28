import Heading from "../atom/Heading";
import { Scatter } from "../molecules/charts/ScatterChart";
function ScatterChart() {
  return (
    <div className="chart-page-container">
      <Heading label="Scatter Chart" style="common-page-heading" />
      <div className="flex-1">
        <Scatter />
      </div>
    </div>
  );
}

export default ScatterChart;
