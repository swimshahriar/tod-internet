import React, { useState, useEffect } from "react";

// assets
import arrowNext from "../assets/arrow_next.svg";
import arrowPrev from "../assets/arrow_prev.svg";
import computer from "../assets/computer.jpg";
import fiberOptic from "../assets/fiber_optic.jpg";

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
    <div
      className="w-full flex px-3 relative"
      style={{
        backgroundImage: `url(${carouselIndex === 0 ? computer : fiberOptic})`,
        backgroundSize: "cover",
        height: "75vh"
      }}
    >
      <button className="focus:outline-none absolute top-1/2 left-5">
        <img
          src={arrowPrev}
          alt="arrow_prev"
          className="w-12 md:w-16"
          onClick={prevClickHandler}
        />
      </button>

      <div className="py-3 text-center m-auto">
        <h1 className="my-3 px-3 py-5 text-2xl md:text-5xl bg-purple-700 dark:bg-gray-800 text-gray-100 uppercase font-bold">
          {carouselContent.title}
        </h1>
        <h1 className="my-3 px-3 py-3 text-xl md:text-2xl bg-gray-800 dark:bg-purple-700 text-gray-100">
          {carouselContent.description}
        </h1>
      </div>

      <button className="focus:outline-none absolute top-1/2 right-5">
        <img
          src={arrowNext}
          alt="arrow_next"
          className="w-12 md:w-16"
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
