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
      <Text>Nästa Match :</Text>
      <Row>
        <Text>{home}</Text>
        <Vs>vs</Vs>
        <Text>{away}</Text>
      </Row>
      <Text>{date}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #171717;
  width: 100%;
  height: 8vh;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.h3`
  font-family: "Sora", sans-serif;
  font-size: clamp(0.8rem, 1vw, 1.6rem);
  color: #fafafa;
  font-weight: 100;
  text-transform: capitalize;
`;

const Vs = styled(Text)`
  margin: 0 1rem;
  text-transform: uppercase;
`;
