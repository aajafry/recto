import { Area } from "../molecules/charts/AreaChart";
import Heading from "../atom/Heading";

function AreaChart() {
  return (
    <div className="chart-page-container">
      <Heading label="Area Chart" style="common-page-heading" />
      <div className="flex-1">
        <Area />
      </div>
    </div>
  );
}

export default AreaChart