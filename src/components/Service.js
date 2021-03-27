import React from "react";

const Service = ({ icon, desc }) => {
  return (
    <div className="flex justify-center align-middle">
      <button className="text-4xl mr-3">{icon}</button>
      <p className="mr-3 text-gray-700">{desc}</p>
    </div>
  );
};

export default Service;
