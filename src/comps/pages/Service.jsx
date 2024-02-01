import React from "react";
import Navbar from "../global/Navbar";
import Hero from "../global/Hero";
import serviceImg from "../../assets/serviceImg.jpg";
import Footer from "../global/Footer";
import Trips from "../helpers/Trips";

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        className="hero-mid"
        heroImg={serviceImg}
        title="SERVICE"
        btnClass="hide"
      />
      <Trips />
      <Footer />
    </>
  );
};

export default Service;
