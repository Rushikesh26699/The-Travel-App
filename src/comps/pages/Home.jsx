import React from "react";
import Navbar from "../global/Navbar";
import Hero from "../global/Hero";
import img2 from "../../assets/img2.jpg";
import Destinations from "../helpers/Destinations";
import Trips from "../helpers/Trips";
import Footer from "../global/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        className="hero"
        heroImg={img2}
        title="Journey To The Horizons"
        text="Choose Your Vacations"
        url="/"
        btnClass="show"
        buttonText="Explore"
      />
      <Destinations />
      <Trips />
      <Footer />
    </>
  );
};

export default Home;
