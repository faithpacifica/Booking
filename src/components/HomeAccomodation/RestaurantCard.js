import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./RestaurantCard.css"
import {useState, useEffect } from 'react';

const MY_API_KEY = "617581803fmshd0bc5f048941cabp138c17jsnce730a8b802f"
const RESTAURANT_API = `https://travel-advisor.p.rapidapi.com/restaurant-filters/v2/list?=${MY_API_KEY}currency=USD&units=km=&lang=en_US`


const CityCard = () => {
    const [restaurantList, setrestaurantList] = useState([]);


    useEffect(()=>{
      fetch(RESTAURANT_API).then(res => res.json(data=>{
          setrestaurantList(data.results);

      }))
    }, []);

    const mappedRestaurant = restaurantList.map(el=>{
        return(<div className="restaurant">{el.meal}</div>)
    })

 

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
                <h3 className="restautant-card__name">{mappedRestaurant}</h3>
                {/* <div spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </div> */}
                <span className="restaurant-card__reyting">2722</span>  
                <p className="restaurant-card__description">Средиземноморская, Турецкая, Ближневосточная</p>
             </div>
            </div>
        </Link>
    );
};

export default CityCard;