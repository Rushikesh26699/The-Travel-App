import React from "react";
import "../styles/destination.css";

const DestinationData = (props) => {
  return (
    <div className={props.className}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.info}</p>
      </div>
      <div className="des-image">
        <img src={props.img1} alt="image1" />
        <img src={props.img2} alt="image2" />
      </div>
    </div>
  );
};

export default DestinationData;
