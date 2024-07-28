/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

function Paragraph({ style, children }) {
  return <p className={style}>{children}</p>;
}

Paragraph.propTypes = {
  style: PropTypes.string,
  children: PropTypes.node
}

export default Paragraph;
