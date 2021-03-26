import React from "react";

//component
import Service from "./Service";

const Services = () => {
  return (
    <div
      className="px-10 md:px-20 py-5 dark:bg-gray-800"
      style={{ minHeight: "35rem" }}
    >
      <h2 className="text-center font-bold text-3xl lg:text-4xl text-gray-700 dark:text-gray-100 uppercase">
        Services We Offer
      </h2>
      <div>
        <Service />
      </div>
    </div>
  );
};

export default Services;
