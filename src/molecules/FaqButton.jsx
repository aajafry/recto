import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import Heading from "../atom/Heading";

function FaqButton({ question, onToggle }) {
  return (
    <button
      className="w-full flex items-center justify-between"
      onClick={onToggle}
    >
      <Heading label={question} style="font-semibold secoundary-text-theme" />
      <FaPlus size={22} className="text-highlighter-theme" />
    </button>
  );
}

FaqButton.propTypes = {
  question: PropTypes.string,
  onToggle: PropTypes.func,
};

export default FaqButton;
