import React, { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { SwitchRoutes } from "../../routes/Switch";
import { Button } from "../Button/Button";
import { FiChevronRight } from "react-icons/fi";

import {
  NAV,
  NAV_HEADER,
  NAV_CONTAINER,
  TOGGLE_NAV,
  DESK_NAV_LINKS,
  NAV_LINK,
  TOGGLE_THEME,
  MOBILE_CONTAINER,
  MOBILE_CONTACT,
  MOBILE_WRAPPER,
  MOB_LINKS,
  MOB_LINK,
  WRAPPER,
} from "./Style";
import { LOGO } from "./Logo/Logo";
import { HamburgerMenu } from "./Hamburger/Hamburger";

export const Navbar = () => {
  const { theme, themeToggler } = useContext(ThemeContext);
  const [open, isOpen] = useState(false);

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
          {!open ? (
            <DESK_NAV_LINKS>
              <NAV_LINK to="/">Hem</NAV_LINK>
              <NAV_LINK to="/herr">Herr</NAV_LINK>
              <NAV_LINK to="/dam">Dam</NAV_LINK>
              <NAV_LINK to="/junior">Junior</NAV_LINK>
            </DESK_NAV_LINKS>
          ) : (
            <MOBILE_CONTAINER>
              <MOBILE_WRAPPER>
                <MOBILE_CONTACT>
                  <Button title="kontakt" />
                </MOBILE_CONTACT>
                <MOB_LINKS>
                  <WRAPPER>
                    <MOB_LINK to="/">Hem</MOB_LINK>
                    <FiChevronRight />
                  </WRAPPER>
                </MOB_LINKS>
              </MOBILE_WRAPPER>
            </MOBILE_CONTAINER>
          )}

          <TOGGLE_THEME>
            <ThemeToggler themeToggler={themeToggler} />
          </TOGGLE_THEME>
        </NAV_CONTAINER>
        {/* {open ? (
          <MOBILE_CONTAINER>
            <MOBILE_WRAPPER>
              <MOBILE_CONTACT>
                <Button title="kontakt" />
              </MOBILE_CONTACT>
              <MOB_LINKS>
                <WRAPPER>
                  <MOB_LINK to="/">Hem</MOB_LINK>
                  <FiChevronRight />
                </WRAPPER>
                <WRAPPER>
                  <MOB_LINK to="/">Herr</MOB_LINK>
                  <FiChevronRight />
                </WRAPPER>
                <WRAPPER>
                  <MOB_LINK to="/">Dam</MOB_LINK>
                  <FiChevronRight />
                </WRAPPER>
                <WRAPPER>
                  <MOB_LINK to="/">Junior</MOB_LINK>
                  <FiChevronRight />
                </WRAPPER>
              </MOB_LINKS>
            </MOBILE_WRAPPER>
          </MOBILE_CONTAINER>
        ) : null} */}
      </NAV>
      <SwitchRoutes />
    </Router>
  );
};
