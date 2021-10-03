import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
// import { ThemeToggler } from "./components/ThemeToggler/ThemeToggler";
import { ThemeContext } from "./contexts/ThemeContext";
import { Navigation } from "./Navigation";
import { GlobalStyles } from "./styles/Global";
import { lightTheme, darkTheme } from "./styles/Theme";

function App() {
  const { theme, themeToggler } = useContext(ThemeContext);
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={selectedTheme}>
      <>
        <GlobalStyles />
        {/* <ThemeToggler themeToggler={themeToggler} /> */}
        <Navigation />
      </>
    </ThemeProvider>
  );
}

export default App;
