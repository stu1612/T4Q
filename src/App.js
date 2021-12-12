import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./contexts/ThemeContext";
import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/Theme";
// import { Navbar } from "./components/Navbar/Navbar";
// import { AppLoading } from "./components/OnPage_Loading/index";
// import { TopNavbar } from "./components/Navbar/Top_Navbar";
// import { AppRoutes } from "./routes/Routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Opening } from "./pages/index";
import { Hem } from "./pages/Hem";
import { Herr } from "./pages/Herr";
import { Dam } from "./pages/Dam";
import { Junior } from "./pages/Junior";
import { Nyheter } from "./pages/Nyheter";
import { ErrorPage } from "./pages/404";

function App() {
  const { theme } = useContext(ThemeContext);
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;
  // const [isLoading, setIsLoading] = useState(true);

  // const handleLoading = () => {
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("load", handleLoading);
  //   return () => window.removeEventListener("load", handleLoading);
  // }, []);

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
      {/* <TopNavbar />
      <AppRoutes /> */}
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Opening />} />
          <Route path="hem" element={<Hem />} />
          <Route path="/nyheter/:slug" element={<Nyheter />} />
          <Route path="/herr" element={<Herr />} />
          <Route path="/dam" element={<Dam />} />
          <Route path="/junior" element={<Junior />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
