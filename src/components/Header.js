import React from "react";
import { NavLink } from "react-router-dom";

// header contents
import contents from "../contents/index";

const Header = () => {
  const { header } = contents;
  return (
    <header className="flex justify-between align-center px-20 py-7 md:py-8 bg-purple-800 text-white">
      <h1 className="font-bold text-3xl">
        <NavLink to="/">{header.logo}</NavLink>
      </h1>
      <nav>
        <ul className="flex justify-center align-center text-lg">
          {header.nav.map((navItem, index) => (
            <li
              key={index}
              className={`${header.nav.length !== index + 1 ? "mr-4" : ""} `}
            >
              <NavLink
                to={navItem.link}
                className="p-1 hover:animate-bounce"
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
