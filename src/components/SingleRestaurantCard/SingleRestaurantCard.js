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
        <div className='single-card'>
            <div className="single-card__photo">
                {resobj.photo ? <img src={resobj.photo.images.medium.url} style={{ width: '300px', height: '180px', borderRadius: '4px' }} alt={resobj.name} /> : <div className="single-card__nophoto"><img src="img/No-Image-Placeholder.svg.png" width="200px" alt='No Image' /></div>}

            </div>
            <div className="single-info">
                <h3 className="single-info__title">{resobj.name}</h3>
                <div className='single-more'>
                    <div className='single-basic-data'>
                        <span className='single-basic-data__price'>{resobj.price ? resobj.price : <p className="restaurant-card__reyting">$$-$$$</p>}</span>
                        <div className='sinlge-basic-data__stay'>{resobj.rating}</div>
                        <span className='single-basic-data__type'>{mappedCuisine}</span>
                        <Link className='single-basic-data__link' to='/'>View Deal</Link>
                        
                    </div>
                    <div className='single-secondary-data'>
                    <Stack spacing={1}>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </Stack>
                        {/* <span className='single-secondary-data__class'>{singlerestaurantObj.hotel_class > 1 ? singlehotelobj.hotel_class : ''}</span>
                        <Link className='single-secondary-data__link' to='/'>{singlerestaurantObj.num_reviews}</Link> */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleRestaurantCard
