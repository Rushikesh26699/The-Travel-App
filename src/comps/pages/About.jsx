import React from "react";
import Navbar from "../global/Navbar";
import Hero from "../global/Hero";
import night from "../../assets/night.jpg";
import Footer from "../global/Footer";
import AboutData from "../global/AboutData";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        className="hero-mid"
        heroImg={night}
        title="ABOUT"
        btnClass="hide"
      />
      <AboutData />
      <Footer />
    </>
  );
};

export default About;
