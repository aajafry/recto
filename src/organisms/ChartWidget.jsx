import PropTypes from "prop-types";
import ChartContainer from "../molecules/ChartContainer";
import WidgetHeader from "../molecules/WidgetHeader";

function ChartWidget({ icon, title, chart }) {
  return (
    <>
      <WidgetHeader icon={icon} title={title} />
      <ChartContainer chart={chart} />
    </>
  );
}

ChartWidget.propTypes = {
  icon: PropTypes.func,
  title: PropTypes.string,
  chart: PropTypes.func,
};

export default ChartWidget;
