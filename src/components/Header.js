import React from "react";
import { NavLink } from "react-router-dom";

// header contents
import contents from "../contents/index";

const Header = () => {
  const { header } = contents;
  return (
    <header className="flex flex-col sm:flex-row justify-between align-center  px-20 py-4 md:py-6 bg-purple-800 text-white">
      <h1 className="font-bold text-2xl md:text-3xl mb-2 sm:mb-0 text-center">
        <NavLink to="/">{header.logo}</NavLink>
      </h1>
      <nav>
        <ul className="flex justify-center align-center text-md md:text-lg">
          {header.nav.map((navItem, index) => (
            <li
              key={index}
              className={`${header.nav.length !== index + 1 ? "mr-4" : ""} `}
            >
              <NavLink
                to={navItem.link}
                className="p-1 transition-all duration-200 delay-100 ease-in"
                exact
                activeClassName="border-b-4 border-white"
              >
                {navItem.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
