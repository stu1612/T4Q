import React, { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { SwitchRoutes } from "../../routes/Switch";
import { DesktopNavigation } from "../DesktopNavigation/index";

import {
  Nav,
  NavHeader,
  NavContainer,
  ToggleNavigation,
  TOGGLE_THEME,
} from "./Style";
import { Logo } from "../Logo/Logo";
import { HamburgerMenu } from "../Hamburger/Hamburger";
import { SideBarNavigation } from "../MobileNavigation";

export const Navbar = () => {
  const { themeToggler } = useContext(ThemeContext);
  const [open, isOpen] = useState(false);

  return (
    <Router>
      <Nav>
        <NavHeader>
          <Logo />
        </NavHeader>
        <NavContainer>
          <ToggleNavigation>
            <HamburgerMenu open={open} isOpen={isOpen} />
          </ToggleNavigation>
          {!open ? <DesktopNavigation /> : <SideBarNavigation />}
          <TOGGLE_THEME>
            <ThemeToggler themeToggler={themeToggler} />
          </TOGGLE_THEME>
        </NavContainer>
      </Nav>
      <SwitchRoutes />
    </Router>
  );
};
