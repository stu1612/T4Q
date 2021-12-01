import React from "react";
import styled from "styled-components";
import { Card } from "../Card_UI";
import { TeamCards } from "../../Model/Cards";

export const Cards = () => {
  return (
    <Container>
      {TeamCards.map((card) => (
        <Card
          image={card.img}
          alt={card.alt}
          title={card.title}
          text={card.text}
        />
      ))}
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 3rem; */
  /* background: yellow; */
`;
