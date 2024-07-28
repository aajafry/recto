import PropTypes from "prop-types";

function Button({style, children, ...rest}) {
  return (
    <button className={style} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  style: PropTypes.string,
  children: PropTypes.node
}

export default Button