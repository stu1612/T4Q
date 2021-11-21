// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React, { useContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./contexts/ThemeContext";
import { GlobalStyles } from "./styles/Global";
import { lightTheme, darkTheme } from "./styles/Theme";
import { Navbar } from "./components/Navbar/Navbar";
import { AppLoading } from "./components/OnPage_Loading/index";

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

  // return !isLoading ? (
  //   <ThemeProvider theme={selectedTheme}>
  //     <GlobalStyles />
  //     <Navbar />
  //   </ThemeProvider>
  // ) : (
  //   <AppLoading />
  // );

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
