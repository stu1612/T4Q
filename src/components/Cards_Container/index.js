import React from "react";
import styled from "styled-components";
import { Card } from "../Card_UI";
import { TeamCards } from "../../Model/Cards";

export const Cards = () => {
  return (
    <Container>
      {TeamCards.map((card) => (
        <Card
          image={card.image}
          alt={card.alt}
          title={card.title}
          text={card.text}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  min-height: 80vh;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
`;
