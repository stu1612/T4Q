import React from "react";
import styled from "styled-components";
import img from "../../assets/images/Banner/Banner_1.png";

export const Banner = () => {
  return (
    <Container>
      <Image />
      <Overlay />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${img});
  background-position: 80%;
  background-repeat: no-repeat;
  background-size: cover;
`;
