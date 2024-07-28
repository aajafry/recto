import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Heading from "../atom/Heading";
import MenuList from "../atom/MenuList";

function SidebarMenu({ title, items }) {
  return (
    <ul className="last:border-t-[1px] last:border-slate-300 last:dark:border-slate-700">
      {title && <Heading label={title} style="mb-2 px-4" />}
      {items.map((item, index) => (
        <NavLink key={index} to={item.href}>
          <MenuList
            icon={item.icon}
            label={item.label}
            style="flex items-center gap-4 py-2 px-4 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-highlighter-theme"
          />
        </NavLink>
      ))}
    </ul>
  );
}

SidebarMenu.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

export default SidebarMenu;
