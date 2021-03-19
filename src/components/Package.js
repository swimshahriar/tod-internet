import React from 'react';

const Package = ({ packageInfo, fav }) => {
  return (
    <div>
      <h2>{packageInfo.name}</h2>
      <h4>{packageInfo.price} TK/month</h4>
      <div>
        {packageInfo.features.map((feature, index) => {
          return <p key={index}>{feature}</p>;
        })}
      </div>
    </div>
  );
};

export default Package;
