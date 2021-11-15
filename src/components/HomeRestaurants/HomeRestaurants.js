import React from 'react';
import RestaurantCard from './RestaurantCard';
import './HomeRestaurants.css';
import SwiperCore , { Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Loader from '../Loader';
import {useState, useEffect } from 'react';

const getApiOptions = {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "x-rapidapi-key": "96d09624a0mshd17f2815dd604b3p14595fjsn42f8a22763f6"
    }
	
};

const HomeRestaurants = ({lat, long}) => {

    SwiperCore.use([Autoplay]);

    const [restaurantList, setRestaurantList] = useState([]);
    const [isLoading, setIsLoading] = useState (true);
    const [error, setError] = useState();

    useEffect(()=>{
        if(lat != 0 && long !=0) {
            fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${lat}&longitude=${long}&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US`, getApiOptions )
            .then(response => {
                if(!response.ok){
                    throw Error('Error in the server')
                }
                return response.json();
            }).then(data => {
                console.log(data.data);
                setRestaurantList(data.data);
                setIsLoading(false);
             
                
            })
            .catch(err => { 
                setIsLoading(false);
                setError(err.message);
                console.error(err);
            });
        }


    }, [lat, long]);



    return (
        <div className='main-page-accomodation'>
            <div className='container'>
                <h2 className='main-page-accomodation__title component-heading'>You might like these</h2>
                <p  className='component-text'>More restaurants in <span className='local-city'>Tashkent</span></p>
                <div className = 'main-page-accomodation__inner_wrapper'> 
                {error ? <h3>{error}</h3>: ''}
                {isLoading ? <Loader/> : ''} 
                {!isLoading && !error ?
                <Swiper    
                modules={[Autoplay]} 
                grabCursor={true}
                spaceBetween={30}
                slidesPerView={4}
                loop autoplay={{delay:3000, disableOnInteraction:false}}>
                {restaurantList.filter(el => el.hasOwnProperty('photo')).map((el, i)=>
                (<SwiperSlide key={i}><RestaurantCard restaurantobj={el} /></SwiperSlide>))}   
             {/* {movieList.map(el => (<SwiperSlide key={el.id}><Movie movieobj={el} /></SwiperSlide>))} */}
                </Swiper>  : ''} 
                  
                </div>
                
            </div>

        </div>
    );
};

export default HomeRestaurants;