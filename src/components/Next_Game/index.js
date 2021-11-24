/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Schedule } from "../../Model/Schedule";
import styled from "styled-components";

export const NextGame = () => {
  //   const [scheduleData, setScheduleData] = useState(Schedule);
  const [date, setDate] = useState(new Date());
  const [upcoming, setUpcoming] = useState([]);
  const [fixture, setFixture] = useState();

  //   useEffect(() => {
  //     Schedule.filter((fixture) => fixture.jsDate > date).map(
  //       (filteredFixtures) => setUpcoming([filteredFixtures])
  //     );
  //   }, [date]);

  //   useEffect(() => {
  //     setUpcoming(
  //       Schedule.filter((fixture) => fixture.jsDate > date)
  //         .map((filteredFixtures) => filteredFixtures)
  //         .then(setFixture(filteredFixtures[0]))
  //     );
  //   }, [date]);
  useEffect(() => {
    setUpcoming(
      Schedule.filter((fixture) => fixture.jsDate > date).map(
        (filteredFixtures) => filteredFixtures
      )
    );
  }, [date]);

  useEffect(() => {
    setFixture(upcoming[0]);
  }, [upcoming]);

  return (
    // <Container>
    //   <Text>Nästa Match :</Text>
    //   <Row>
    //     <Text>{fixture.home}</Text>
    //     <Vs>vs</Vs>
    //     <Text>{fixture.away}</Text>
    //   </Row>
    //   <Text>{fixture.date}</Text>
    // </Container>
    <Container>
      <Text>Nästa Match :</Text>
      <Row>
        <Text>{fixture.home}</Text>
        <Vs>vs</Vs>
        <Text>{fixture.away}</Text>
      </Row>
      <Text>{fixture.date}</Text>
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
