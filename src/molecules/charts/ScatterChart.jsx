import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { useTheme } from "../../contexts/ThemeContext";
import { scatterOptions } from "../../data/chartsConfig";
import { scatterData } from "../../data/chartsData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function ScatterChart() {
  const { isDark } = useTheme();

  return <Scatter options={scatterOptions(isDark)} data={scatterData} />;
}

export { ScatterChart as Scatter };