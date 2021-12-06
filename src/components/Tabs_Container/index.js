import React, { useState } from "react";
import styled from "styled-components";
import { Tab1 } from "../Tabs/Tab_1";
import { Tab2 } from "../Tabs/Tab_2";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");

  const handleTab1 = (e) => setActiveTab("Tab 1");
  const handleTab2 = (e) => setActiveTab("Tab 2");
  const handleTab3 = (e) => setActiveTab("Tab 3");
  // const handleTab3 = () => setActiveTab("tab3");

  const data = [
    { tab: "Tab 1", text: "I am content tab 1" },
    { tab: "Tab 2", text: "I am content tab 2" },
    { tab: "Tab 3", text: "I am content tab 3" },
  ];
  return (
    <Container>
      {/* <Content>{activeTab === "tab1" ? <Tab1 /> : <Tab2 />}</Content> */}
      <Content>
        {data
          .filter((filteredItem) => filteredItem.tab === activeTab)
          .map((item) => (
            <p>{item.text}</p>
          ))}
      </Content>

      <List>
        <li
          className={activeTab === "Tab 1" ? "active" : ""}
          onClick={handleTab1}
        >
          Tab 1
        </li>
        <li
          className={activeTab === "Tab 2" ? "active" : ""}
          onClick={handleTab2}
        >
          Tab 2
        </li>
        <li
          className={activeTab === "Tab 3" ? "active" : ""}
          onClick={handleTab3}
        >
          Tab 3
        </li>
      </List>
    </Container>
  );
};

const Container = styled.div`
  background: pink;
  height: 30vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;

  li {
    text-decoration: none;
    list-style: none;
    padding: 1rem 2rem;
    background: white;
    width: 30vw;
    height: 100%;

    &:hover {
      background: #dddddd;
    }

    &.active {
      background: blue;
    }
  }
`;

const Content = styled.div`
  display: flex;
  background: green;
  flex: 1;
  height: 100%;
`;
