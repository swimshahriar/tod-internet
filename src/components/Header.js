import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// header contents
import contents from "../contents/index";

// global state
import { GlobalState } from "../context/context";
import LinkNav from "./LinkNav";

const Header = () => {
  const { header } = contents;
  const { lan, changeLan } = useContext(GlobalState);

  return (
    <header className="flex flex-col sm:flex-row justify-between align-center  px-10 md:px-20 py-4 md:py-6 bg-purple-800 text-white">
      <h1 className="font-bold text-2xl md:text-3xl mb-2 sm:mb-0 text-center">
        <NavLink to="/">{lan === "En" ? header.logoEn : header.logoBn}</NavLink>
      </h1>
      <nav className="flex justify-center align-center text-md lg:text-lg flex-wrap sm:flex-nowrap">
        <ul className="flex justify-center align-center">
          {header.nav.map((navItem, index) => (
            <li
              key={index}
              className={`${header.nav.length !== index + 1 ? "mr-4" : ""} `}
            >
              {lan === "En" ? (
                <LinkNav name={navItem.nameEn} link={navItem.link} />
              ) : (
                <LinkNav name={navItem.nameBn} link={navItem.link} />
              )}
            </li>
          ))}
        </ul>
        <select
          name="lan"
          id="lan"
          className="bg-transparent ml-4 sm:mt-0 pb-1 focus:outline-none cursor-pointer"
          onChange={(e) => changeLan(e.target.value)}
          value={lan}
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
