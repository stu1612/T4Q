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
        <img src={location.state.img} alt={location.state.l_name} />
        <Content>
          <h2>{location.state.news_title}</h2>
          <p>{location.state.content_1}</p>
          <p>{location.state.content_2}</p>
          <p>{location.state.content_3}</p>
        </Content>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    height: 70vh;
    object-fit: cover;
    object-position: 0% 20%;
    width: 100%;
  }
`;

const Content = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-self: center;
  padding: 5rem 2rem;
  text-align: justify;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: clamp(1.4rem, 1.8vw, 3.8rem);
  }
  p {
    margin-top: 1rem;
  }
`;
