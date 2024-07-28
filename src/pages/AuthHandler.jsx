import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AuthHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [location.search, navigate]);

  return <h1 className="flex-center h-dvh">Loading...</h1>;
}

export default AuthHandler;
