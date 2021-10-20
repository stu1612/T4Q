import React from "react";
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

export const SideBarNavigation = () => {
  return (
    <MobileContainer>
      <MobileNavigation>
        <MobileContactLink>
          <Button title="kontakt" />
        </MobileContactLink>
        <MobileNavigationLinks>
          <Wrapper>
            <MobLink to="/">Hem</MobLink>
            <FaChevronRight />
          </Wrapper>
          <Wrapper>
            <MobLink to="/">Herr</MobLink>
            <FaChevronRight />
          </Wrapper>
          <Wrapper>
            <MobLink to="/">Dam</MobLink>
            <FaChevronRight />
          </Wrapper>
          <Wrapper>
            <MobLink to="/">Junior</MobLink>
            <FaChevronRight />
          </Wrapper>
        </MobileNavigationLinks>
      </MobileNavigation>
    </MobileContainer>
  );
};
