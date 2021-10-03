import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { SwitchRoutes } from "../../routes/Switch";

import { Nav, ListContainer, NavLink } from "./Style";
import { Logo } from "../Logo/Logo";

export const Navbar = () => {
  const { theme, themeToggler } = useContext(ThemeContext);
  return (
    <Router>
      <Nav>
        <Logo />
        <ListContainer>
          <NavLink to="/">Hem</NavLink>
          <NavLink to="/herr">Herr</NavLink>
          <NavLink to="/dam">Dam</NavLink>
          <NavLink to="/junior">Junior</NavLink>
        </ListContainer>
        <ThemeToggler themeToggler={themeToggler} />
      </Nav>
      <SwitchRoutes />
    </Router>
  );
};
