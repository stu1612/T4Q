import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Button/Button";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h2>Sorry ...something went wrong</h2>
      <Button title="Hem" onClick={() => navigate("/hem")} />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
