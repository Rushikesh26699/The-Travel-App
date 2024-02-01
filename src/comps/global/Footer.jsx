import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div>
          <h1>lets.GO</h1>
          <p>Choose Your Favourite Destinations</p>
        </div>
        <div>
          <a href="/">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-square-behance"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-square-twitter"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Home</a>
          <a href="/">Status</a>
          <a href="/">All Versions</a>
          <a href="/">License</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Github</a>
          <a href="/">Amazon</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">FAQ</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Services</a>
          <a href="/">Legal</a>
          <a href="/">Privacy</a>
          <a href="/">Copyrights</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
