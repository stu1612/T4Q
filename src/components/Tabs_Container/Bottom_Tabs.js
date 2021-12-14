import React, { useState } from "react";
import TextTruncate from "react-text-truncate";
import styled from "styled-components";

export const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");

  const handleTab1 = () => setActiveTab("Tab 1");
  const handleTab2 = () => setActiveTab("Tab 2");
  const handleTab3 = () => setActiveTab("Tab 3");

  const listData = [
    {
      no: 1,
      title: "Info",
      home_content: "This is some history about team4q",
      full_content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
      handleClick: handleTab1,
    },
    {
      no: 2,
      title: "History",
      home_content: "Greenwod will take chance when it comes",
      handleClick: handleTab2,
    },
    {
      no: 3,
      title: "Sponsors",
      home_content: "Greenwod will take chance when it comes",
      handleClick: handleTab3,
    },
  ];

  return (
    <div>
      <h2>Gello</h2>
      <TabsList>
        {listData.map((item) => (
          <li>
            <p>{item.title}</p>
          </li>
        ))}
      </TabsList>
    </div>
  );
};

const TabsList = styled.ul`
  position: absolute;
  bottom: 0;
  height: 5rem;
  width: 100%;
  display: flex;
  flex-direction: row;

  li {
    border: 1px solid #eeeeee;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
