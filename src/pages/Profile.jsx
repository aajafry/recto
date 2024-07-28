import Heading from "../atom/Heading";
import { useFetchUser } from "../hooks/useFetchUser";
import ProfileBanner from "../molecules/ProfileBanner";
import UserInfo from "../molecules/UserInfo";

function Profile() {
  const { loading, currentUser } = useFetchUser();
  
  return loading ? (
    <div className="h-full flex-center">
      <Heading label="Loading..." style="text-2xl animate-pulse" />
    </div>
  ) : currentUser ? (
    <div className="h-[calc(100%-1rem)]">
      <ProfileBanner user={currentUser} />
      <UserInfo user={currentUser} />
    </div>
  ) : (
    <div className="h-full flex-center">
      <Heading label="user not found!" style="text-2xl" />
    </div>
  );
}

export default Profile

