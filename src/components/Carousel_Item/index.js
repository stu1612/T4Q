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
        <Text>{date}</Text>
        <Text>{venue}</Text>
      </TextWrapper>
      <Row>
        <ImageContainer>
          <TeamBadge src={homeImg} alt="team logo" />
        </ImageContainer>

        {!result ? (
          <FixtureInfo>{time}</FixtureInfo>
        ) : (
          <ResultInfo>{result}</ResultInfo>
        )}
        <ImageContainer>
          <TeamBadge src={awayImg} alt="team logo" />
        </ImageContainer>
      </Row>
      <TextRow>
        <Team>{home}</Team>
        <Vs>vs</Vs>
        <Team>{away}</Team>
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
  border-radius: 16px;
  background: #fff;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
  }

  @media (max-width: 320px) {
    width: 16em;
  }
`;

const TextWrapper = styled.div`
  text-align: center;
`;

const Text = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: 0.8rem;
  color: #171717;
  font-weight: 200;
  padding: 0.2em 0;
  text-transform: capitalize;
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
`;

const TeamBadge = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

const FixtureInfo = styled.h4`
  background: #d3d5d7;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 10px;
  margin: 0 0.8rem;
`;

const ResultInfo = styled(FixtureInfo)`
  background: #171717;
  color: #fafafa;
`;

const TextRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const Team = styled.h3`
  font-family: "Ubuntu", sans-serif;
  font-size: 0.8rem;
  color: #171717;
  font-weight: 600;
  text-transform: uppercase;
`;

const Vs = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: 0.8rem;
  color: #171717;
  font-weight: 200;
  padding: 0 0.5rem;
`;
