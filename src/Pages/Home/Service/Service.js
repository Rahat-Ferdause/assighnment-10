import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const {id, name, description, picture } = service;
  const navigate = useNavigate()
  const moveToDetails = id => {
    navigate(`/service/${id}`)
  };
  return (
    <div className="service">
      <h3>{name}</h3>
      <img style={{ width: "70%" }} src={picture} alt="" />
      <p>{description}</p>
      <button onClick={() => moveToDetails(id)} className="btn btn-primary">
        Donate
      </button>
    </div>
  );
};

export default Service;
