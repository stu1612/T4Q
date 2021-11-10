import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Button/Button";

import { LoginContext } from "../contexts/LoginContext";

export const OnLoad = () => {
  const { enterApp, videoPlaying } = useContext(LoginContext);
  const [login, setLogin] = useState(false);

  const consoleTesting = () => {
    console.log("testing");
  };
  return (
    <>
      {login ? (
        <Wrapper>
          <h1 onClick={consoleTesting}>Hello</h1>
          <Button title="EnterS" onClick={consoleTesting} />
        </Wrapper>
      ) : null}
    </>
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
  z-index: 20;
  position: absolute;
`;

const NewWrapper = styled(Wrapper)`
  top: 50;
`;
