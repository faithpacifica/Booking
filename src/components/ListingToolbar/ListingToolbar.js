import React from 'react';
import './ListingToolbar.css';
import { Link } from 'react-router-dom';

const ListingToolbar = () => {
    return (
        <div className='dashboard-nav'>
            <div className='dashboard-nav-inner'>
                <ul className='dashboard-nav-submenu' data-submenu-title='Menu'>
    
                    <li className="active"><a href="dashboard.html"><i className="fas fa-cog"></i>Dashboard</a></li>
                    <li><a href="dashboard-messages.html"><i className="fas fa-envelope-open"></i> Messages <span className="nav-tag messages">2</span></a></li>
                    <li><a href="dashboard-bookings.html"><i className="fas fa-copy"></i> Bookings</a></li>
                    <li><a href="dashboard-wallet.html"><i className="fas fa-copy"></i> Wallet</a></li>
                </ul>
                <ul className='dashboard-nav-submenu' data-submenu-title='Listings'>

                    <li><a><i className="fas fa-layer-group"></i> My Listings</a>
					<ul>
						<li><a href="dashboard-my-listings.html">Active <span className="nav-tag green">6</span></a></li>
						<li><a href="dashboard-my-listings.html">Pending <span className="nav-tag yellow">1</span></a></li>
						<li><a href="dashboard-my-listings.html">Expired <span className="nav-tag red">2</span></a></li>
					</ul>	
                    <li><a href="dashboard-reviews.html"><i className="far fa-star"></i> Reviews</a></li>
                    <li><a href="dashboard-bookmarks.html"><i className="far fa-heart"></i> Bookmarks</a></li>
                    <li><Link to='/add-hotels'><i className="fas fa-plus-circle"></i> Add Hotels</Link></li>
                    <li><Link to='/add-restaurants'><i className="fas fa-plus-circle"></i> Add Restaurantss</Link></li>
				</li>

                </ul>
                <ul className='dashboard-nav-submenu' data-submenu-title='Account'>

                    <li><a href="dashboard-my-profile.html"><i className="far fa-user"></i> My Profile</a></li>
                    <li><a href="index.html"><i className="fas fa-power-off"></i> Logout</a></li>

                </ul>
            </div>
        </div>
    );
};

export default ListingToolbar;