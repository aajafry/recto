import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useTheme } from "../../contexts/ThemeContext";
import { mixedOptions } from "../../data/chartsConfig";
import { mixedData } from "../../data/chartsData";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Legend,
  Tooltip
);

function MixedChart() {
  const { isDark } = useTheme();
  return <Chart options={mixedOptions(isDark)} data={mixedData} />;
}

export { MixedChart as Mixed };