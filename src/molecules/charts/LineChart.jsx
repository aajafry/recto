import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useTheme } from "../../contexts/ThemeContext";
import { lineOptions } from "../../data/chartsConfig";
import { lineData } from "../../data/chartsData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function LineChart() {
  const { isDark } = useTheme();
  return <Line options={lineOptions(isDark)} data={lineData} />;
}

export { LineChart as Line };