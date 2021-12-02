/* eslint-disable no-undef */
import React from "react";
import styled from "styled-components";

export const Card = ({ image, alt, title, text }) => {
  console.log(image);
  return (
    <Container>
      <CardWrapper>
        <BackgroundImage src={image} alt={alt} />
        <Overlay>
          <h3>{title}</h3>
        </Overlay>
        <Circle>
          <TextWrapper>
            <p>{text}</p>
          </TextWrapper>
        </Circle>
      </CardWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6) 90%);
  h3 {
    position: absolute;
    bottom: 5%;
    color: #fff;
    left: 50%;
    transform: translate(-50%, -5%);
    opacity: 1;
    transition: opacity 0.7s ease-out;
  }
`;

const Circle = styled.div`
  clip-path: circle(50% at 50% 50%);
  background-color: ${({ theme }) => theme.svgBg};
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
  p {
    font-size: 8px;
    color: #fff;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease-out;
  transform: scale(1);
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 50vh;
  overflow: hidden;
  border-radius: 8%;
  position: relative;
  transition: transform 0.5s ease-out;
  cursor: pointer;

  &:hover {
    ${Circle} {
      transform: scale(4);
      transform-origin: right;
    }
    ${BackgroundImage} {
      transform: scale(1.2);
    }
    ${TextWrapper} {
      opacity: 1;
    }
    ${Overlay} {
      h3 {
        opacity: 0;
      }
    }
  }
`;
