import React from "react";
import PopularDestinationCard from './PopularDestinationsCard'

const PopularDestinations = () => {
  return (
    <div className="popular__destinations">
      <div className="container">
        <div className="popular__destinations__inner__box">
          <h2 className="popular__destinations__title">Popular Destinations</h2>
          <PopularDestinationCard />
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
