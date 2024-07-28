import { IoMdCloseCircleOutline } from "react-icons/io";
import Logo from "../atom/Logo";
import { useSidebar } from "../contexts/SidebarContext";

function SidebarHeader() {
  const { setIsOpen } = useSidebar();
  return (
    <div className="py-3 px-4 flex justify-between items-center">
      <Logo />
      <IoMdCloseCircleOutline
        size={22}
        className="text-highlighter-theme cursor-pointer"
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
}

export default SidebarHeader