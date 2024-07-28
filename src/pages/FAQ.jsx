/* eslint-disable react-refresh/only-export-components */
import Heading from "../atom/Heading";
import { faqs } from "../data/data";
import FaqList from "../organisms/FaqList";

function FAQ() {
  return (
    <>
      <Heading label="Frequently Asked Questions" style="common-page-heading" />
      <FaqList faqs={faqs} />
    </>
  );
}

export default FAQ