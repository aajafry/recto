import PropTypes from "prop-types";

function ChartContainer({ chart: Chart }) {
  return (
    <div className="h-64">
      <Chart />
    </div>
  );
}

ChartContainer.propTypes = {
  chart: PropTypes.func,
};

export default ChartContainer;
