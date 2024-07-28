import axios from "axios";
import { useEffect, useState } from "react";

function useFetchUser() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUser = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_PROFILE, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        });
        setCurrentUser(response.data.user);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user", error);
        setCurrentUser(null);
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  return {
    currentUser,
    loading
  };
}

export { useFetchUser };

