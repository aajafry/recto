import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useTheme } from "../../contexts/ThemeContext";
import { pieOptions } from "../../data/chartsConfig";
import { pieData } from "../../data/chartsData";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const { isDark } = useTheme();
  return <Pie options={pieOptions(isDark)} data={pieData} />;
}

export { PieChart as Pie };