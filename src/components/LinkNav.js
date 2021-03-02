import React from "react";
import { NavLink } from "react-router-dom";

const LinkNav = ({ name, link }) => {
  return (
    <NavLink
      to={link}
      className="p-1 transition-all duration-200 delay-100 ease-in"
      exact
      activeClassName="border-b-4 border-white"
    >
      {name}
    </NavLink>
  );
};

export default LinkNav;
