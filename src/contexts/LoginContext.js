import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [videoPlaying, setVideoPlaying] = useState(true);

  const enterApp = () => {
    setVideoPlaying(false);
  };
  return (
    <LoginContext.Provider value={(enterApp, videoPlaying, setVideoPlaying)}>
      {children}
    </LoginContext.Provider>
  );
};
