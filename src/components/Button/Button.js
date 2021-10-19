import React from "react";
import { BUTTON } from "./Style.js";

export const Button = ({ title }) => (
  <BUTTON whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    {title}
  </BUTTON>
);
