import React from "react";
import styled from "styled-components";

export const BreakerContainer = () => {
  return (
    <Container>
      <Breaker left="0%" top="0%" />
      <Breaker />
    </Container>
  );
};

const Container = styled.div`
  height: 5rem;
  width: 100vw;
  position: relative;
  transform: translate(0, -50%);
`;

const Breaker = styled.div`
  height: 50%;
  width: 50vw;
  position: absolute;
  background: #181818;
  left: ${(props) => props.left || "50%"};
  top: ${(props) => props.top || "50%"};
`;