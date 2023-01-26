import React from "react";
import { useEffect } from "react";

// Icons
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

// Custom Hooks
import useLocalStorage from "../../hooks/useLocalStorage";

export default function ThemeChanger() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "_pageTheme",
    defaultDark ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  return (
    <>
      {theme === "light" ? (
        <BsMoonStarsFill
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      ) : (
        <BsFillSunFill
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      )}
    </>
  );
}
