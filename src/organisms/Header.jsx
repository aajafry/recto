import { IoIosNotifications } from "react-icons/io";
import AvatarImage from "../molecules/AvatarImage";
import AvaterMenu from "../molecules/AvaterMenu";
import Logout from "../molecules/Logout";
import SidebarToggler from "../molecules/SidebarToggler";
import ThemeSwitcher from "../molecules/ThemeSwitcher";
import { useAvaterMenu } from "../hooks/useAvaterMenu";

function Header() {
  const { showMenu, setShowMenu, handleAvatarClick } = useAvaterMenu();
  return (
    <header className="absolute top-0 right-0 w-full flex-initial flex items-center justify-between py-2 px-4 shadow-md primary-bg-theme thirdary-text-theme">
      <SidebarToggler />
      <div className="flex items-center gap-4">
        <IoIosNotifications
          size={22}
          className="text-highlighter-theme cursor-pointer"
        />
        <ThemeSwitcher />
        <div className="relative inline-block">
          <AvatarImage handleAvatarClick={handleAvatarClick} />
          { showMenu && <AvaterMenu setShowMenu={setShowMenu} /> }
        </div>
        <Logout />
      </div>
    </header>
  );
}

export default Header;
