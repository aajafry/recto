import { Radar } from "../molecules/charts/RadarChart";
import Heading from "../atom/Heading";
function RadarChart() {
  return (
    <div className="chart-page-container">
      <Heading label="Radar Chart" style="common-page-heading" />
      <div className="flex-1">
        <Radar />
      </div>
    </div>
  );
}

export default RadarChart