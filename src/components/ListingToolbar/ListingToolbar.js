import React from 'react';
import './ListingToolbar.css';
import AddHotels from '../../pages/AddHotels';
import AddRestaurants from '../../pages/AddRestaurants';
import { Link } from 'react-router-dom';

const ListingToolbar = () => {
    return (
        <div>
           <Link to='/add-hotels'> <AddHotels /></Link>
           <Link to='/add-restaurants'><AddRestaurants /> </Link>
        </div>
    );
};

export default ListingToolbar;