import React from 'react';
import { Link } from 'react-router-dom';
import './PopularDestinationsCard.css'

const PopularDestinationsCard = () => {
    return (
        <div className ='test-box olib-tashlanadi'>
        <Link className='popular_destinations_card_link' to = '/city:id'>
            <div className='popular_card_wrapper'>
                <img className='popular_destinations_card_img' src="/../img/popular-place1.jpg" alt="" width="272" height="272"/>
                <div className='popular_destinations_card_city'>Tulum, Mexico</div>
            </div>
        </Link>
        {/* Pastdagilari kerak emas  keyinroq swiper qushish*/}
        <Link className='popular_destinations_card_link' to = '/city:id'>
            <div className='popular_card_wrapper'>
                <img className='popular_destinations_card_img' src="/../img/popular-place2.jpg" alt="" width="272" height="272"/>
                <div className='popular_destinations_card_city'>Bora Bora, French Polynesia</div>
            </div>
        </Link>
        <Link className='popular_destinations_card_link' to = '/city:id'>
            <div className='popular_card_wrapper'>
                <img className='popular_destinations_card_img' src="/../img/popular-place3.jpg" alt="" width="272" height="272"/>
                <div className='popular_destinations_card_city'>Tenerife, Spain</div>
            </div>
        </Link>
        <Link className='popular_destinations_card_link' to = '/city:id'>
            <div className='popular_card_wrapper'>
                <img className='popular_destinations_card_img' src="/../img/popular-place4.jpg" alt="" width="272" height="272"/>
                <div className='popular_destinations_card_city'>
                    <h3 className='popular_destinations_card_city'>Hawaii</h3>
                </div> 
            </div>
        </Link>
        
        </div>
    );
};

export default PopularDestinationsCard;