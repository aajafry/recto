import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { useTheme } from "../../contexts/ThemeContext";
import { polerOptions } from "../../data/chartsConfig";
import { polerData } from "../../data/chartsData";

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

function PolarChart() {
  const { isDark } = useTheme();

  return <PolarArea options={polerOptions(isDark)} data={polerData} />;
}

export { PolarChart as Polar };