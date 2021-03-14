import React from "react";

const WhyOurNetwork = ({ contents }) => {
  return (
    <div className="pt-20 h-96 px-10 md:px-20 dark:bg-gray-800 dark:text-gray-100">
      <h2 className="text-center font-bold text-4xl">{contents.title}</h2>
      <div className="flex justify-between flex-wrap mt-16 ">
        {contents.features.map((content, index) => {
          return (
            <div className="w-80" key={index}>
              <div className="w-24 h-24 bg-gray-800 dark:bg-purple-700 rounded-full">
                <button className="focus:outline-none text-6xl text-gray-100">
                  {content.icon}
                </button>
              </div>
              <h4>{content.desc}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyOurNetwork;
