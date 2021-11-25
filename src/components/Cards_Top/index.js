import React from "react";
import styled from "styled-components";

export const CardsTop = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  background: yellow;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;
