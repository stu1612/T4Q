/* eslint-disable no-undef */
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NAV = styled.nav`
  background: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  position: absolute;
  width: 100%;
  overflow: hidden;
  top: 0;
`;

export const NAV_HEADER = styled.header`
  display: flex;
  align-items: center;
`;

export const DESK_NAV_LINKS = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: "row";
  align-items: "center";
  flex-grow: 1;
`;

export const NAV_LINK = styled(Link)`
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

  /* &:active {
    border-bottom: 3px solid white;
  } */
`;

export const TOGGLER = styled.div``;
