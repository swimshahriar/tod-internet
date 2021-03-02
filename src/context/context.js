import { createContext, useState } from "react";

// state object
export const GlobalState = createContext({
  lan: "En",
  changeLan: () => {},
});

// provider function
const StateProvider = ({ children }) => {
  const [activeLan, setActiveLan] = useState("En");

  const changeLanHandler = (lan) => {
    setActiveLan(lan);
  };
  return (
    <GlobalState.Provider
      value={{ lan: activeLan, changeLan: changeLanHandler }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export default StateProvider;
