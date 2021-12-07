import React from "react";
import styled from "styled-components";
import img from "../../assets/images/Banner/kids_long.jpg";
import { TopBreaker } from "../Breaker_Container/Top_Breaker";

export const Banner = () => {
  return (
    <Container>
      <Overlay />
      <Image>
        <TextBox>
          <TopTitle>marcus</TopTitle>
          <BottomTitle>rashford</BottomTitle>
          <Divider />
          <p>
            "As a local lad from Manchester, playing for Manchester United is a
            dream come true. I always want to play and contribute as best as i
            can for the team and the fans"
          </p>
        </TextBox>
      </Image>
      <TopBreaker />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 78vh;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${img});
  background-position: 80%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TextBox = styled.div`
  position: absolute;
  left: 30%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 50%;
  width: 30%;
  background: transparent;

  p {
    color: #fff;
  }
`;

const TopTitle = styled.h2`
  color: #c70101;
  text-transform: uppercase;
`;
const BottomTitle = styled.h2`
  color: #fff;
  text-transform: uppercase;
  font-size: clamp(2.8rem, 2vw, 4.8rem);
`;
const Divider = styled.div`
  width: 100%;
  background-color: #fff;
  height: 1.5px;
  margin: 1.5rem 0;
`;
