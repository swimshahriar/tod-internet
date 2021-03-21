import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// global state
import { GlobalState } from "../context/context";
import LinkNav from "./LinkNav";

const Header = () => {
  const state = useContext(GlobalState);
  const [header, setHeader] = useState(state.en.header);

  // content set
  useEffect(() => {
    if (state.lan === "Bn") {
      setHeader(state.bn.header);
    } else {
      setHeader(state.en.header);
    }
  }, [state.lan, state.en.header, state.bn.header]);

  return (
    <header className="sticky top-0 z-50 flex flex-col sm:flex-row justify-between align-center  px-10 md:px-20 py-4 md:py-6 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100 shadow-md">
      <h1 className="font-bold text-2xl md:text-3xl mb-2 sm:mb-0 text-center">
        <NavLink to="/">{header.logo}</NavLink>
      </h1>
      <nav className="flex justify-center align-center text-md lg:text-lg flex-wrap sm:flex-nowrap">
        <ul className="flex justify-center align-center">
          {header.nav.map((navItem, index) => (
            <li
              key={index}
              className={`${header.nav.length !== index + 1 ? "mr-4" : ""} `}
            >
              <LinkNav name={navItem.name} link={navItem.link} />
            </li>
          ))}
        </ul>
        <select
          name="lan"
          id="lan"
          className="bg-transparent ml-4 sm:mt-0 pb-1 focus:outline-none cursor-pointer"
          onChange={(e) => state.changeLan(e.target.value)}
          value={state.lan}
        >
          <option value="En" className="text-black">
            🇺🇸 English
          </option>
          <option value="Bn" className="text-black">
            🇧🇩 বাংলা
          </option>
        </select>
      </nav>
    </header>
  );
};

export default Header;
