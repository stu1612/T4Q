import React from "react";
import styled from "styled-components";

export const Card = () => {
  return (
    <Container>
      <h4>Card</h4>
    </Container>
  );
};

const Container = styled.div`
  height: 50vh;
  width: 250px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
