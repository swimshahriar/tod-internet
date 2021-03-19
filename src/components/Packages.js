import React from 'react';

// components
import Package from './Package';

const Packages = ({ contents }) => {
  return (
    <div className="px-10 md:px-20">
      <h2 className="text-center font-bold text-3xl lg:text-4xl">
        {contents.title}
      </h2>
      {contents.info.map((packageInfo, index) => {
        return (
          <Package
            packageInfo={packageInfo}
            fav={packageInfo.fav}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Packages;
