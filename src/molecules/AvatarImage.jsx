import PropTypes from "prop-types";
import Img from "../atom/Img";
import Paragraph from "../atom/Paragraph";
import { useFetchUser } from "../hooks/useFetchUser";

function AvatarImage({ handleAvatarClick }) {
  const { loading, currentUser } = useFetchUser();

  return (
    <div className="relative inline-block">
      <div className="avatar w-9 h-9" onClick={handleAvatarClick}>
        {loading ? (
          <Paragraph style="text-sm font-semibold">loading...</Paragraph>
        ) : (
          <Img
            src={`${currentUser?.image ? currentUser?.image : "/admin.jpg"}`}
            alt={currentUser?.name}
            title={currentUser?.name}
            style="rounded-full w-full h-full object-cover cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

AvatarImage.propTypes = {
  handleAvatarClick: PropTypes.func,
};

export default AvatarImage;
