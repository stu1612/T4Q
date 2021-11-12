import React from "react";
import styled from "styled-components";
import { Footer } from "../Footer/index";

export const Layout = ({ children }) => {
  return (
    <Container>
      {children}
      <Sponsors>SPONSORS</Sponsors>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  background: ${({ theme }) => theme.shadedBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
`;

const Sponsors = styled.div`
  background: yellow;
`;
