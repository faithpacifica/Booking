import React from 'react';
import './ListingToolbar.css';
import AddHotels from '../../pages/AddHotels';
import AddRestaurants from '../../pages/AddRestaurants';
import { Link } from 'react-router-dom';

const ListingToolbar = () => {
    return (
        <div>
           <Link to='/add-hotels'> add hotels</Link>
           <Link to='/add-restaurants'>add restaurants </Link>
        </div>
    );
};

export default ListingToolbar;