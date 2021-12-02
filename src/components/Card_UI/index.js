/* eslint-disable no-undef */
import React from "react";
import styled from "styled-components";

export const Card = ({ backgroundImage, image, alt, title, text }) => {
  console.log(image);
  return (
    <Container>
      <CardWrapper>
        <BackgroundImage src={backgroundImage} alt={alt} />
        {/* <Circle>
          <TextWrapper>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </TextWrapper>
        </Circle> */}
      </CardWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

// const Title = styled.h3`
//   font-family: "Ubuntu", sans-serif;
//   font-size: clamp(0.5rem, 1vw, 1.3rem);
//   color: #fafafa;
//   font-weight: 200;
//   text-transform: uppercase;
// `;
// const Text = styled.p`
//   font-family: "Ubuntu", sans-serif;
//   font-size: clamp(0.3rem, 0.3vw, 0.8rem);
//   color: #fafafa;
//   font-weight: 100;
//   text-transform: lowercase;
// `;

const CardImage = styled.img`
  object-fit: contain;
  /* object-position: 0 2rem; */
  width: 100%;
  height: 100%;
  background: #000;
  transition: transform 0.5s ease-out;
  background-blend-mode: color-burn;
  filter: saturate(0.5);
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: rgb(0, 0, 0);
  background-blend-mode: color-burn;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 50vh;
  overflow: hidden;
  border-radius: 8px;
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

/* background-image: url(${image}); */
/* background-image: url(${(props) => props.image }); */
