import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = ({ title }) => (
  <BUTTON whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <Text>{title}</Text>
  </BUTTON>
);

const BUTTON = styled(motion.button)`
  /* position: relative; */
  border: 1px solid;
  border-radius: 25px;
  border-color: ${({ theme }) => theme.button};
  max-width: 200px;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.button};
  letter-spacing: 0.13rem;
  /* overflow: hidden; */
  max-height: 50px;
  color: ${({ theme }) => theme.btnText};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
`;

const Text = styled.p`
  pointer-events: initial;
`;
