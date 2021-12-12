import React, { useState } from "react";
import styled from "styled-components";
import { BottomBreaker } from "../Breaker_Container/Bottom_Breaker";
import { data } from "../../Model/Tabs";
import { Tab } from "../Tab";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");

  const handleTab1 = () => setActiveTab("Tab 1");
  const handleTab2 = () => setActiveTab("Tab 2");
  const handleTab3 = () => setActiveTab("Tab 3");

  const listData = [
    {
      no: 1,
      para: "Greenwod will take chance when it comes",
      small: "06/12/21 11:40",
      handleClick: handleTab1,
    },
    {
      no: 2,
      para: "Greenwod will take chance when it comes",
      small: "06/12/21 11:40",
      handleClick: handleTab2,
    },
    {
      no: 3,
      para: "Greenwod will take chance when it comes",
      small: "06/12/21 11:40",
      handleClick: handleTab3,
    },
  ];

  return (
    <>
      <Container>
        <>
          {data
            .filter((filteredItem) => filteredItem.tab === activeTab)
            .map((item) => (
              <Content key={item.tab}>
                <Image img={item.img} />
                <Tab item={item} />
              </Content>
            ))}
        </>

        <List>
          {listData.map((list) => (
            <li
              className={activeTab === `Tab ${list.no}` ? "active" : ""}
              onClick={list.handleClick}
              key={list.no}
            >
              <div>
                <p>{list.para}</p>
                <small>{list.small}</small>
              </div>
            </li>
          ))}
          <div className="space" />
        </List>
      </Container>
      <BottomBreaker />
    </>
  );
};

const Container = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  border-top: 4px solid #c70101;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    height: 20%;
    position: absolute;
    top: 0;
  }

  .space {
    max-height: 40px;
    height: 100%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  li {
    text-decoration: none;
    list-style: none;
    padding: 1rem 2rem;
    background: white;
    width: 30vw;
    height: 100%;
    cursor: pointer;
    transition: 0.4s all ease-out;
    border-bottom: 0.5px solid #ececec;

    @media (max-width: 768px) {
      width: 100%;
      padding: 0.5rem;
    }

    &:hover {
      background: #d9d9d9;
      border-bottom: 0.5px solid transparent;
    }

    &.active {
      background: #c70101;
      border-bottom: 0.5px solid transparent;

      p {
        color: #fafafa;
      }
    }

    div {
      height: 100%;
      width: 67%;
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-direction: column;

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;

const Image = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
`;
