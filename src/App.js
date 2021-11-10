import React, { useContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./contexts/ThemeContext";
import { GlobalStyles } from "./styles/Global";
import { lightTheme, darkTheme } from "./styles/Theme";
import { Navbar } from "./components/Navbar/Navbar";
import { OnLoad } from "./pages/OnLoad";
import { LoginContextProvider } from "./contexts/LoginContext";

function App() {
  const { theme, themeToggler } = useContext(ThemeContext);
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return !isLoading ? (
    <LoginContextProvider>
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <OnLoad />
        <Navbar />
      </ThemeProvider>
    </LoginContextProvider>
  ) : (
    <div>
      <h3>Loading ...</h3>
    </div>
  );
}

export default App;
