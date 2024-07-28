import PropTypes from "prop-types";

function Percentage({ label }) {
  return (
    <span
      className={`font-semibold ${
        label > 0 ? "text-highlighter-theme" : "text-error-theme"
      }`}
    >
      {label > 0 ? "+" : "-"}
      {Math.abs(label)}%
    </span>
  );
}

Percentage.propTypes = {
  label: PropTypes.number
}

export default Percentage;
