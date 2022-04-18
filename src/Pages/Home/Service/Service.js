import React from "react";

const Service = ({ service }) => {
  const { name, Price, description, picture } = service;
  return (
    <div>
      <h2>This is Service;</h2>
      <h3>Name:{name}</h3>
      <img src={picture} alt="" />
      <p>price:{Price}</p>
    </div>
  );
};

export default Service;
