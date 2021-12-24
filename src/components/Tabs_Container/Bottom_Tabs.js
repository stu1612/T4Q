import React, { useState } from "react";
import TextTruncate from "react-text-truncate";
import styled from "styled-components";
import img from "../../assets/images/Banner/kids_long.jpg";
import img2 from "../../assets/images/cards/KIDS_1.png";
import img3 from "../../assets/images/cards/WOMEN_1.png";

export const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");

  const handleTab1 = () => setActiveTab("Tab 1");
  const handleTab2 = () => setActiveTab("Tab 2");
  const handleTab3 = () => setActiveTab("Tab 3");

  const listData = [
    {
      no: 1,
      tab: "Tab 1",
      title: "Infossss",
      img: img,
      home_content: "This is some INFO about team4q",
      full_content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
      handleClick: handleTab1,
    },
    {
      no: 2,
      tab: "Tab 2",
      img: img2,
      title: "History",
      home_content: "This is some HISTORY about team4q",
      handleClick: handleTab2,
    },
    {
      no: 3,
      tab: "Tab 3",
      img: img3,
      title: "Sponsors",
      home_content: "This is some SPONSORS about team4q",
      handleClick: handleTab3,
    },
  ];

  return (
    <div>
      <div>
        {listData
          .filter((data) => data.tab === activeTab)
          .map((item) => (
            <Wrapper>
              <img src={item.img} alt={item.title} />
              <p>{item.home_content}</p>
            </Wrapper>
          ))}
      </div>
      <TabsList>
        {listData.map((item) => (
          <li
            className={activeTab === `Tab ${item.no}` ? "active" : ""}
            onClick={item.handleClick}
            key={item.tab}
          >
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
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  img {
    height: 60%;
    width: 100%;
    object-fit: cover;
    object-position: 0 20%;
  }
`;
