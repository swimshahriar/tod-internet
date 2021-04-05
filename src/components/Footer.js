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
      <div className="dark:bg-gray-800 pt-7" style={{ minHeight: "20rem" }}>
        <div className="mx-10 md:mx-20 px-10 py-5 flex justify-center md:justify-between flex-wrap md:flex-nowrap bg-gray-200 border-t-4 border-purple-700 rounded-t shadow-md">
          <div className="m-3 h-76 w-96">
            <h4 className="font-bold text-xl mb-7 border-b-2 border-purple-700">
              {footer.mediaServices.title}
            </h4>
            <ul>
              {footer.mediaServices.list.map((media, index) => {
                return (
                  <li key={index} className="mt-3 flex text-lg">
                    <a href={media.link}>{media.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="m-3 h-76 w-96">
            <h4 className="font-bold text-xl mb-7 border-b-2 border-purple-700">
              {footer.pages.title}
            </h4>
            <ul>
              {footer.pages.list.map((page, index) => {
                return (
                  <li key={index} className="mt-3 flex text-lg">
                    <Link to={page.link}>{page.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="m-3 h-76 w-96">
            <h4 className="font-bold text-xl mb-7 border-b-2 border-purple-700">
              {footer.socialLinks.title}
            </h4>
            <ul>
              {footer.socialLinks.links.map((link, index) => {
                return (
                  <li key={index} className="mt-3 flex text-lg">
                    <span className="mr-3 pt-1">{link.icon}</span>
                    <a href={link.link}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 dark:bg-purple-700 text-center p-5 text-xl font-bold text-gray-100">
        <p>{footer.copyright}</p>
      </div>
    </>
  );
};

export default Footer;
