import { useState } from "react";

function useAvaterMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleAvatarClick = () => setShowMenu((prev) => !prev);

  return {
    showMenu,
    handleAvatarClick,
    setShowMenu,
  };
}

export { useAvaterMenu };
