import React from "react";

const Partner = ({ info }) => {
  return (
    <div
      className="flex-1 pt-9 font-bold text-xl text-center bg-gray-200"
      style={{ minWidth: "12rem", minHeight: "6rem" }}
    >
      {info.name}
    </div>
  );
};

export default Partner;
