import React from "react";
import styled from "styled-components";

export const CarouselItem = ({
  home,
  away,
  homeImg,
  awayImg,
  venue,
  date,
  result,
  time,
}) => {
  return (
    <Container>
      <TextWrapper>
        <p>{date}</p>
        <p>{venue}</p>
      </TextWrapper>
      <Row>
        <ImageContainer>
          <img src={homeImg} alt="team logo" />
        </ImageContainer>

        {!result ? <Fixture>{time}</Fixture> : <Result>{result}</Result>}
        <ImageContainer>
          <img src={awayImg} alt="team logo" />
        </ImageContainer>
      </Row>
      <TextRow>
        <p>{home}</p>
        <p className="vs">vs</p>
        <p>{away}</p>
      </TextRow>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 18em;
  border-radius: 8px;
  background: #fff;
  transition: all 0.3s ease-out;
  /* box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2); */
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.4);

  &:hover {
    /* transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2); */
    transform: scale(1.05);
  }

  @media (max-width: 320px) {
    width: 16em;
  }
`;

const TextWrapper = styled.div`
  text-align: center;

  p {
    padding: 0.2em 0;
    text-transform: capitalize;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin: 2rem 0;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 60px;
  margin: 0 5px;

  @media (max-width: 320px) {
    height: 50px;
    width: 50px;
  }

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

const Fixture = styled.h4`
  background: #d3d5d7;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 10px;
  margin: 0 0.8rem;
`;

const Result = styled(Fixture)`
  background: #171717;
  color: #fafafa;
`;

const TextRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;

  p {
    font-size: clamp(1rem, 1vw, 2rem);
    text-transform: uppercase;
  }

  .vs {
    padding: 0 0.5rem;
    opacity: 0.4;
  }
`;

// const Vs = styled.p`
//   font-size: clamp(1rem, 1vw, 2rem);
//   color: #171717;
//   font-weight: 100;
//   padding: 0 0.5rem;
// `;
