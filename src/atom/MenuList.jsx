import PropTypes from "prop-types";
import Icon from "./Icon";
import Paragraph from "./Paragraph";

function MenuList({ icon: ListIcon, label, style }) {
  return (
    <li className={style}>
      <Icon
        icon={ListIcon}
        size={22}
        style="text-highlighter-theme cursor-pointer"
      />
      <Paragraph>{label}</Paragraph>
    </li>
  );
}


MenuList.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.string
}

export default MenuList;
