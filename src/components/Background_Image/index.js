import React from "react";
import styled from "styled-components";
import img from "../../assets/images/cards/IMG_1.png";
import teamImg from "../../assets/images/Banner/grp_img.jpeg";

export const BackgroundImage = () => {
  return (
    <Container>
      <Image />
      <TabsContainer>
        <img src={teamImg} alt="team4q group" />
      </TabsContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 110vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

const Image = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${img});
  background-size: cover;
  background-position: top;
`;

const TabsContainer = styled.div`
  height: 90vh;
  width: 70%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);

  img {
    height: 60%;
    width: 100%;
    object-fit: cover;
    object-position: 0 20%;
  }
`;
