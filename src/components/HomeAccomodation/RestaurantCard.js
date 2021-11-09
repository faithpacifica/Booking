import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./RestaurantCard.css"
// import HalfRating from './MaterialRaiting';

const CityCard = () => {

    return (
        <Link to='/city'>
            <div className='restaurant-card'>
             <div className="restaurant-card__img">
                <img className="restaurant-card__photo" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9d/36/c2/bitlisli.jpg?w=800&h=600&s=1" alt=""/>
                <button type="button" className="restaurant-card__like active" >
                <i class="fas fa-heart-circle restaurant-card-heart"></i>
              </button>
             </div>
             <div className="restaurant-card__main">
                <h3 className="restautant-card__name">Bitlisli</h3>
                <span className="restaurant-card__reyting">2722</span>  
                <p className="restaurant-card__description">Средиземноморская, Турецкая, Ближневосточная</p>
             </div>
            </div>
        </Link>
    );
};

export default CityCard;