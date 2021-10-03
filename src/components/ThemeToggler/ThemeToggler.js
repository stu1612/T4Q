import React from "react";
import Button from "../Button/Button";

export const ThemeToggler = (props) => {
  const { themeToggler } = props;
  return <Button onClick={themeToggler}>Toggle</Button>;
};
