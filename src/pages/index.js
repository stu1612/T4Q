import React from "react";

export const Hem = () => {
  const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={container}>
      <h2>Home</h2>
    </div>
  );
};
