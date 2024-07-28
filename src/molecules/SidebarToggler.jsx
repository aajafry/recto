import { RiMenuFold2Line, RiMenuUnfold2Line } from "react-icons/ri";
// import Icon from "../atom/Icon";
import { useSidebar } from "../contexts/SidebarContext";

function SidebarToggler() {
  const { isOpen, toggleOpen } = useSidebar();
  const sidebarToggleIconStyle = "text-highlighter-theme cursor-pointer"

  return (
    <>
      {isOpen ? (
        <RiMenuUnfold2Line
          size={22}
          className={sidebarToggleIconStyle}
          onClick={toggleOpen}
        />
      ) : (
        <RiMenuFold2Line
          size={22}
          className={sidebarToggleIconStyle}
          onClick={toggleOpen}
        />
      )}
    </>
  );
}

export default SidebarToggler;