import { socialAuthProviders } from "../data/data";
import SocialAuthProvider from "../molecules/SocialAuthProvider";

function SocialAuthentication() {
  return (
    <>
      {socialAuthProviders.map((provider, index) => (
        <SocialAuthProvider
          key={index}
          provider={provider.provider}
          icon={provider.icon}
          themeStyle={provider.themeStyle}
        />
      ))}
    </>
  );
}

export default SocialAuthentication;
