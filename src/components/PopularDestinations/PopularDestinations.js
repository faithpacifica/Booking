import React from "react";
// import Container from '@material-ui/core/Container';

// import { useEffect } from "react";
import { useState } from "react";
import PopularDestinationCard from './PopularDestinationsCard';
// import styled, { css } from 'styled-components';
// import './PopularDestinations.css';


const PopularDestinations = () => {

    // const [destination,setDestination]= useState([]);
    // const [error, setError] = useState();

    // useEffect(() => {
    // fetch("https://cities-cost-of-living1.p.rapidapi.com/get_cities_list", {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-host": "cities-cost-of-living1.p.rapidapi.com",
    //     "x-rapidapi-key": "0d44b34b09msh11dc77b8f1a2d7cp1e6176jsn49718d676727"
    //   }
    // })
    // .then(res => {
    //   if (!res.ok) {
    //     throw Error("Serverda ma'lumot olishda xatolik!!");
    //   }
    //   console.log(res);
    //   return res.json();
    // })
    // .then((data) => {
    //   console.log(data);
    //   setDestination(data);
    // })
    // .catch(err => {
    //   setError(err.message);
    //   console.error(err);
    // });
//     fetch("https://cities-cost-of-living1.p.rapidapi.com/get_cities_details", {
// 	"method": "POST",
// 	"headers": {
// 		"content-type": "application/x-www-form-urlencoded",
// 		"x-rapidapi-host": "cities-cost-of-living1.p.rapidapi.com",
// 		"x-rapidapi-key": "0d44b34b09msh11dc77b8f1a2d7cp1e6176jsn49718d676727"
// 	},
// 	"body": {
// 		"cities": "[{\"name\":\"Lisbon\",\"country\":\"Portugal\"},{\"name\":\"Paris\",\"country\":\"Spain (wrong country)\"},{\"name\":\"Hamilton\",\"country\":\"Bermuda\"},{\"name\":\"Saint Francisc (wrong city name)\",\"country\":\"United States\"}]",
// 		"currencies": "[\"Euro (wrong currency code)\",\"USD\",\"CHF\"]"
// 	}
// })
// .then(res => res.json()).then(data => { console.log(data)})
// .catch(err => {
// 	console.error(err);
// }, []);
//   });


//   fetch("https://cities-cost-of-living1.p.rapidapi.com/get_cities_list", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "cities-cost-of-living1.p.rapidapi.com",
// 		"x-rapidapi-key": "0d44b34b09msh11dc77b8f1a2d7cp1e6176jsn49718d676727"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
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
