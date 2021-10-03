import React from "react";
import { FaBasketballBall } from "@react-icons/all-files/fa/FaBasketballBall";

export const ThemeToggler = (props) => {
  const { themeToggler } = props;
  return <FaBasketballBall onClick={themeToggler} />;
};
