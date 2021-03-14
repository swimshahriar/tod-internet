import React, { useContext } from "react";

// global state
import { GlobalState } from "../context/context";

// assets
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

const ThemeToggle = () => {
  const { theme, changeTheme } = useContext(GlobalState);

  return (
    <>
      {theme === "light" ? (
        <button
          onClick={() => changeTheme()}
          className="fixed z-50 right-4 bottom-4 w-8 h-8 rounded-full bg-gray-100 focus:outline-none"
        >
          <img src={moon} alt="moon" />
        </button>
      ) : (
        <button
          onClick={() => changeTheme()}
          className="fixed z-50 right-4 bottom-4 w-8 h-8 rounded-full bg-gray-100 focus:outline-none"
        >
          <img src={sun} alt="sun" />
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
