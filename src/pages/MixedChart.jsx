import { Mixed } from "../molecules/charts/MixedChart";
import Heading from "../atom/Heading";
function MixedChart() {
  return (
    <div className="chart-page-container">
      <Heading label="Mixed Chart" style="common-page-heading" />
      <div className="flex-1">
        <Mixed />
      </div>
    </div>
  );
}

export default MixedChart;
