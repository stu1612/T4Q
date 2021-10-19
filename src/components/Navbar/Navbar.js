import React, { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { SwitchRoutes } from "../../routes/Switch";

import { Nav, ListContainer, NavLink } from "./Style";
import { Logo } from "../Logo/Logo";
import { HamburgerMenu } from "../Hamburger/Hamburger";

export const Navbar = () => {
  const { theme, themeToggler } = useContext(ThemeContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [open, isOpen] = useState(false);

  const container = {
    background: "yellow",
    top: 100,
    right: 0,
    left: 0,
    bottom: 0,
    height: "100vh",
    width: "100vw",
  };
  return (
    <Router>
      <Nav>
        <Logo />
        <HamburgerMenu open={open} isOpen={isOpen} />
        {/* {open ? (
          <div style={container}>
            <h2>Hello</h2>
          </div>
        ) : (
          <ListContainer>
            <NavLink to="/">Hem</NavLink>
            <NavLink to="/herr">Herr</NavLink>
            <NavLink to="/dam">Dam</NavLink>
            <NavLink to="/junior">Junior</NavLink>
          </ListContainer>
        )} */}
        {/* <ListContainer>
          <NavLink to="/">Hem</NavLink>
          <NavLink to="/herr">Herr</NavLink>
          <NavLink to="/dam">Dam</NavLink>
          <NavLink to="/junior">Junior</NavLink>
        </ListContainer> */}

        <ThemeToggler themeToggler={themeToggler} />
      </Nav>

      <SwitchRoutes />
    </Router>
  );
};
