import React from "react";
import "../styles/contactform.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <h1>Get in Contact with Us !</h1>
      <form action="">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Your Message" rows="4"></textarea>
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
