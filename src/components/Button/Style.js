import styled from "styled-components";
import { motion } from "framer-motion";

export const BUTTON = styled(motion.button)`
  position: relative;
  border: 1px solid;
  border-radius: 25px;
  border-color: ${({ theme }) => theme.primary};
  max-width: 200px;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.primary};
  letter-spacing: 0.13rem;
  overflow: hidden;
  max-height: 50px;
  color: ${({ theme }) => theme.navFont};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`;
