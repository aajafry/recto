import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useTheme } from "../../contexts/ThemeContext";
import { doughnutOptions } from "../../data/chartsConfig";
import { doughnutData } from "../../data/chartsData";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const { isDark } = useTheme();
  return <Doughnut options={doughnutOptions(isDark)} data={doughnutData} />;
}

export { DoughnutChart as Doughnut };