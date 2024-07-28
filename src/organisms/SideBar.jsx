import { useSidebar } from "../contexts/SidebarContext";
import { menus } from "../data/data";
import SidebarHeader from "../molecules/SidebarHeader";
import SidebarMenu from "../molecules/SidebarMenu";

function SideBar() {
  const { isOpen } = useSidebar();
  return (
    <aside
      className={`fixed ${
        isOpen ? "w-64" : "w-0"
      } h-dvh flex flex-col font-medium capitalize primary-bg-theme thirdary-text-theme overflow-x-hidden overflow-y-auto common-transition`}
    >
      <SidebarHeader />
      <div className="flex flex-col gap-2 my-6">
        {menus.map((menu, index) => {
          const { title, items } = menu;
          return <SidebarMenu key={index} title={title} items={items} />;
        })}
      </div>
    </aside>
  );
}

export default SideBar