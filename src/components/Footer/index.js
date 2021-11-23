import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { SocialMediaLinks } from "../SocialMediaLinks";

export const Footer = () => {
  return (
    <>
      <Container>
        <IconWrapper>
          <SocialMediaLinks />
        </IconWrapper>
        <Button title="Kontakt" />
      </Container>
      <Copyright>
        <Text>&copy;TeamFourthQuarter 2021 | Helsingborg</Text>
      </Copyright>
    </>
  );
};

const Container = styled.div`
  background: #4a4a4a;
  padding: 5rem 0;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  } ;
`;

const Copyright = styled.footer`
  background: #1a1a1a;
  height: 13vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: #fafafa;
  font-family: "Ubuntu", sans-serif;
  font-size: 0.8rem;
  font-weight: 200;
`;
