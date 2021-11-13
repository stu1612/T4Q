import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button } from "../components/Button/Button";
import { Video } from "../components/Video/Video";

export const Opening = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/hem");
  };
  return (
    <Wrapper>
      <Video />
      <Overlay>
        <h1>Team Fourth Quarter</h1>
        <Button title="Välkommen" onClick={handleClick} />
      </Overlay>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 20;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
