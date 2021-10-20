import React from "react";
import styled from "styled-components";
import { FaBasketballBall } from "@react-icons/all-files/fa/FaBasketballBall";

export const ThemeToggler = (props) => {
  const Icon = styled(FaBasketballBall)`
    color: ${({ theme }) => theme.text};
  `;

  const { themeToggler } = props;
  return <Icon onClick={themeToggler} />;
};
