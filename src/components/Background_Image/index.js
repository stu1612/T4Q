import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import TextTruncate from "react-text-truncate";

import img from "../../assets/images/cards/IMG_1.png";
import img1 from "../../assets/images/Banner/kids_long.jpg";
import img2 from "../../assets/images/cards/KIDS_1.png";
import img3 from "../../assets/images/cards/WOMEN_1.png";

import { Button } from "../Button/Button";

export const BackgroundImage = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Tab 1");

  const handleTab1 = () => setActiveTab("Tab 1");
  const handleTab2 = () => setActiveTab("Tab 2");
  const handleTab3 = () => setActiveTab("Tab 3");

  const listData = [
    {
      no: 1,
      tab: "Tab 1",
      title: "Info",
      img: img1,
      content_title: "This is some INFO about team4q",
      news_title:
        "As a local lad from Manchester, playing for Manchester United is a dream come true",
      content_1:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
      content_2:
        "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. ",
      content_3:
        "Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
      slug: "this-is-about-info/",
      handleClick: handleTab1,
    },
    {
      no: 2,
      tab: "Tab 2",
      img: img2,
      title: "History",
      content_title: "This is some HISTORY about team4q",
      news_title:
        "As a local lad from Manchester, playing for Manchester United is a dream come true",
      content_1:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
      content_2:
        "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. ",
      content_3:
        "Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
      slug: "this-is-about-history/",
      handleClick: handleTab2,
    },
    {
      no: 3,
      tab: "Tab 3",
      img: img3,
      title: "Sponsors",
      content_title: "This is some SPONSORS about team4q",
      news_title:
        "As a local lad from Manchester, playing for Manchester United is a dream come true",
      content_1:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
      content_2:
        "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. ",
      content_3:
        "Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
      slug: "this-is-about-sponsors/",
      handleClick: handleTab3,
    },
  ];

  return (
    <Container>
      <Image />
      <TabsContainer>
        <TabContent>
          {listData
            .filter((data) => data.tab === activeTab)
            .map((item) => {
              return (
                <div key={item.no}>
                  <img src={item.img} alt={item.title} />
                  <TextContent>
                    <h4>{item.content_title}</h4>
                    <TextTruncate
                      line={2}
                      element="p"
                      truncateText="…"
                      text={item.content_1}
                    />
                  </TextContent>
                </div>
              );
            })}
        </TabContent>

        <TabsList>
          {listData.map((item) => {
            return (
              <li
                className={activeTab === `Tab ${item.no}` ? "active" : ""}
                onClick={item.handleClick}
                key={item.no}
              >
                <p>{item.title}</p>
              </li>
            );
          })}
        </TabsList>
      </TabsContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 110vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

const Image = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${img});
  background-size: cover;
  background-position: top;
`;

const TabsContainer = styled.div`
  height: 90vh;
  width: 70%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

const TabContent = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  div {
    height: 100%;

    img {
      height: 60%;
      width: 100%;
      object-fit: cover;
      object-position: 0 20%;
    }
  }
`;

const TextContent = styled.div`
  padding: 1rem;

  h4 {
    padding: 0.5rem 0;
  }
`;

const TabsList = styled.ul`
  position: absolute;
  bottom: 0;
  height: 20%;
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

    &:hover {
      background: #d9d9d9;
      border-bottom: 0.5px solid transparent;
    }

    &.active {
      background: #c70101;
      border: 0.5px solid transparent;

      p {
        color: #fafafa;
      }
    }
  }
`;
