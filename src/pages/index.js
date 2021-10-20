import React from "react";

export const Hem = () => {
  const container = {
    // background: "#1d1f28",
    background: "#171717",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    minHeight: "100vh",
    width: "100%",
    // overflowAnchor: "none !important",
    // overflow: "hidden",
  };

  return (
    <div style={container}>
      <h2>Home</h2>
      <p>Hello</p>
    </div>
  );
};
