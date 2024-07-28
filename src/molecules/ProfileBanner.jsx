import PropTypes from "prop-types";
import Button from "../atom/Button";
import Img from "../atom/Img";

function ProfileBanner({ user }) {
  const cursorIsDisable = true;
  return (
    <div className="mt-4 mb-16 h-32 relative border-[1px] border-gray-400 rounded-md primary-bg-theme thirdary-text-theme">
      <Button
        style={`${
          cursorIsDisable && "cursor-not-allowed"
        } py-1 px-2 text-sm font-semibold absolute right-2 top-8 transform -translate-x-2 -translate-y-4 border-[1px] border-gray-400 hover:border-emerald-500 rounded-md common-transition`}
        disabled={cursorIsDisable}
      >
        Edit Profile
      </Button>

      <Img
        src={`${user?.image ? user?.image : "/admin.jpg"}`}
        alt={user?.name}
        style="h-24 w-24 object-cover border-[2px] border-highlighter-theme rounded-full absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-2/4"
      />
    </div>
  );
}

ProfileBanner.propTypes = {
  user: PropTypes.object
};

export default ProfileBanner;
