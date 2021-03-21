import React from "react";

const WhyOurNetwork = ({ contents }) => {
  return (
    <div
      className="py-28 px-10 md:px-20 dark:bg-gray-800"
      style={{ minHeight: "35rem" }}
    >
      <h2 className="text-center font-bold text-3xl lg:text-4xl text-gray-700 dark:text-gray-100 uppercase">
        {contents.title}
      </h2>
      <div className="flex justify-center md:justify-between flex-wrap mt-20 ">
        {contents.features.map((content, index) => {
          return (
            <div className="w-60 lg:w-70 text-center m-5 lg:m-0" key={index}>
              <button className="focus:outline-none text-6xl text-gray-100 bg-gray-800 dark:bg-purple-700 p-5 rounded-full shadow-lg">
                {content.icon}
              </button>

              <h4 className="text-lg text-gray-600 dark:text-gray-100 mt-5">
                {content.desc}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyOurNetwork;
