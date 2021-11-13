import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { SocialMediaLinks } from "../SocialMediaLinks";

export const Footer = () => {
  return (
    <>
      <SocialMediaContainer>
        <SocialMediaLinks />
        <Button title="Kontakt" />
      </SocialMediaContainer>
      <Copyright>
        <Text>&copy;TeamFourthQuarter</Text>
      </Copyright>
    </>
  );
};

const SocialMediaContainer = styled.div`
  background: #4a4a4a;
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  color: #fff;
`;
