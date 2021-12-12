import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./banner.css";

import img from "../../assets/images/Banner/Banner_1.png";
import img2 from "../../assets/images/Banner/grp_img.jpeg";
import img3 from "../../assets/images/Banner/team-photo.jpg";
import { Button } from "../Button/Button";

export const CarouselBanner = () => {
  const data = [
    {
      f_name: "marcus",
      l_name: "rashford",
      text: "As a local lad from Manchester, playing for Manchester United is a dream come true. I always want to play and contribute as best as i can for the team and the fans",
      img: img,
    },
    {
      f_name: "jason",
      l_name: "sancho",
      text: "As a local lad from Manchester, playing for Manchester United is a dream come true. I always want to play and contribute as best as i can for the team and the fans",
      img: img2,
    },
    {
      f_name: "cristiano",
      l_name: "ronaldo",
      text: "As a local lad from Manchester, playing for Manchester United is a dream come true. I always want to play and contribute as best as i can for the team and the fans",
      img: img3,
    },
  ];

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop
      useKeyboardArrows
      autoPlay
    >
      {data.map((item) => (
        <div key={item.f_name}>
          <Container>
            <Image src={item.img} />
            <Overlay />
            <TextBox>
              <TopTitle>{item.f_name}</TopTitle>
              <BottomTitle>{item.l_name}</BottomTitle>
              <Divider />
              <p>{item.text}</p>
              <Button title="Läs mer" />
            </TextBox>
          </Container>
        </div>
      ))}
    </Carousel>
  );
};

const Container = styled.div`
  width: 100%;
  height: 78vh;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextBox = styled.div`
  position: absolute;
  left: 30%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  width: 30%;
  text-align: left;
  p {
    color: #fff;
    margin-bottom: 1rem;
  }
  @media (max-width: 600px) {
    left: 50%;
    width: 70%;
    text-align: center;
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
