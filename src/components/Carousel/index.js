import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { CarouselItem } from "../Carousel_Item";

import { Schedule } from "../../Model/Schedule";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "center",
    centerMode: true,
    initialSlide: 1,
    // centerPadding: "60px",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
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
    // <Slider {...settings}>
    //   {Schedule.map((fixture) => (
    //     <>
    //       <p>{fixture.home}</p>
    //       <p>{fixture.away}</p>
    //       <p>{fixture.venue}</p>
    //       <p>{fixture.time}</p>
    //       <p>{fixture.date}</p>
    //       <p>{fixture.result}</p>
    //     </>
    //   ))}
    // </Slider>
    <div
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
    </div>
  );
};
