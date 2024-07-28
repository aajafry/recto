import PropTypes from "prop-types";

function Heading({label, style, ...rest}) {
  return <h2 className={style} {...rest}>{label}</h2>;
}

Heading.propTypes = {
  label: PropTypes.string,
  style: PropTypes.string
};

export default Heading