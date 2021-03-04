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
  theme: "",
  changeTheme: () => {},
});

// provider function
const StateProvider = ({ children }) => {
  const [activeLan, setActiveLan] = useState("En");
  const [theme, setTheme] = useState(window.localStorage.getItem("theme"));

  const changeLanHandler = (lan) => {
    setActiveLan(lan);
  };

  const changeThemeHandler = () => {
    if (theme === "light") {
      // Whenever the user explicitly chooses dark mode
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else if (theme === "dark") {
      // Whenever the user explicitly chooses light mode
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <GlobalState.Provider
      value={{
        lan: activeLan,
        changeLan: changeLanHandler,
        en: { ...contentsEn },
        bn: { ...contentsBn },
        theme,
        changeTheme: changeThemeHandler,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export default StateProvider;
