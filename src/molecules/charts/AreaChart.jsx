import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useTheme } from "../../contexts/ThemeContext";
import { areaOptions } from "../../data/chartsConfig";
import { areaData } from "../../data/chartsData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler
);

function AreaChart() {
  const { isDark } = useTheme();
  return <Line options={areaOptions(isDark)} data={areaData} />;
}

export { AreaChart as Area };
