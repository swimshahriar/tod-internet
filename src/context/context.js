import { createContext, useState } from "react";

// contents
import contentsBn from "../contents/contentsBn";
import contentsEn from "../contents/contentsEn";

// state object
export const GlobalState = createContext({
  lan: "",
  changeLan: () => {},
  en: {},
  bn: {},
});

// provider function
const StateProvider = ({ children }) => {
  const [activeLan, setActiveLan] = useState("En");

  const changeLanHandler = (lan) => {
    setActiveLan(lan);
  };
  return (
    <GlobalState.Provider
      value={{
        lan: activeLan,
        changeLan: changeLanHandler,
        en: { ...contentsEn },
        bn: { ...contentsBn },
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export default StateProvider;
