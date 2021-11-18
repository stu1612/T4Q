import React from "react";
import { useHistory } from "react-router";
import { motion } from "framer-motion";
// Styles
import styled from "styled-components";
// Components
import { Button } from "../components/Button/Button";
import { Video } from "../components/Video/Video";
// Animation imports
import { titleAnim, buttonTitleAnim } from "../animations/animations";

export const Opening = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/hem");
  };

  return (
    <StyledWrapper>
      <Video />
      <StyledOverlay>
        <StyledTitle variants={titleAnim} initial="hidden" animate="show">
          Team Fourth Quarter
        </StyledTitle>
        <Button
          title="Välkommen"
          onClick={handleClick}
          variants={buttonTitleAnim}
          initial="hidden"
          animate="show"
        />
      </StyledOverlay>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  background: #fff;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 20;
`;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled(motion.h1)`
  font-family: "Sora";
  text-transform: uppercase;
  font-weight: 100;
  font-size: clamp(4rem, 1vw + 1rem, 1rem);
  text-align: center;
  color: #fffafa;
`;
