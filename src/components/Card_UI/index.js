import React from "react";
import styled from "styled-components";

import image from "../../assets/images/cards/card_mens.jpeg";

export const Card = () => {
  return (
    // <Container>
    <ImageWrapper>
      <CardImage src={image} />
    </ImageWrapper>
    //   <Overlay />
    // </Container>
  );
};

// const Container = styled.div`
//   height: 50vh;
//   width: 250px;
// `;

const Container = styled.div``;

const Overlay = styled.div``;

const ImageWrapper = styled.div`
  width: 250px;
  height: 50vh;
  overflow: hidden;
  border-radius: 8px;
  display: inline-block;
`;

const CardImage = styled.div`
  background-image: url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: none;
  width: 100%;
  height: 100%;
  transform: scale(1);
  vertical-align: middle;
  transition: all 0.5s ease-out;
  background-color: rgba(255, 0, 0, 0.3);
  background-blend-mode: color-burn;
`;

// const CardImage = styled.img`
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
//   transform: scale(1);
//   vertical-align: middle;
//   transition: all 0.5s ease-out;
//   background: red;
//   background-blend-mode: multiply;

//   &:hover {
//     transform: scale(1.1);
//   }
// `;

// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
// `;
