import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function useLogout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
    toast.success("logged out");
  };

  return { handleLogout };
}

export { useLogout };

