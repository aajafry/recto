import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useTheme } from "../../contexts/ThemeContext";
import { radarData } from "../../data/chartsData";
import { radarOptions } from "../../data/chartsConfig";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

function RadarChart() {
  const { isDark } = useTheme();
  return <Radar options={radarOptions(isDark)} data={radarData} />;
}

export { RadarChart as Radar };