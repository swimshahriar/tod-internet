import React from "react";
import Partner from "./Partner";

const Partners = ({ contents }) => {
  return (
    <div
      className="px-10 md:px-20 py-5 dark:bg-gray-800"
      style={{ minHeight: "25rem" }}
    >
      <h2 className="mt-20 text-center font-bold text-3xl lg:text-4xl text-gray-700 dark:text-gray-100 uppercase">
        {contents.title}
      </h2>

      <div className="flex justify-center align-middle mt-20 bg-gray-100 overflow-x-scroll rounded shadow-md">
        {contents.list.map((partnerInfo, index) => {
          return <Partner info={partnerInfo} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Partners;
