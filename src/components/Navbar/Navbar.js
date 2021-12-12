import React, { useContext, useState, useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { useViewportScroll } from "framer-motion";
// import { AppRoutes } from "../../routes/Routes";
import { DesktopNavigation } from "../DesktopNavigation/index";
import { Nav, NavContainer, ToggleNavigation, Toggler } from "./Style";
import { HamburgerMenu } from "../Hamburger/Hamburger";
import { SideBarNavigation } from "../MobileNavigation";
import { NextGame } from "../Next_Game";

export const Navbar = () => {
  const { themeToggler } = useContext(ThemeContext);
  const [open, isOpen] = useState(false);

  const { scrollY } = useViewportScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    return scrollY.onChange(() => updateScrollPos());
  });

  const updateScrollPos = () => {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  };

  // Remove hide scroll bar functionality when screensize is less than 1024px
  let scrollAnim = {};
  const isMobile = window.innerWidth < 1024 || open;
  if (!isMobile) {
    scrollAnim = {
      hidden: { opacity: 0 },
      show: {
        opacity: 0,
        transition: { ease: "easeOut", type: "spring", duration: 2 },
      },
    };
  }

  return (
    // <AppRoutes>
    <Nav variants={scrollAnim} animate={hidden ? "hidden" : "visible"}>
      <NavContainer>
        <ToggleNavigation>
          <HamburgerMenu open={open} isOpen={isOpen} />
        </ToggleNavigation>
        {!open ? (
          <DesktopNavigation />
        ) : (
          <SideBarNavigation open={open} isOpen={isOpen} />
        )}
        <Toggler>
          <NextGame />
          <ThemeToggler themeToggler={themeToggler} />
        </Toggler>
      </NavContainer>
    </Nav>
    // </AppRoutes>
  );
};
