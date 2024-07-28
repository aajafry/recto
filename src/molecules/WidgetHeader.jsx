import PropTypes from "prop-types";
import Heading from "../atom/Heading";

function WidgetHeader({ icon: HeaderIcon, title }) {
  return (
    <div className="mb-3 flex items-center gap-4">
      {HeaderIcon && (
        <HeaderIcon size={20} className="text-highlighter-theme" />
      )}
      <Heading label={title} style="text-xl" />
    </div>
  );
}

WidgetHeader.propTypes = {
  icon: PropTypes.func,
  title: PropTypes.string,
}

export default WidgetHeader;
