import PropTypes from "prop-types";
import AvaterMenuItem from "../atom/AvaterMenuItem";

function AvaterMenu({ setShowMenu }) {
  return (
    <div className="absolute right-0 mt-2 w-48 primary-bg-theme secoundary-text-theme rounded-lg shadow-lg z-50">
      <ul className="list-none">
        <AvaterMenuItem to="/profile" onClick={() => setShowMenu(false)}>
          Profile
        </AvaterMenuItem>
      </ul>
    </div>
  );
}

AvaterMenu.propTypes = {
  setShowMenu: PropTypes.func,
};

export default AvaterMenu;
