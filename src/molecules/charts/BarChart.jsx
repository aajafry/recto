import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTheme } from "../../contexts/ThemeContext";
import { barOptions } from "../../data/chartsConfig";
import { barData } from "../../data/chartsData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function BarChart() {
  const { isDark } = useTheme();
  return <Bar options={barOptions(isDark)} data={barData} />;
}

export { BarChart as Bar };
