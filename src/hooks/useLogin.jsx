import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function useLogin() {
  const [isDisable, setIsDisable] = useState(false)
  const navigate = useNavigate();
  const { reset } = useForm();

  const handleLogin = async (data) => {
    setIsDisable(true);
    try {
      const response = await axios.post(import.meta.env.VITE_LOGIN, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsDisable(false);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        toast.success("login successful");
        navigate("/");
      } else {
        toast.error("login failed");
      }
    } catch (error) {
      toast.error("An error occurred during login.");
      console.error(error);
    }
    reset();
  };
  return { isDisable, handleLogin };
}

export { useLogin };

