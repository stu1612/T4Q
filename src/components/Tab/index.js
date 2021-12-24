import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Tab = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div onClick={() => navigate(`/nyheter/${item.slug}`, { state: item })}>
        <h3>{item.text}</h3>
        <p>Read more </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  /* pointer-events: none; */
  height: 5rem;
  bottom: 20%;
  left: 39%;
  width: 57%;
  transform: translate(-50%, 0%);

  div {
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: fit-content;
    padding: 1rem 4rem 1rem 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    cursor: pointer;

    &::after {
      content: "";
      height: 5rem;
      background: #c70101;
      width: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  h3 {
    color: #fafafa;
    padding: 0.2rem 0;
  }
  p {
    color: #c70101;
  }
`;
