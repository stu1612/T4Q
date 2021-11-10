import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const enterApp = () => {
    setLogin(!login);
  };
  return (
    <LoginContext.Provider value={(enterApp, login, setLogin)}>
      {children}
    </LoginContext.Provider>
  );
};
