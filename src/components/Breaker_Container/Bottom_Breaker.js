import React from "react";
import { Container, Breaker } from "./style";

export const BottomBreaker = () => {
  return (
    <Container>
      <Breaker left="0%" />
      <Breaker left="50%" top="0%" />
    </Container>
  );
};
