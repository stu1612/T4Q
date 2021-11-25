import React from "react";
import styled from "styled-components";

import image from "../../assets/images/cards/mens.png";

export const Card = () => {
  return (
    <Container>
      <ImageWrapper>
        <CardImage src={image} />
        <Circle>
          <Text>Hello</Text>
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

const Text = styled.p`
  color: white;
  position: absolute;
  top: 20%;
  left: 50%;
  opacity: 0;
  transition: all 1s ease-out;
  transform: translate(-50%, -50%);
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
    ${Text} {
      opacity: 1;
    }
  }
`;
