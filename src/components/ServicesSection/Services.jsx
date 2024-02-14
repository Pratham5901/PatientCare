
import React from 'react';

const Services = ({ name, imageUrl, paragraph }) => {
  return (
    <div className="box">
      <div className="image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p className="price">{paragraph}</p>
       
      </div>
    </div>
  );
};

export default Services;
