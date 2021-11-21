import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { Schedule } from "../../Model/Schedule";

export const Fixtures = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
  };

  //   const settings = {
  //     dots: true,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 4,
  //     initialSlide: 0,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           initialSlide: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   };
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
    <div style={{ width: "100%", background: "blue" }}>
      <h2> Multiple items </h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
};
