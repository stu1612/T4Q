import React from "react";
import styled from "styled-components";
import img from "../../assets/images/Banner/super.jpeg";

export const Superettan = () => {
  return <Container />;
};

const Container = styled.div`
  height: 40vh;
  width: 100%;
  background: rgba(255, 205, 0, 0.4);
  background-image: url(${img});
  background-position: 10%;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: hue;
  margin-top: -5rem;
`;
