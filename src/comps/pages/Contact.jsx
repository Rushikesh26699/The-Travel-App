import React from "react";
import Navbar from "../global/Navbar";
import Hero from "../global/Hero";
import contactImg from "../../assets/contactImg.jpg";
import Footer from "../global/Footer";
import ContactForm from "../global/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        className="hero-mid"
        heroImg={contactImg}
        title="CONTACT US"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
