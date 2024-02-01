import React from "react";
import "../styles/trips.css";
import TripData from "../global/TripData";
import italy from "../../assets/italy.jpg";
import singapore from "../../assets/singapore.jpg";
import australia from "../../assets/australia.jpg";

const Trips = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Travel becomes a strategy for accumulating photographs.</p>
      <div className="tripcard">
        <TripData
          image={italy}
          heading="Italy"
          info="Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo's David and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy's fashion capital"
        />

        <TripData
          image={singapore}
          heading="Singapore"
          info="Singapore, officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. It is located about one degree of latitude (137 kilometres or 85 miles) north of the equator, off the southern tip of the Malay Peninsula, bordering the Strait of Malacca to the west, the Singapore Strait to the south along with the Riau Islands in Indonesia, the South China Sea to the east, and the Straits of Johor along with the State of Johor in Malaysia to the north."
        />

        <TripData
          image={australia}
          heading="Australia"
          info="Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. Australia is the largest country by area in Oceania and the world's sixth-largest country"
        />
      </div>
    </div>
  );
};

export default Trips;
