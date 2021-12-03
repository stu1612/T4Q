import React from "react";
import logo from "../../assets/images/logo.png";
import styled from "styled-components";

export const Logo = () => {
  return <Image src={logo} alt="Logo" />;
};

export const Image = styled.img`
  height: 100%;
  object-fit: contain;
`;
