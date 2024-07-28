import PropTypes from "prop-types";

function Link({ href, children, style }) {
  return (
    <a href={href} className={style}>
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.string
};

export default Link;
