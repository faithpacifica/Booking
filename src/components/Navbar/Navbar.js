import React from 'react';
import  {Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
        <div className='site-navbar'>
            <div className='container'>
                <ul className='site-navbar-list'>
                    <li className='site-navbar-item'>
                    <Link className='site-navbar-link' to='/hotels'>
                        <i className="fas fa-hotel" ></i> {/*TODO:icon chiqmadi */}
                        <span className='site-navbar-text' > Hotels</span>
                     </Link>
                    </li>
                    <li className='site-navbar-item'>
                    <Link className='site-navbar-link' to='/things_to_do'>
                        <i className="far fa-calendar-check"></i>
                        <span className='site-navbar-text'> Things to Do</span>
                    </Link>
                    </li>
                    <li className='site-navbar-item'>
                    <Link className='site-navbar-link' to='/restaurants'>
                    <i className="fas fa-utensils"></i>
                        <span className='site-navbar-text'>Restaurants</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;