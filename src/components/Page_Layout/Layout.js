import React from "react";
import styled from "styled-components";
import { Footer } from "../Footer/index";
import { Partners } from "../Sponsors";
import { Navbar } from "../Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
      <Partners />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
`;
