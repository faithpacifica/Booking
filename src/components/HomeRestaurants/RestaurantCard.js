import React from 'react';
import { Link } from 'react-router-dom';
import "./RestaurantCard.css";
import {Rating, Stack} from '@mui/material';


const RestaurantCard = ({restaurantobj}) => {
    // const IMG_URl = `https://media-cdn.tripadvisor.com/media`
    const mappedCuisine = restaurantobj.cuisine ? restaurantobj.cuisine.map((el, i) =>{
        return(
            <span key={i}>
            {el.name ? el.name : "  " }   </span>
        )
       
    }) : '';
    
    return (
     <div className="restaurant-contenrestaurant-content" >
        <Link to='/restaurants' >
            <div className='restaurant-card' >
             <div className="restaurant-card__img">
                { restaurantobj.photo ? <img className="restaurant-card__photo" src={restaurantobj.photo.images.original.url}  alt={restaurantobj.name}/> : <div className="restaurant-card__nophoto"><img src="img/No-Image-Placeholder.svg.png" width="200px"/></div> }
             </div>
             <div className="restaurant-card__main">
                <h3 className="restautant-card__name">{restaurantobj.name}</h3>
                <Stack spacing={1}>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </Stack>
                <span className="restaurant-card__reyting">{restaurantobj.rating}</span>             
                <p className="restaurant-card__reyting">{restaurantobj.price ? restaurantobj.price : <p className="restaurant-card__reyting">$$-$$$</p>}</p> 
                <p className="restaurant-card__description">{mappedCuisine}</p>
             </div>
            </div>

        </Link> 
        <button type="button" className="restaurant-card__like active" >
                <i className="fas fa-heart-circle restaurant-card-heart"></i>    
        </button>  
    </div>
    );
};

export default RestaurantCard;