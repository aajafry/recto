import Heading from "../atom/Heading";
import { Polar } from "../molecules/charts/PolerChart";
function PolarChart() {
  return (
    <div className="chart-page-container">
      <Heading label="Poler Chart" style="common-page-heading" />
      <div className="flex-1">
        <Polar />
      </div>
    </div>
  );
}

export default PolarChart;