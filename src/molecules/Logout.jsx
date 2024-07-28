import { MdLogout } from "react-icons/md";
import { useLogout } from "../hooks/useLogout";

function Logout() {
  const { handleLogout } = useLogout();
  return (
    <MdLogout
      size={22}
      className="text-highlighter-theme cursor-pointer"
      onClick={handleLogout}
      title="Logout"
    />
  );
}

export default Logout;