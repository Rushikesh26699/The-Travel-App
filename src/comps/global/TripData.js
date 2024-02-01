import React from "react";
import "../styles/trips.css";

const TripData = (props) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="t-cardimg" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.info}</p>
    </div>
  );
};

export default TripData;
