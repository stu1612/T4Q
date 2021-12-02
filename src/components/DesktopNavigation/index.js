import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const DesktopNavigation = () => {
  return (
    <DesktopNavigationLinks>
      <NavLink to="/hem">Hem</NavLink>
      <NavLink to="/herr">Herr</NavLink>
      <NavLink to="/dam">Dam</NavLink>
      <NavLink to="/junior">Junior</NavLink>
    </DesktopNavigationLinks>
  );
};

const DesktopNavigationLinks = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: "row";
  align-items: "center";
  flex-grow: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.navTxt};
  font-size: clamp(0.6rem, 1vw, 1.6rem);
  text-decoration: none;
  list-style: none;
  margin: 0px 6px;
  display: flex;
  align-items: center;
  height: 76px;
  font-weight: 700;
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
    background: ${({ theme }) => theme.borderLine};
    transition: width 0.2s ease 0s, left 0.2s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;
