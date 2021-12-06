/* eslint-disable no-lone-blocks */
import React from "react";
import { Layout } from "../components/Page_Layout/Layout";
import { Carousel } from "../components/Carousel/index";
import { Banner } from "../components/Banner";
import { BreakerContainer } from "../components/Breaker_Container";
import { Superettan } from "../components/Superettan_Banner";

export const Hem = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  console.log("width :" + width, "height :" + height);
  return (
    <Layout>
      <Banner />
      {/* <BreakerContainer /> */}
      <Superettan />
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
