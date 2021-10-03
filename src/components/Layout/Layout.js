import React from "react";
import { Navigation } from "../../Navigation";
import { GlobalStyles } from "../../styled/Global";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";

export const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeSwitch />
      <Navigation />
    </>
  );
};
