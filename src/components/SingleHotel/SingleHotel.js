import React from 'react';
import './SingleHotel.css'
import { Link } from 'react-router-dom';

const SingleHotel = () => {
    return (
        <Link className="single-hotel" to ='/hotel-info'>
        <div className="container">
           SINGLE HOTEL COMPONENT
        </div>
      </Link>
    );
};

export default SingleHotel;