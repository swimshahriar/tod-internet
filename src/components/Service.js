import React from "react";

const Service = ({ icon, desc }) => {
  return (
    <div className="flex justify-center align-middle m-5 h-32 w-72 shadow-md border-t-4 rounded-t-md border-purple-700 hover:bg-gray-100 cursor-pointer">
      <button className="text-4xl mr-3">{icon}</button>
      <p className="mr-3 my-auto text-gray-700">{desc}</p>
    </div>
  );
};

export default Service;
