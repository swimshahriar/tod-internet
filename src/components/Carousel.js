import React from "react";

// assets
import arrowNext from "../assets/arrow_next.svg";
import arrowPrev from "../assets/arrow_prev.svg";

const Carousel = () => {
  return (
    <div className="w-full h-3/4 bg-gray-300 flex px-3 absolute">
      <button className="focus:outline-none">
        <img src={arrowPrev} alt="arrow_prev" className="w-16" />
      </button>
      <div className="flex-1 py-3">
        <h1>Carousel Content</h1>
      </div>
      <button className="focus:outline-none">
        <img src={arrowNext} alt="arrow_next" className="w-16" />
      </button>
      <div className="absolute bottom-3 left-1/2  flex justify-center align-middle">
        <div className="w-4 h-4 bg-gray-700 border-3 border-purple-700 rounded-full"></div>
        <div className="w-4 h-4 bg-gray-700 ml-3 rounded-full"></div>
        <div className="w-4 h-4 bg-gray-700 ml-3 rounded-full"></div>
      </div>
    </div>
  );
};

export default Carousel;
