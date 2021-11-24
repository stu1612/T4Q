import React, { useEffect, useState } from "react";
import { Schedule } from "../../Model/Schedule";

export const NextGame = () => {
  //   const [scheduleData, setScheduleData] = useState(Schedule);
  const [date, setDate] = useState(new Date());
  const [upcoming, setUpcoming] = useState([]);

  //   useEffect(() => {
  //     Schedule.filter((fixture) => fixture.jsDate > date).map(
  //       (filteredFixtures) => setUpcoming([filteredFixtures])
  //     );
  //   }, [date]);

  useEffect(() => {
    setUpcoming(
      Schedule.filter((fixture) => fixture.jsDate > date).map(
        (filteredFixtures) => filteredFixtures
      )
    );
  }, [date]);

  console.log(upcoming[0]);

  return <h3>Hello</h3>;
};
