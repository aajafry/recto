import PropTypes from "prop-types";
import FaqItem from "../molecules/FaqItem";

function FaqList({ faqs }) {
  return (
    <ul className="mt-10">
      {faqs.map((faq, index) => (
        <FaqItem key={index} faq={faq} />
      ))}
    </ul>
  );
}

FaqList.propTypes = {
  faqs: PropTypes.array,
};

export default FaqList;
