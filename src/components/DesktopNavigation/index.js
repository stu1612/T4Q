import React from "react";
import { DesktopNavigationLinks, NavLink } from "./Style";

export const DesktopNavigation = () => {
  return (
    <DesktopNavigationLinks>
      <NavLink to="/hem">Hem</NavLink>
      <NavLink to="/herr">Herr</NavLink>
      <NavLink to="/dam">Dam</NavLink>
      <NavLink to="/junior">Junior</NavLink>
    </DesktopNavigationLinks>
  );
};
