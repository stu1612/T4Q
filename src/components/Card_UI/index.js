import React from "react";
import styled from "styled-components";

import image from "../../assets/images/cards/mens.png";

export const Card = () => {
  return (
    <Container>
      <ImageWrapper>
        <CardImage src={image} />
        <Circle>
          <TextWrapper>
            <Title>Herr</Title>
            <Text>Läs Mer</Text>
          </TextWrapper>
        </Circle>
      </ImageWrapper>
    </Container>
  );
};

const Container = styled.div``;

const Circle = styled.div`
  clip-path: circle(50% at 50% 50%);
  background-color: ${({ theme }) => theme.svg};
  position: absolute;
  height: 100px;
  width: 100px;
  bottom: -60px;
  right: -60px;
  transition: transform 0.7s ease-out;
  transform: scale(1);
  transform-origin: right;
  pointer-events: none;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  opacity: 0;
  transition: all 1s ease-out;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-family: "Ubuntu", sans-serif;
  font-size: clamp(0.5rem, 1vw, 1.3rem);
  color: #fafafa;
  font-weight: 200;
  text-transform: uppercase;
`;
const Text = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: clamp(0.3rem, 0.3vw, 0.8rem);
  color: #fafafa;
  font-weight: 100;
  text-transform: lowercase;
`;

const CardImage = styled.div`
  background-image: url(${image});
  background-size: contain;
  background-origin: border-box;
  background-position-x: 50%;
  background-position-y: -2rem;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  transition: transform 1s ease-out;
  background-color: ${({ theme }) => theme.cards};
  background-blend-mode: color-burn;
  transform: scale(1.4);
  filter: saturate(0.5);
  cursor: pointer;
  &:hover {
    transform: scale(1.6);
  }
`;

const ImageWrapper = styled.div`
  width: 250px;
  height: 50vh;
  overflow: hidden;
  border-radius: 8px;
  display: inline-block;
  position: relative;
  transition: transform 1s ease-out;

  &:hover {
    ${Circle} {
      transform: scale(3);
      transform-origin: right;
    }
    ${TextWrapper} {
      opacity: 1;
    }
  }
`;
