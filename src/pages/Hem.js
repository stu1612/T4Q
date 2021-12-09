/* eslint-disable no-lone-blocks */
import React from "react";
import { Layout } from "../components/Page_Layout/Layout";
import { Carousel } from "../components/Carousel/index";
import { Banner } from "../components/Banner";
import { Superettan } from "../components/Superettan_Banner";
import { Tabs } from "../components/Tabs_Container";

export const Hem = () => {
  return (
    <Layout>
      <Banner />
      <Superettan />
      <Tabs />
      <Carousel />
    </Layout>
  );
};
