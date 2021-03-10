import React, { useState, useEffect } from "react";

// assets
import arrowNext from "../assets/arrow_next.svg";
import arrowPrev from "../assets/arrow_prev.svg";

const Carousel = ({ contents }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselContent, setCarouselContent] = useState(
    contents[carouselIndex]
  );

  const nextClickHandler = () => {
    setCarouselIndex((prev) => (prev === contents.length - 1 ? 0 : prev + 1));
  };

  const prevClickHandler = () => {
    setCarouselIndex((prev) => (prev === 0 ? contents.length - 1 : prev - 1));
  };

  useEffect(() => {
    setCarouselContent(contents[carouselIndex]);
  }, [carouselIndex, contents]);

  return (
    <div className="w-full h-3/4 bg-gray-300 flex px-3 absolute">
      <img src={carouselContent.img} alt={`im-${carouselIndex}`} />
      <button className="focus:outline-none">
        <img
          src={arrowPrev}
          alt="arrow_prev"
          className="w-16"
          onClick={prevClickHandler}
        />
      </button>

      <div className="flex-1 py-3">
        <h1>{carouselContent.title}</h1>
        <h1>{carouselContent.description}</h1>
      </div>

      <button className="focus:outline-none">
        <img
          src={arrowNext}
          alt="arrow_next"
          className="w-16"
          onClick={nextClickHandler}
        />
      </button>
      {/* <div className="absolute bottom-3 left-1/2  flex justify-center align-middle">
        <div className="w-4 h-4 bg-gray-700 border-3 border-purple-700 rounded-full"></div>
        <div className="w-4 h-4 bg-gray-700 ml-3 rounded-full"></div>
        <div className="w-4 h-4 bg-gray-700 ml-3 rounded-full"></div>
      </div> */}
    </div>
  );
};

export default Carousel;
