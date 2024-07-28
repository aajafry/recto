import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function useSignup() {
    const [isDisable, setIsDisable] = useState(false)
    const navigate = useNavigate();
     const {
       reset,
     } = useForm();
     
    const handleSignup = async (data) => {
      setIsDisable(true);
      try {
        const response = await axios.post(import.meta.env.VITE_SIGNUP, data);
        setIsDisable(false);

        if (response.status === 200) {
          toast.success("signup successful");
          navigate("/login");
        } else {
          toast.error("signup failed");
        }
      } catch (error) {
        toast.error("An error occurred during signup.");
        console.error(error);
      }
      reset();
    };

    return { isDisable, handleSignup };
}

export { useSignup };

