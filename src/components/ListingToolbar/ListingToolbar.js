import React from 'react';
import './ListingToolbar.css';
import { Link } from 'react-router-dom';

const ListingToolbar = () => {
    return (
        <div>
           <Link to='/add-hotels'> Add hotels</Link>
           <Link to='/add-restaurants'>Add restaurants </Link>
        </div>
    );
};

export default ListingToolbar;