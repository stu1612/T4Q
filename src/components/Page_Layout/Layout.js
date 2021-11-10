import React from "react";
import styled from "styled-components";

export const Layout = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
      <Sponsors>SPONSORS</Sponsors>
      <Footer>FOOTER</Footer>
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
  position: absolute;
`;

const Sponsors = styled.div`
  background: yellow;
`;

const Footer = styled.footer`
  background: pink;
`;
