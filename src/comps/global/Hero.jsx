import React from "react";
import "../styles/Hero.css";
// import jeep from "../../assets/jeep.jpg";

const Hero = (props) => {
  return (
    <>
      <div className={props.className}>
        <img src={props.heroImg} alt="" />
      </div>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
    </>
  );
};

export default Hero;
