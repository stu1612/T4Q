import styled from "styled-components";
import { Link } from "react-router-dom";

export const MobileContainer = styled.div`
  background: ${({ theme }) => theme.navBackground};
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

  @media (max-width: 1024px) {
    top: 68px;
  }
  @media (max-width: 768px) {
    top: 60px;
  }
`;

export const MobileNavigation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MobileContactLink = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d3d5d7;
  /* border-color: ${({ theme }) => theme.borderLight}; */
`;

export const MobileNavigationLinks = styled.ul`
  display: flex;
  flex-direction: column;
  /* background: ${({ theme }) => theme.background}; */
`;

export const MobLink = styled.li`
  color: ${({ theme }) => theme.text};
  font-family: "Sora", sans-serif;
  font-size: 14px;
  font-size: 0.875rem;
  line-height: 1.04;
  text-decoration: none;
  list-style: none;
  font-weight: 800;
  text-transform: uppercase;
`;

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid #d3d5d7;
  padding: 0 12px;
  cursor: pointer;
  text-decoration: none;
`;
