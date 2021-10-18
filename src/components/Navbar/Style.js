/* eslint-disable no-undef */
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  position: absolute;
  width: 100%;
  height: auto;
  overflow: hidden;
  top: 0;
`;

export const ListContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.navFont};
  text-decoration: none;
  list-style: none;
  margin: 0px 20px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 24px 5px;
  border-bottom: 4px solid transparent;
  &:hover {
    border-bottom: 4px solid white;
  }

  &:active {
    border-bottom: 4px solid white;
  }
`;
