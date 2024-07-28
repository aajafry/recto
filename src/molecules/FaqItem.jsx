import PropTypes from "prop-types";
import Paragraph from "../atom/Paragraph";
import { useFaq } from "../hooks/useFaq";
import FaqButton from "../molecules/FaqButton";

function FaqItem({ faq }) {
  const { showAnswer, toggleAnswer } = useFaq();

  return (
    <li className="py-6 border-t-[1px] border-slate-300">
      <FaqButton question={faq.question} onToggle={toggleAnswer} />

      {showAnswer && (
        <Paragraph style="my-4 pr-10 thirdary-text-theme common-transition">
          {faq.answer}
        </Paragraph>
      )}
    </li>
  );
}

FaqItem.propTypes = {
  faq: PropTypes.object
}

export default FaqItem;
