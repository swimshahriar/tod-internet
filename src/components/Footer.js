import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

// global state
import { GlobalState } from "../context/context";

const Footer = () => {
  const state = useContext(GlobalState);
  const [footer, setFooter] = useState(state.en.footer);

  // content set
  useEffect(() => {
    if (state.lan === "Bn") {
      setFooter(state.bn.footer);
    } else {
      setFooter(state.en.footer);
    }
  }, [state.lan, state.en.footer, state.bn.footer]);

  return (
    <>
      <div
        className="flex justify-center md:justify-between flex-wrap md:flex-nowrap px-10 md:px-20 py-5 bg-gray-200 dark:bg-gray-800 border-t-4 border-purple-700 rounded-t"
        style={{ minHeight: "20rem" }}
      >
        <div className="m-3 h-96 w-96">Description</div>
        <div className="m-3 h-96 w-96">Pages</div>
        <div className="m-3 h-96 w-96">
          <h4 className="font-bold text-xl mb-7">{footer.socialLinks.title}</h4>
          <ul>
            {footer.socialLinks.links.map((link, index) => {
              return (
                <li key={index} className="mt-3 flex text-lg">
                  <span className="mr-3">{link.icon}</span>
                  <a href={link.link}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 dark:bg-purple-700 text-center p-5 text-xl font-bold text-gray-100">
        <p>{footer.copyright}</p>
      </div>
    </>
  );
};

export default Footer;
