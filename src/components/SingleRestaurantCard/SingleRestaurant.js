import React from 'react';
import './SingleRestaurant.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SingleRestaurantCard from './SingleRestaurantCard';
import Loader from '../Loader';



const getRestaurantApiOptions = {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "x-rapidapi-key": "96d09624a0mshd17f2815dd604b3p14595fjsn42f8a22763f6"
  }
}



const SingleRestaurant = () => {

  const [singlerestaurantList, setSingleRestaurantList] = useState([]);
  const [isLoading, setIsLoading] = useState (true);
  const [error, setError] = useState();

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(function (position) {
      if (position.coords.latitude && position.coords.longitude) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      }
    });

  }, []);




  useEffect(() => {
    if (lat !== 0 && long !== 0) {
      fetch(`https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng?latitude=${lat}&longitude=${long}&lang=en_US&limit=100&currency=USD`, getRestaurantApiOptions)
        .then(response => {
          if(!response.ok){
            throw Error('Error in the server')
        }
          return response.json();
        })
        .then(data => {
          console.log(data.data)
          setSingleRestaurantList(data.data)
          setIsLoading(false);
        })
        .catch(err => {
          console.error(err);
          setIsLoading(false);
          setError(err.message);
        });
    }

  }, [lat, long])





  return (
    <Link className="single-hotel" to='/'>
      <div className="container">

        {singlerestaurantList.filter(el => el.hasOwnProperty('photo')).map((el, i) => (
          <SingleRestaurantCard key={i} resobj={el} />
        ))}
        {error ? <h3>{error}</h3> : ''}
        {isLoading ? <Loader /> : ''}
        {!isLoading && !error ? singlerestaurantList : ''}

      </div>
    </Link>
  );
};

export default SingleRestaurant;