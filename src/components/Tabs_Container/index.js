import React, { useState } from "react";
import styled from "styled-components";
import { Tab1 } from "../Tabs/Tab_1";
import { Tab2 } from "../Tabs/Tab_2";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => setActiveTab("tab1");
  const handleTab2 = () => setActiveTab("tab2");
  return (
    <Container>
      <List>
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Tab 1
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Tab 2
        </li>
      </List>
      <div className="display">
        {activeTab === "tab1" ? <Tab1 /> : <Tab2 />}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: pink;
  height: 30vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    text-decoration: none;
    list-style: none;
    padding: 1rem 2rem;
    border-radius: 10%;
    margin: 0 1rem;
    background: white;

    &:hover {
      background: #dddddd;
    }

    &.active {
      background: blue;
    }
  }
`;
