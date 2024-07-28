import PropTypes from "prop-types";
import Heading from "../atom/Heading";
import CardStatistics from "../molecules/CardStatistics";

function CardContent({ title, amount, percentage }) {
  return (
    <>
      <Heading label={title} style="text-xl" />
      <CardStatistics amount={amount} percentage={percentage} />
    </>
  );
}

CardContent.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  percentage: PropTypes.number,
};

export default CardContent;
