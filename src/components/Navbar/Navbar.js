import React, { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { SwitchRoutes } from "../../routes/Switch";

import { NAV, NAV_HEADER, DESK_NAV_LINKS, NAV_LINK, TOGGLER } from "./Style";
import { LOGO } from "../Logo/Logo";
import { HamburgerMenu } from "../Hamburger/Hamburger";

export const Navbar = () => {
  const { theme, themeToggler } = useContext(ThemeContext);
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
      <NAV>
        <NAV_HEADER>
          <LOGO />
          <HamburgerMenu open={open} isOpen={isOpen} />
        </NAV_HEADER>
        <DESK_NAV_LINKS>
          <NAV_LINK to="/">Hem</NAV_LINK>
          <NAV_LINK to="/herr">Herr</NAV_LINK>
          <NAV_LINK to="/dam">Dam</NAV_LINK>
          <NAV_LINK to="/junior">Junior</NAV_LINK>
        </DESK_NAV_LINKS>
        <TOGGLER>
          <ThemeToggler themeToggler={themeToggler} />
        </TOGGLER>
      </NAV>

      <SwitchRoutes />
    </Router>
  );
};
