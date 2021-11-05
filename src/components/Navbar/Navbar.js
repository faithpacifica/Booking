import React from 'react';
import  {Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/hotels'>Hotels</Link>
            <Link to='/things_to_do'>Things to Do</Link>
            <Link to='/restaurants'>Restaurants</Link>
            <Link to='/flights'>Flights</Link>
        </div>
    );
};

export default Navbar;