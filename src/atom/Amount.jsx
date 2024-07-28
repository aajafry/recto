import PropTypes from 'prop-types';

function Amount({label, style}) {
  return <span className={style}>${label}</span>;
}

Amount.propTypes = {
  label: PropTypes.string,
  style: PropTypes.string
};

export default Amount