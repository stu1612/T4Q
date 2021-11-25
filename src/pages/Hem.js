/* eslint-disable no-lone-blocks */
import React from "react";
import { Layout } from "../components/Page_Layout/Layout";
import { Carousel } from "../components/Carousel/index";
import { CardsTop } from "../components/Cards_Top";
import { Card } from "../components/Card_UI";

export const Hem = () => {
  return (
    <Layout>
      <CardsTop>
        <Card />
      </CardsTop>

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
