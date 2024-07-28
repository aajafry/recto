import { Bubble } from "../molecules/charts/BubbleChart";
import Heading from "../atom/Heading";
function BubbleChart() {
  return (
    <div className="chart-page-container">
      <Heading label="Bubble Chart" style="common-page-heading" />

      <div className="flex-1">
        <Bubble />
      </div>
    </div>
  );
}

export default BubbleChart