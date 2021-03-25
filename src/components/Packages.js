import React from "react";
import { Link } from "react-router-dom";

// components
import Package from "./Package";

const Packages = ({ contents }) => {
  return (
    <div
      className="px-10 md:px-20 py-5 dark:bg-gray-800"
      style={{ minHeight: "35rem" }}
    >
      <h2 className="text-center font-bold text-3xl lg:text-4xl text-gray-700 dark:text-gray-100 uppercase">
        {contents.title}
      </h2>
      <div className="flex flex-wrap justify-around m-5 mt-20 ">
        {contents.info.map((packageInfo, index) => {
          return (
            <Package
              packageInfo={packageInfo}
              fav={packageInfo.fav}
              key={index}
            />
          );
        })}
      </div>
      <div className="w-full text-center">
        <button className="p-3 dark:bg-purple-700 bg-gray-700 dark:hover:bg-purple-800 hover:bg-gray-800 text-gray-100 text-xl font-bold uppercase rounded">
          <Link to="/packages">More Packages</Link>
        </button>
      </div>
    </div>
  );
};

export default Packages;
