import React from "react";
import Container from '@material-ui/core/Container';

import { useEffect } from "react";
import { useState } from "react";
import PopularDestinationCard from './PopularDestinationsCard';
// import styled, { css } from 'styled-components';
// import './PopularDestinations.css';


const PopularDestinations = () => {

  //   const [destination,setDestination]= useState([]);
  //   const [error, setError] = useState();

  //   useEffect(() => {
  //   fetch("https://travel-advisor.p.rapidapi.com/hotel-filters/v2/list?lang=en_US&units=km&currency=USD", {
  //     "method": "POST",
  //     "headers": {
  //       "content-type": "application/json",
  //       "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
  //       "x-rapidapi-key": "0d44b34b09msh11dc77b8f1a2d7cp1e6176jsn49718d676727"
  //     },
  //     "body": {
  //       "geoId": 293928,
  //       "sort": "POPULARITY",
  //       "sortOrder": "asc"
  //     }
  //   })
  //   .then(res => {
  //     if (!res.ok) {
  //       throw Error("Serverda ma'lumot olishda xatolik!!");
  //     }
  //     console.log(res);
  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     setDestination(data);
  //   })
  //   .catch(err => {
  //     setError(err.message);
  //     console.error(err);
  //   });
  // });

  return (
    <div className="popular__destinations">
      {/* <Container maxWidth="sm">  TODO:Containerni ishlatolmadim */}
      <div className="container">
        <div className="popular__destinations__inner__box">
          <h2 className="popular__destinations__title component-heading">Popular Destinations</h2>
          <p className="popular__destinations__text component-text">Recommended based on your activity</p>
          <PopularDestinationCard />
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default PopularDestinations;
