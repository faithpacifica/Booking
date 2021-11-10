import React from 'react';
import './SingleHotel.css'
import { Link } from 'react-router-dom';

const SingleHotel = () => {
    return (
        <Link className="single-hotel" to ='/hotel-info'>
        <div className="container">
           <div className="single-card">
             <img className="single-card__image" src='img/popular-place1.jpg'/>
             <span className="single-card__text">
               Breakfast included
             </span>
             <div className="single-info">
               <h3 className="single-info__title">Lotte city</h3>
               <div className='single-more'>
                 <div>
                    <span>UZS 1,260,000</span>
                    <Link to='/'>View Deal</Link>
                    <div>Free cancellation</div>
                    <span>Reserve now, pay at stay</span>
                 </div>
                 <div>
                   <span>green circles</span>
                   <Link to='/'>548 review</Link>
                   <div>
                   <i class="fas fa-wifi"></i><span>Free WiFi</span>
                   </div>
                   <div>
                   <i class="fas fa-parking"></i><span>Free Parking</span>
                   </div>

                 </div>
               </div>
               </div>

           </div>
        </div>
      </Link>
    );
};

export default SingleHotel;