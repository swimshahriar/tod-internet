import React from "react";
import { Link } from "react-router-dom";

const Package = ({ packageInfo, lan }) => {
  return (
    <div className="m-5 shadow-lg" style={{ minWidth: "20rem" }}>
      <h2 className="text-center font-bold text-2xl bg-gray-700 text-gray-100 p-3 rounded-t">
        {packageInfo.name}
      </h2>

      <div className="w-full text-center bg-gray-100 border-b border-purple-700 py-3">
        <h4 className="w-1/2 mx-auto rounded-full text-gray-100 bg-gray-700 p-3 font-bold text-xl">
          {packageInfo.price}
        </h4>
      </div>
      <div className="bg-gray-100 text-gray-600">
        {packageInfo.features.map((feature, index) => {
          return (
            <p className="border-b border-purple-700 p-3" key={index}>
              {feature}
            </p>
          );
        })}
      </div>

      <button className="p-3 bg-purple-700 hover:bg-purple-800 w-full text-gray-100 text-xl font-bold uppercase">
        <Link to="/contact">{lan === "En" ? "Contact" : "যোগাযোগ"}</Link>
      </button>
    </div>
  );
};

export default Package;
