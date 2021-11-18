import React from "react";
import styled from "styled-components";
import { Sponsors } from "../../Model/Sponsors";

export const Partners = () => {
  return (
    <Container>
      {Sponsors.map((sponsor) => (
        <Wrapper
          key={sponsor.alt}
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo src={sponsor.img} alt={sponsor.alt} />
        </Wrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  min-height: 50vh;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Wrapper = styled.a`
  margin: 0.2rem 1rem;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
  object-fit: contain;
`;
