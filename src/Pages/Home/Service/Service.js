import React from "react";
import './Service.css';

const Service = ({ service }) => {
  const { name, Price, description, picture } = service;
  return (
    <div className="service">
      <h3>Name: {name}</h3>
      <img style={{ width: "70%" }} src={picture} alt="" />
      <p>price:${Price}</p>
      <button>Reserve</button>
    </div>
  );
};

export default Service;
