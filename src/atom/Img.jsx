import PropTypes from "prop-types";

function Img({ src, style, alt, ...rest }) {
  return <img src={src} alt={alt} className={style} {...rest} />;
}


Img.propTypes = {
  src: PropTypes.string,
  style: PropTypes.string,
  alt: PropTypes.string,
};

export default Img;
