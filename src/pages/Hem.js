/* eslint-disable no-lone-blocks */
import React from "react";
import { Layout } from "../components/Page_Layout/Layout";
import { CarouselSlider } from "../components/Carousels/carouselSlider";
import { CarouselBanner } from "../components/Carousels/carouselBanner";
import { Superettan } from "../components/Superettan_Banner";
import { Tabs } from "../components/Tabs_Container";
import { BackgroundImage } from "../components/Background_Image";
import { TopBreaker } from "../components/Breaker_Container/Top_Breaker";

export const Hem = () => {
  return (
    <Layout>
      <CarouselBanner />
      <TopBreaker />
      <Superettan />
      <Tabs />
      <CarouselSlider />
      <BackgroundImage />
    </Layout>
  );
};
