import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Button/Button";
import { Video } from "../components/Video/Video";

export const OnLoad = () => {
  const [login, setLogin] = useState(false);

  const handleClick = () => {
    setLogin(true);
  };
  return (
    <Wrapper>
      {!login ? (
        <Video>
          <Overlay>
            <h1>Hello</h1>
            <Button title="EnterS" onClick={handleClick} />
          </Overlay>
        </Video>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10;
  bottom: 0;
  z-index: 999;
`;

const Overlay = styled.div``;

const NewWrapper = styled(Wrapper)`
  top: 50;
`;
