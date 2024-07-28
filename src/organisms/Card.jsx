import PropTypes from "prop-types";
import Icon from "../atom/Icon";
import CardContent from "./CardContent";

function Card({ icon: CardIcon, title, amount, percentage }) {
  return (
    <div className="flex-1 min-w-48 p-3 primary-bg-theme shadow-md">
      <div className="flex justify-end">
        <Icon icon={CardIcon} size={32} style="text-highlighter-theme" />
      </div>
      <div className="mb-4">
        <CardContent title={title} amount={amount} percentage={percentage} />
      </div>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.string,
  percentage: PropTypes.number,
};

export default Card;
