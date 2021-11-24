/* eslint-disable no-lone-blocks */
import React from "react";
import { Layout } from "../components/Page_Layout/Layout";
import { Carousel } from "../components/Carousel/index";
import { NextGame } from "../components/Next_Game";
import { Schedule } from "../Model/Schedule";

export const Hem = () => {
  // const date = moment().format("dddd, MMM Do YYYY");

  // const date2 = "27-03-14";
  // const date3 = moment("2020-02-10").format("dddd, MMM Do");

  const today = new Date("2021-10-04");
  const newToday = new Date();
  const dates = [
    { date: new Date("2021-10-02"), game: "Game1" },
    { date: new Date("2021-10-03"), game: "Game2" },
    { date: new Date("2021-10-04"), game: "Game3" },
    { date: new Date("2021-10-05"), game: "Game4" },
    { date: new Date("2021-10-06"), game: "Game5" },
    { date: new Date("2022-02-06"), game: "Game6" },
  ];

  // {
  //   dates
  //     .filter((match) => match > today)
  //     .map((nextMatch) => console.log(nextMatch));
  // }

  return (
    <Layout>
      <NextGame />
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <h1>THis is the main content</h1>
      <Carousel />
    </Layout>
  );
};
