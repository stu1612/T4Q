import React from "react";
import styled from "styled-components";
import { Social } from "../../Model/Social";

export const SocialMediaLinks = () => {
  return (
    <>
      {Social.map((item) => (
        <IconWrapper
          key={item.label}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <item.icon size={item.size} color="#fff" aria-label={item.label} />
        </IconWrapper>
      ))}
    </>
  );
};

const IconWrapper = styled.a`
  background: #5a5a5a;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: ease-in 0.2s;

  &:hover {
    background-color: #c70101;
  }

  @media (min-width: 620px) {
    height: 50px;
    width: 50px;
  } ;
`;
