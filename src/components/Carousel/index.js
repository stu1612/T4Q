import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { CarouselItem } from "../Carousel_Item";
import styled from "styled-components";

import { Schedule } from "../../Model/Schedule";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // className: "center",
    centerMode: true,
    initialSlide: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        {Schedule.map((match) => (
          <CarouselItem
            home={match.home}
            homeImg={match.home_img}
            away={match.away}
            awayImg={match.away_img}
            venue={match.venue}
            date={match.date}
            result={match.result}
            time={match.time}
          />
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (min-width: 600px) {
    width: 90%;
  }
`;
