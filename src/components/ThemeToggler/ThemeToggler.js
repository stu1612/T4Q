import React from "react";
import styled from "styled-components";
import { FaBasketballBall } from "react-icons/fa";

export const ThemeToggler = (props) => {
  const { themeToggler } = props;
  return <Icon onClick={themeToggler} />;
};

const Icon = styled(FaBasketballBall)`
  color: ${({ theme }) => theme.text};
`;
