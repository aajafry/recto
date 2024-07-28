import Heading from "../atom/Heading";
import AuthQueryNavigator from "../molecules/AuthQueryNavigator";
import Divider from "../molecules/Divider";
import Footer from "../organisms/Footer";
import LoginForm from "../organisms/LoginForm";
import SocialAuthProvider from "../organisms/SocialAuthentication";

function Login() {
  return (
    <main className="h-screen flex-center flex-col">
      <div className="flex-1 w-[80dvw] flex-center flex-col">
        <Heading
          label="Login with Recto"
          style="text-highlighter-theme font-semibold text-3xl text-center"
        />
        <div className="mt-6 flex-center flex-col md:flex-row gap-4 h-auto w-full">
          <div className="w-full flex flex-col gap-3">
            <LoginForm />
            <AuthQueryNavigator currentForm="login" />
          </div>
          <Divider />
          <div className="w-full flex flex-col gap-3">
            <SocialAuthProvider />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Login;
