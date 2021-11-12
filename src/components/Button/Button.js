import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = ({ title, bgColor, ...buttonProps }) => {
  return (
    <Btn
      {...buttonProps}
      whileHover={{
        background: "firebrick",
        borderColor: "firebrick",
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
      bgColor={bgColor}
    >
      {title}
    </Btn>
  );
};

const Btn = styled(motion.button)`
  position: relative;
  border: 1px solid;
  border-radius: 25px;
  border-color: bgColor;
  max-width: 200px;
  padding: 1rem 2rem;
  background: bgColor;
  letter-spacing: 0.13rem;
  overflow: hidden;
  max-height: 50px;
  color: #fffafa;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
`;
