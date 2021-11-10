import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "../components/Button/Button";

export const OnLoad = () => {
  return (
    <Wrapper>
      <h1>Hello</h1>
      <Button title="Enter" onClick={null} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: yellow;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  position: absolute;
`;
