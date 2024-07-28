import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedLayout = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};


ProtectedLayout.propTypes = {
  children: PropTypes.node,
};

export default ProtectedLayout;
