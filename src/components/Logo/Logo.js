import React from "react";
import logo from "../../assets/images/logo.png";
import styled from "styled-components";

export const Logo = () => {
  return <Image src={logo} alt="Logo" />;
};

export const Image = styled.img`
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
