import React from "react";
import styled from "styled-components";
import img from "../../assets/images/Banner/kids_long.jpg";

export const Banner = () => {
  return (
    <Container>
      <Overlay />
      <Image>
        <TextBox>
          <h1>Hello</h1>
        </TextBox>
      </Image>
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
  background: white;
`;
