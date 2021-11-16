import { Link } from "react-router-dom";
import './SingleHotelsCard.css'
// import { Rating } from '@material-ui/Rating';{/*TODO:ISHLAMADI */}


// https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng?latitude=12.91285&longitude=100.87808&lang=en_US&hotel_className=1%2C2%2C3&limit=30&adults=1&amenities=beach%2Cbar_lounge%2Cairport_transportation&rooms=1&child_rm_ages=7%2C10&currency=USD&checkin=2020-01-08&zff=4%2C6&subcategory=hotel%2Cbb%2Cspecialty&nights=2


const SingleHotelsCard = ({ singlehotelobj }) => {
    return (
        <div className='single-card'>
            <div className="single-card__photo">
                {singlehotelobj.photo ? <img src={singlehotelobj.photo.images.medium.url} style={{ width: '300px', height: '180px', borderRadius: '4px' }} alt={singlehotelobj.name} /> : <div className="single-card__nophoto"><img src="img/No-Image-Placeholder.svg.png" width="200px" alt='No Image' /></div>}

            </div>
            <div className="single-info">
                <h3 className="single-info__title">{singlehotelobj.name}</h3>
                <div className='single-more'>
                    <div className='single-basic-data'>
                        <span className='single-basic-data__price'>{singlehotelobj.price}</span>
                        <div className='sinlge-basic-data__stay'>{singlehotelobj.autobroaden_label}</div>
                        <span className='single-basic-data__type'>{singlehotelobj.subcategory_type}</span>
                        <Link className='single-basic-data__link' to='/'>View Deal</Link>
                    </div>
                    <div className='single-secondary-data'>
                        {/* <Rating
                            name="text-feedback"
                            value={singlehotelobj.hotel_class > 1 ? singlehotelobj.hotel_class : ''}
                            readOnly
                            precision={0.5}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        /> */}{/*TODO:ISHLAMADI */}
                        <span className='single-secondary-data__class'>{singlehotelobj.hotel_class > 1 ? singlehotelobj.hotel_class : ''}</span>
                        <Link className='single-secondary-data__link' to='/'>{singlehotelobj.num_reviews}</Link>
                        <div className='single-icons'>
                            <i className="fas fa-wifi"></i><span className='single-icons__text'>Free WiFi</span>
                        </div>
                        <div className='single-icons'>
                            <i className="fas fa-parking"></i><span className='single-icons__text'>Free Parking</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleHotelsCard;