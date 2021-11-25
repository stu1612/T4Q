/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Schedule } from "../../Model/Schedule";
import styled from "styled-components";

export const NextGame = () => {
  const [todaysDate, setTodaysDate] = useState(new Date());
  const [fixture, setFixture] = useState({});

  useEffect(() => {
    setFixture(Schedule.find(({ jsDate }) => jsDate > todaysDate));
  }, [todaysDate]);

  const { home, away, date } = fixture;

  return (
    <Container>
      <Text>Nästa Match </Text>
      <Vs>vs</Vs>
      <Row>
        {home === "Team4Q" ? <Text>{away}</Text> : null}
        {away === "Team4Q" ? <Text>{home}</Text> : null}
      </Row>
      <Vs>|</Vs>
      <Text>{date}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 8vh;
  padding: 1rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.h3`
  font-family: "Sora", sans-serif;
  font-size: clamp(0.6rem, 1vw, 1.6rem);
  color: #fafafa;
  font-weight: 600;
  text-transform: uppercase;
`;

const Vs = styled(Text)`
  margin: 0 0.5rem;
  text-transform: uppercase;
`;
