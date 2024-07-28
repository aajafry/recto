import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MenuItem({ to, onClick, children }) {
  return (
    <li className="block px-4 py-2 border-b-[1px] border-slate-300 dark:border-slate-700 hover:secoundary-bg-theme hover:primary-text-theme common-transition">
      <Link to={to} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
}

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default MenuItem;
