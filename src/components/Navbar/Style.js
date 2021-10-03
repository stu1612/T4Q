/* eslint-disable no-undef */
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;

export const ListContainer = styled.ul`
  padding: 30px 0px;
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  list-style: none;
  margin: 0px 40px;
`;
