import { createContext, useState } from "react";
// import { ThemeProvider } from "styled-components";
// import { Themes } from "../styles/Theme";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const THEMES = {
    LIGHT: "light",
    DARK: "dark",
  };
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const themeToggler = () => {
    theme === THEMES.LIGHT ? setTheme(THEMES.DARK) : setTheme(THEMES.LIGHT);
  };
  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      {children}
    </ThemeContext.Provider>
  );
};
