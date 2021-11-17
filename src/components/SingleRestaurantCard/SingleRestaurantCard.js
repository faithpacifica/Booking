import React from 'react';
import './SingleRestaurantCard.css'
import {Rating, Stack} from '@mui/material';
import { Link } from 'react-router-dom';

const SingleRestaurantCard = ({resobj}) => {

    const mappedCuisine = resobj.cuisine ? resobj.cuisine.map((el, i) =>{
        return(
            <span key={i}>
            {el.name ? el.name : "  " }   </span>
        )
       
    }) : '';

    return (
        <div className='singleRestaurant-card'>
            <div className="singleRestaurant-card__photo">
                {resobj.photo ? <img src={resobj.photo.images.original.url} style={{ width: '367px', height: '230px', borderRadius: '4px' }} alt={resobj.name} /> : <div className="single-card__nophoto"><img src="img/No-Image-Placeholder.svg.png" width="200px" alt='No Image' /></div>}

            </div>
            <div className="singleRestaurant-card__info">
                <h3 className="singleRestaurant-card__title">{resobj.name}</h3>
                <div className='singleRestaurant-card-more'>
                    <div className='singleRestaurant-card-data'>
                      
                        <div className='singleRestaurant-card__secondary'>  
                        <span className='singleRestaurant-card__price'>{resobj.price ? resobj.price : <p className="restaurant-card__reyting">$$-$$$</p>}</span>
                        <Stack spacing={1}>
                       <Rating name="half-rating-read" defaultValue={resobj.rating} precision={0.5} readOnly />   
                       </Stack>
  
                       <p>{resobj.open_now_text}</p>                        
                       </div>
                        <p className='singleRestaurant-card__type'>{mappedCuisine}</p>
                        <div className="singleRestaurant-card__adress">
                        <p>{resobj.address}</p>
                        <span>{resobj.phone}</span>
                        <p>{resobj.website}</p> 
                        </div>
                      
                        <Link className='singleRestaurant-card__link' to='/'>View Deal</Link>
                        
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default SingleRestaurantCard;
