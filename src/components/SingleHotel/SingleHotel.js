import React from 'react';
import './SingleHotel.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SingleHotelsCard from './SingleHotelsCard';
import Loader from '../Loader';



const getHotelApiOptions = {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "617581803fmshd0bc5f048941cabp138c17jsnce730a8b802f"
  }
}



const SingleHotel = () => {

  const [singlehotelsList, setSingleHotelsList] = useState([]);
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
      fetch(`https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng?latitude=${lat}&longitude=${long}&lang=en_US&limit=100&currency=USD&`, getHotelApiOptions)
        .then(response => {
          if(!response.ok){
            throw Error('Error in the server')
        }
          return response.json();
        })
        .then(data => {
          console.log(data.data)
          setSingleHotelsList(data.data)
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

    <Link className="single-hotel" to='/hotel-info'>
      <div className="container">

        {singlehotelsList.filter(el => el.hasOwnProperty('photo')).map((el, i) => (
          <SingleHotelsCard key={i} singlehotelobj={el} />
        ))}
        {error ? <h3>{error}</h3> : ''}
        {isLoading ? <Loader /> : ''}
        {!isLoading && !error ? setSingleHotelsList : ''}

      </div>
    </Link>
  );
};

export default SingleHotel;