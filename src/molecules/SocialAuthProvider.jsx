import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "../atom/Icon";
import Paragraph from "../atom/Paragraph";

function SocialAuthProvider({ provider, icon, themeStyle }) {
  return (
    <Link
      to={`${
        import.meta.env.VITE_SERVER_ORIGIN
      }/api/auth/${provider.toLowerCase()}`}
      className={`py-2 px-4 w-full flex items-center gap-4 font-semibold rounded-md border-[1px] border-highlighter-theme ${themeStyle} hover:drop-shadow-md common-transition`}
    >
      <Icon icon={icon} size={24} style="" />
      <Paragraph>
        Continune with {provider.charAt(0).toUpperCase() + provider.slice(1)}
      </Paragraph>
    </Link>
  );
}


SocialAuthProvider.propTypes = {
  provider: PropTypes.string,
  icon: PropTypes.string,
  themeStyle: PropTypes.string,
};

export default SocialAuthProvider;
