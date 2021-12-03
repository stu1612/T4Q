/* eslint-disable no-lone-blocks */
import React from "react";
import { Layout } from "../components/Page_Layout/Layout";
import { Carousel } from "../components/Carousel/index";
import { Cards } from "../components/Cards_Container";

export const Hem = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return (
    <Layout>
      <h2>Width: {width}</h2>
      <h2>Height: {height}</h2>
      <Cards />

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
