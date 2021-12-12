import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Layout } from "../components/Page_Layout/Layout";
import styled from "styled-components";

export const Nyheter = () => {
  const params = useParams();
  const location = useLocation();
  console.log(params);
  console.log(location);
  return (
    <Layout>
      <Container>
        <div>
          <img src={location.state.img} alt={location.state.l_name} />
        </div>
        {/* <h2>{location.state.f_name}</h2>
        <p>Says that his second name is</p>
        <h2>{location.state.l_name}</h2> */}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  min-height: 200vh;
  height: auto;
  width: 100%;

  div {
    height: 70vh;

    img {
      object-fit: cover;
      object-position: 0% 20%;
      height: 100%;
      width: 100%;
    }
  }
`;
