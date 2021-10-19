import React, { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { SwitchRoutes } from "../../routes/Switch";

import {
  NAV,
  NAV_HEADER,
  NAV_CONTAINER,
  TOGGLE_NAV,
  DESK_NAV_LINKS,
  NAV_LINK,
  TOGGLE_THEME,
} from "./Style";
import { LOGO } from "../Logo/Logo";
import { HamburgerMenu } from "../Hamburger/Hamburger";

export const Navbar = () => {
  const { theme, themeToggler } = useContext(ThemeContext);
  const [open, isOpen] = useState(false);

  const container = {
    background: "yellow",
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  };
  return (
    <Router>
      <NAV>
        <NAV_HEADER>
          <LOGO />
        </NAV_HEADER>
        <NAV_CONTAINER>
          <TOGGLE_NAV>
            <HamburgerMenu open={open} isOpen={isOpen} />
          </TOGGLE_NAV>
          <DESK_NAV_LINKS>
            <NAV_LINK to="/">Hem</NAV_LINK>
            <NAV_LINK to="/herr">Herr</NAV_LINK>
            <NAV_LINK to="/dam">Dam</NAV_LINK>
            <NAV_LINK to="/junior">Junior</NAV_LINK>
          </DESK_NAV_LINKS>
          <TOGGLE_THEME>
            <ThemeToggler themeToggler={themeToggler} />
          </TOGGLE_THEME>
        </NAV_CONTAINER>
      </NAV>
      {/* <div style={container}>
        <h2>Sup</h2>
      </div> */}

      <SwitchRoutes />
    </Router>
  );
};
