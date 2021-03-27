import React from "react";

//component
import Service from "./Service";

const Services = ({ contents }) => {
  return (
    <div
      className="px-10 md:px-20 py-5 dark:bg-gray-800"
      style={{ minHeight: "35rem" }}
    >
      <h2 className="mt-20 text-center font-bold text-3xl lg:text-4xl text-gray-700 dark:text-gray-100 uppercase">
        {contents.title}
      </h2>
      <div className="flex flex-wrap justify-center align-middle mt-20">
        {contents.list.map((content, index) => {
          return (
            <Service key={index} icon={content.icon} desc={content.desc} />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
