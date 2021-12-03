import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { FaChevronRight } from "react-icons/fa";

import {
  MobileContainer,
  MobileContactLink,
  MobileNavigation,
  MobileNavigationLinks,
  MobLink,
  Wrapper,
} from "./Style";

export const SideBarNavigation = ({ open, isOpen }) => {
  const toggle = () => {
    isOpen(!open);
  };
  return (
    <>
      <MobileContainer>
        {/* <MobileNavigation>
          <MobileContactLink>
            <Button title="kontakt" onClick={() => console.log("helloooo")} />
          </MobileContactLink>
          <MobileNavigationLinks>
            <Wrapper to="/" onClick={toggle}>
              <MobLink>Hem</MobLink>
              <Icon />
            </Wrapper>
            <Wrapper to="/herr" onClick={toggle}>
              <MobLink>Herr</MobLink>
              <Icon />
            </Wrapper>
            <Wrapper to="/dam" onClick={toggle}>
              <MobLink>Dam</MobLink>
              <Icon />
            </Wrapper>
            <Wrapper to="/junior" onClick={toggle}>
              <MobLink>Junior</MobLink>
              <Icon />
            </Wrapper>
          </MobileNavigationLinks>
        </MobileNavigation> */}
      </MobileContainer>
    </>
  );
};

// const Icon = styled(FaChevronRight)`
//   color: ${({ theme }) => theme.text};
// `;
