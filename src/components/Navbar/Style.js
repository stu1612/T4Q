/* eslint-disable no-undef */
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  position: absolute;
  width: 100%;
  height: "100%";
  overflow: hidden;
  top: 0;
`;

export const ListContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: "row";
  align-items: "center";
  flex-grow: 1;
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

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: flex;
    height: 3px;
    left: 50%;
    border-radius: 16px;
    position: absolute;
    background: ${({ theme }) => theme.borderColor};
    transition: width 0.2s ease 0s, left 0.2s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }

  /* &:hover {
    border-bottom: 3px solid white;
  } */

  /* &:active {
    border-bottom: 3px solid white;
  } */
`;
