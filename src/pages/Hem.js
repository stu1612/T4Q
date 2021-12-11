/* eslint-disable no-lone-blocks */
import React from "react";
import { Layout } from "../components/Page_Layout/Layout";
import { CarouselSlider } from "../components/Carousel_Slider/index";
import { Banner } from "../components/Banner";
import { Superettan } from "../components/Superettan_Banner";
import { Tabs } from "../components/Tabs_Container";
import { BackgroundImage } from "../components/Background_Image";

export const Hem = () => {
  return (
    <Layout>
      <Banner />
      <Superettan />
      <Tabs />
      <CarouselSlider />
      <BackgroundImage />
    </Layout>
  );
};
