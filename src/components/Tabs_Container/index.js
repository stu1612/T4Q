import React, { useState } from "react";
import styled from "styled-components";
import img from "../../assets/images/Banner/kids_long.jpg";
import img2 from "../../assets/images/cards/KIDS_1.png";
import img3 from "../../assets/images/cards/IMG_1.png";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");

  const handleTab1 = (e) => setActiveTab("Tab 1");
  const handleTab2 = (e) => setActiveTab("Tab 2");
  const handleTab3 = (e) => setActiveTab("Tab 3");

  const data = [
    { tab: "Tab 1", text: "I am content tab 1", img: img },
    { tab: "Tab 2", text: "I am content tab 2", img: img2 },
    { tab: "Tab 3", text: "I am content tab 3", img: img3 },
  ];
  return (
    <Container>
      <Content>
        {data
          .filter((filteredItem) => filteredItem.tab === activeTab)
          .map((item) => (
            <>
              <Image img={item.img} />
              <Wrapper>
                <div>
                  <h3>{item.text}</h3>
                  <p>Read more -></p>
                </div>
              </Wrapper>
            </>
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
  height: 50vh;
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

  li {
    text-decoration: none;
    list-style: none;
    padding: 1rem 2rem;
    background: white;
    width: 30vw;
    height: 100%;
    cursor: pointer;
    transition: 0.2s all ease-out;

    &:hover {
      background: #222831;
    }

    &.active {
      background: #c70101;
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

const Wrapper = styled.div`
  position: absolute;
  height: auto;
  bottom: 20%;
  left: 50%;
  width: 79%;
  transform: translate(-50%, 0%);
  div {
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: fit-content;
    padding: 1rem 4rem 1rem 1rem;
    position: relative;
    &::after {
      content: "";
      width: 2px;
      background: yellow;
      width: 100px;
      position: absolute;
    }
  }
  h3 {
    color: #fafafa;
  }
  p {
    color: #c70101;
  }
`;
