import React from "react";
import { Link, useParams } from "react-router-dom";

const Detrails = () => {
  const { detailsId } = useParams();

  return (
    <div>
      <h2>Details: {detailsId}</h2>
      <div className="text-center">
        <Link to="/donate">
          <button className="btn btn-primary">Donate</button>
        </Link>
      </div>
    </div>
  );
};

export default Detrails;
