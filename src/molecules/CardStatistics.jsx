import PropTypes from "prop-types";
import Amount from "../atom/Amount";
import Percentage from "../atom/Percentage";

function CardStatistics({ amount, percentage }) {
  return (
    <div className="flex justify-between">
      <Amount label={amount} style="font-bold" />
      <Percentage label={percentage} />
    </div>
  );
}

CardStatistics.propTypes = {
  amount: PropTypes.string,
  percentage: PropTypes.number
};

export default CardStatistics;
