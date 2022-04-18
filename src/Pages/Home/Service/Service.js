import React from "react";
import './Service.css';

const Service = ({ service }) => {
  const { name,description, picture } = service;
  return (
    <div className="service">
      <h3>{name}</h3>
      <img style={{ width: "70%" }} src={picture} alt="" />
      <p>{description}</p>
      <button>Donate</button>
    </div>
  );
};

export default Service;
