import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [showTopNav, setShowTopNav] = useState(true);

  const displayNav = () => {
    setShowTopNav(false);
  };
  return (
    <AppContext.Provider value={{ displayNav, showTopNav, setShowTopNav }}>
      {children}
    </AppContext.Provider>
  );
};
