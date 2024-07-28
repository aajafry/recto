import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { useTheme } from "../contexts/ThemeContext";

function ThemeSwitcher() {
  const { isDark, toggleTheme } = useTheme();
  const themeSwithchIconStyle = "text-highlighter-theme cursor-pointer";
  return (
    <>
      {isDark ? (
        <IoMdSunny
          size={22}
          className={themeSwithchIconStyle}
          onClick={toggleTheme}
        />
      ) : (
        <BsFillMoonStarsFill
          size={22}
          className={themeSwithchIconStyle}
          onClick={toggleTheme}
        />
      )}
    </>
  );
}

export default ThemeSwitcher;
