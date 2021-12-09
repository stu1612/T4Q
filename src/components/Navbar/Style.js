/* eslint-disable no-undef */
import styled from "styled-components";
import { motion } from "framer-motion";

// DESKTOP STYLES
export const Nav = styled(motion.nav)`
  height: 7vh;
  /* background: ${({ theme }) => theme.navBg}; */
  /* background: #222831; */
  background: #181818;
  color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  overflow: hidden;
  top: 0;
  z-index: 10;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  width: 80%;
  margin: 0 3rem;
  height: 100%;

  @media (max-width: 768px) {
    margin: 0;
    width: 90%;
  }
`;

export const ToggleNavigation = styled.div`
  /* @media (min-width: 1025px) {
    display: none;
  } */
`;

export const DesktopNavigationLinks = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: "row";
  align-items: "center";
  flex-grow: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Toggler = styled.div`
  padding: 0 12px;
  display: flex;
  align-items: center;
`;
