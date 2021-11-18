/* eslint-disable no-undef */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// DESKTOP STYLES
export const Nav = styled(motion.nav)`
  background: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  width: 100%;
  overflow: hidden;
  top: 0;
  z-index: 10;
`;

export const NavHeader = styled.header`
  background: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  padding: 0 6px;
  height: 73px;
  @media (max-width: 1024px) {
    height: 68px;
  }
  @media (max-width: 768px) {
    height: 60px;
  }
`;

export const NavContainer = styled.div`
  background: ${({ theme }) => theme.primary};
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

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.navFont};
  font-family: "Sora", sans-serif;
  font-size: 14px;
  font-size: 0.875rem;
  line-height: 1.04;
  text-decoration: none;
  list-style: none;
  margin: 0px 6px;
  display: flex;
  align-items: center;
  height: 73px;
  font-weight: 800;
  padding: 0 6px;
  text-transform: uppercase;
  position: relative;
  @media (max-width: 1024px) {
    height: 68px;
  }

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: flex;
    height: 3px;
    left: 50%;
    border-radius: 16px;
    position: absolute;
    background: ${({ theme }) => theme.color};
    transition: width 0.2s ease 0s, left 0.2s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }

  /* &:active {
    border-bottom: 3px solid white;
  } */
`;

export const Toggler = styled.div`
  padding: 0 12px;
  display: flex;
  align-items: center;
`;
