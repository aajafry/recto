import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../atom/Button";
import { useSignup } from "../hooks/useSignup";
import Input from "../molecules/Input";
import { signupSchema } from "../utility/zodSchema/signupSchema";

function SignupForm() {
  const { isDisable, handleSignup } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(handleSignup)}
      className="w-full flex flex-col gap-3"
    >
      <Input
        type="text"
        name="name"
        placeholder="Name"
        register={register}
        errors={errors}
      />
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
        Signup
      </Button>
    </form>
  );
}

export default SignupForm;
