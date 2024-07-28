import { useForm } from "react-hook-form";
import Button from "../atom/Button";
import { useLogin } from "../hooks/useLogin";
import Input from "../molecules/Input";
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "../utility/zodSchema/loginSchema";

function LoginForm() {
  const { isDisable, handleLogin } = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="w-full flex flex-col gap-3"
    >
      <Input
        type="email"
        name="email"
        placeholder="Email"
        register={register}
        errors={errors}
      />
      <Input
        type="password"
        name="password"
        placeholder="password"
        register={register}
        errors={errors}
      />
      <Button
        style={`${
          isDisable && "cursor-not-allowed"
        } py-2 px-4 w-full bg-emerald-400 text-white font-semibold rounded-md hover:bg-highlighter-theme focus:outline-none focus:shadow-outline hover:drop-shadow-md common-transition`}
        disable={isDisable}
      >
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
