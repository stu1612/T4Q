import React from "react";
import styled from "styled-components";
import { Logo } from "../Logo/Logo";
import { Sponsors } from "../../Model/Sponsors";

export const TopNavbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <SponsorsContainer>
          <GridLayout>
            {Sponsors.map((sponsor) => (
              <a
                key={sponsor.alt}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sponsor.alt === "Edument Logo" ? (
                  <img src={sponsor.img} className="single" alt={sponsor.alt} />
                ) : (
                  <img src={sponsor.img} className="group" alt={sponsor.alt} />
                )}
              </a>
            ))}
          </GridLayout>
        </SponsorsContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 15vh;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 973px) {
    width: 90%;
  }
`;

const LogoContainer = styled.div`
  height: 14vh;
  @media (max-width: 630px) {
    height: 10vh;
  }
`;

const SponsorsContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  a {
    cursor: pointer;
  }
  img {
    height: 70px;
    width: 70px;
    margin: 0 1rem;
    object-fit: contain;
  }
`;

const GridLayout = styled.div`
  .group {
    @media (max-width: 600px) {
      display: none;
    }
  }
  .single {
    @media (max-width: 600px) {
      display: block;
    }
  }
`;
