import React from "react";
import styled from "styled-components";

export const Breaker = (props) => {
  return <Container />;
};

const Container = styled.div`
  height: 50%;
  width: 50vw;
  position: absolute;
  background: #181818;
  left: ${(props) => (props.left ? "0%" : "50%")};
  top: ${(props) => (props.top ? "0%" : "50%")};
`;
