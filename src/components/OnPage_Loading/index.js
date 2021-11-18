import React from "react";
import styled from "styled-components";
import { SpinnerRoundOutlined } from "spinners-react";

export const AppLoading = () => {
  return (
    <Container>
      <Text>Loading</Text>
      <SpinnerRoundOutlined color="#fff" />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
`;

const Text = styled.p`
  font-family: "Sora", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  color: #71797e;
  font-size: clamp(4rem, 1vw + 1rem, 1rem);
  font-weight: 600;
`;
