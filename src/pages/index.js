import React from "react";
import { Layout } from "../components/Page_Layout/Layout";
import { Video } from "../components/Video/Video";

export const Hem = () => {
  return (
    <>
      <Video />
      <Layout>
        <h1>THis is the main content</h1>
      </Layout>
    </>
  );
};
