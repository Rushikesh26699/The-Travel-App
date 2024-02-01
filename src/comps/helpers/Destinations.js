import React from "react";
import "../styles/destination.css";
import dubai1 from "../../assets/dubai1.jpg";
import dubai2 from "../../assets/dubai2.jpg";
import mumbai1 from "../../assets/mumbai1.jpg";
import mumbai2 from "../../assets/mumbai2.jpg";

import DestinationData from "../global/DestinationData";

const Destinations = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Jobs fill your pocket, but adventures fill your soul</p>
      <DestinationData
        className="first-des"
        heading="Dubai , UAE"
        info="Dubai is a city and emirate in the United Arab Emirates known for
          luxury shopping, ultramodern architecture and a lively nightlife
          scene. Burj Khalifa, an 830m-tall tower, dominates the
          skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets
          and lights choreographed to music. On artificial islands just offshore
          is Atlantis, The Palm, a resort with water and marine-animal parks."
        img1={dubai1}
        img2={dubai2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mumbai , INDIA"
        info="Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry."
        img1={mumbai1}
        img2={mumbai2}
      />
    </div>
  );
};

export default Destinations;
