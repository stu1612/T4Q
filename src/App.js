import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./contexts/ThemeContext";
import { GlobalStyles } from "./styles/Global";
import { lightTheme, darkTheme } from "./styles/Theme";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const { theme, themeToggler } = useContext(ThemeContext);
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
