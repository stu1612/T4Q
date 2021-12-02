import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";

export const Video = () => {
  return (
    <ReactPlayer
      playing={true}
      url={[{ src: "/videos/video.mp4", type: "video/mp4" }]}
      width="100vw"
      height="100vh"
      loop={true}
      muted={true}
      style={{ objectFit: "contain" }}
    />
  );
};
