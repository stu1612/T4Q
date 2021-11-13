import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = ({ title, bgColor, ...buttonProps }) => {
  return (
    <Btn {...buttonProps} whileTap={{ scale: 0.9 }}>
      {title}
    </Btn>
  );
};

const Btn = styled(motion.button)`
  position: relative;
  border: 1px solid;
  border-radius: 25px;
  border-color: #d3d5d7;
  max-width: 200px;
  padding: 1rem 2rem;
  background: transparent;
  letter-spacing: 0.13rem;
  overflow: hidden;
  max-height: 50px;
  color: #fffafa;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  transition: ease-out 0.2s;

  &:hover {
    background-color: #c70101;
    border-color: #c70101;
  }
`;
