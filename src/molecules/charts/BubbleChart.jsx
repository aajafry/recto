import {
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import { useTheme } from "../../contexts/ThemeContext";
import { barOptions } from "../../data/chartsConfig";
import { bubbleData } from "../../data/chartsData";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

function BubbleChart() {
  const { isDark } = useTheme();
  return <Bubble options={barOptions(isDark)} data={bubbleData} />;
}

export { BubbleChart as Bubble };
