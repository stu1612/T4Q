import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { Button } from "../Button/Button";
import "./Video.css";

export const Video = () => {
  return (
    <Container>
      <ReactPlayer
        playing={true}
        url={[{ src: "/videos/video.mp4", type: "video/mp4" }]}
        width="100vw"
        height="100vh"
        loop={true}
        muted={true}
        style={{ objectFit: "contain" }}
      />
      <Overlay>
        <h2>Hello</h2>
        <Button title="Click me" />
      </Overlay>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  /* z-index: 20; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
