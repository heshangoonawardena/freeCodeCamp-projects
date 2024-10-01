import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./styles.css";

const ThemeChanger = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="theme-changer-container">
        <p>
          Theme is <span className="theme-span">{theme}</span>
        </p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default ThemeChanger;
