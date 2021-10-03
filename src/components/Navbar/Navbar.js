import React, { useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { SwitchRoutes } from "../../routes/Switch";

import { Nav } from "./NavbarStyle";
import { Logo } from "../Logo/Logo";

export const Navbar = () => {
  const { theme, themeToggler } = useContext(ThemeContext);
  return (
    <Router>
      <Nav>
        <Logo />
        <ul>
          <Link to="/">Hem</Link>
          <Link to="/herr">Herr</Link>
          <Link to="/dam">Dam</Link>
          <Link to="/junior">Junior</Link>
        </ul>
        <ThemeToggler themeToggler={themeToggler} />
      </Nav>
      <SwitchRoutes />
    </Router>
  );
};
