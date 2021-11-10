import React from "react";
import { Sling as Hamburger } from "hamburger-react";

export const HamburgerMenu = ({ open, isOpen }) => {
  return (
    <Hamburger
      rounded
      label="Show mobile menu"
      duration={0.3}
      size={20}
      direction={"left"}
      distance={"lg"}
      color="#fff"
      easing="ease-in"
      toggled={open}
      toggle={isOpen}
      onToggle={(toggled) => {
        if (toggled) {
          isOpen(true);
        } else {
          isOpen(false);
        }
      }}
    />
  );
};
