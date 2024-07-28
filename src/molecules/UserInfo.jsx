import PropTypes from "prop-types";
import Heading from "../atom/Heading";
import Link from "../atom/Link";
import Paragraph from "../atom/Paragraph";

const userInfoListStyle =
  "py-2 px-3 w-full border-[1px] border-gray-400 hover:border-highlighter-theme rounded-md primary-bg-theme thirdary-text-theme common-transition";

function UserInfo({user}) {
  return (
    <ul className="flex flex-col gap-4">
      <li className={userInfoListStyle}>
        <Heading label="Name" style="font-semibold" />
        <Paragraph style="text-sm">{user.name}</Paragraph>
      </li>
      <li className={userInfoListStyle}>
        <Heading label="Email" style="font-semibold" />
        <Link
          style="text-sm text-highlighter-theme font-semibold"
          href={`mailto:${user.email}`}
        >
          {user.email}
        </Link>
      </li>
    </ul>
  );
}

UserInfo.propTypes = {
  user: PropTypes.object,
};

export default UserInfo;