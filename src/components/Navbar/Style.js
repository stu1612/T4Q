/* eslint-disable no-undef */
import styled from "styled-components";
import { motion } from "framer-motion";

// DESKTOP STYLES
export const Nav = styled(motion.nav)`
  background: ${({ theme }) => theme.navBg};
  color: #f8f8f8;
  display: flex;
  align-items: center;
  position: sticky;
  width: 100%;
  overflow: hidden;
  top: 0;
  z-index: 10;
  padding: 10px;
`;

export const LogoContainer = styled.div`
  height: 73px;
  @media (max-width: 1024px) {
    height: 68px;
  }
  @media (max-width: 768px) {
    height: 60px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 20;
  width: 100%;
  height: 73px;
  @media (max-width: 1024px) {
    height: 68px;
  }
  @media (max-width: 768px) {
    height: 60px;
  }
`;

export const ToggleNavigation = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
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
