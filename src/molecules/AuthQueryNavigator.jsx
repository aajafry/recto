import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Paragraph from "../atom/Paragraph";

function AuthQueryNavigator({ currentForm }) {
  return (
    <Paragraph style="text-sm w-full text-left">
      {currentForm === "login" && "Don't have an Account?"}
      {currentForm === "signup" && "Did you have an Account?"}

      <Link
        to={currentForm === "login" ? "/signup" : "/login"}
        className="ml-2 text-highlighter-theme font-semibold"
      >
        {currentForm === "login" ? "Signup" : "Login"}
      </Link>
    </Paragraph>
  );
}

AuthQueryNavigator.propTypes = {
  currentForm: PropTypes.string
};

export default AuthQueryNavigator