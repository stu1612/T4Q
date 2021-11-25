import React from "react";
import styled from "styled-components";
import { FaBasketballBall } from "react-icons/fa";

export const ThemeToggler = (props) => {
  const { themeToggler } = props;
  return <Icon onClick={themeToggler} />;
};

const Icon = styled(FaBasketballBall)`
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 20px;
  transition: all 0.5s ease-out;

  &:hover {
    transform: scale(1.2) rotate(360deg);
    /* transition: all 0.5s ease-out; */
  }
`;
