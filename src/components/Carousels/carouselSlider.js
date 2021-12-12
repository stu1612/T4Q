import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { CarouselItem } from "./sliderItem";
import styled from "styled-components";
import { Schedule } from "../../Model/Schedule";

export const CarouselSlider = () => {
  const number = Schedule.filter((game) => game.result !== "").length - 2;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // centerMode: true,
    initialSlide: number,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        {Schedule.map((match) => (
          <CarouselItem
            key={match.date}
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
  margin-top: -2rem;
`;
