import Heading from "../atom/Heading";
import { Pie } from "../molecules/charts/PieChart";
function PieChart() {
  return (
    <div className="chart-page-container">
      <Heading label="Pie Chart" style="common-page-heading" />
      <div className="flex-1">
        <Pie />
      </div>
    </div>
  );
}

export default PieChart