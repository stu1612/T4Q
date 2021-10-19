/* eslint-disable no-undef */
import styled from "styled-components";
import { Link } from "react-router-dom";

// DESKTOP STYLES
export const NAV = styled.nav`
  background: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  overflow: hidden;
  top: 0;
  z-index: 10;
`;

export const NAV_HEADER = styled.header`
  background-color: #c70101;
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

// IMAGE styling for Logo
export const IMAGE = styled.img`
  width: 73px;
  height: 73px;
  padding: 6px 0;
  object-fit: contain;
  @media (max-width: 1024px) {
    width: 68px;
    height: 68px;
  }
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const NAV_CONTAINER = styled.div`
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

export const TOGGLE_NAV = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
`;

export const DESK_NAV_LINKS = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: "row";
  align-items: "center";
  flex-grow: 1;
  @media (max-width: 768px) {
    display: none;
  }
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
    background: ${({ theme }) => theme.borderSharp};
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

export const TOGGLE_THEME = styled.div`
  padding: 0 12px;
  display: flex;
  align-items: center;
`;

// MOBILE STYLES
export const MOBILE_CONTAINER = styled.div`
  position: fixed;
  top: 73px;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  z-index: -10;
  background: ${({ theme }) => theme.background};

  @media (max-width: 1024px) {
    top: 68px;
  }
  @media (max-width: 768px) {
    top: 60px;
  }
`;

export const MOBILE_WRAPPER = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MOBILE_CONTACT = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.borderLight};
`;

export const MOB_LINKS = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const MOB_LINK = styled(Link)``;

export const WRAPPER = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
