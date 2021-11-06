import React from 'react';
// import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className ='site_footer'>
            <div className='container'>
               <div className ='site_footer__inner_wrapper'>
                    <div className= 'about_us'>
                        <div><a >About Us</a></div>
                        {/* TODO: Link qanday yoziladi? */}
                        <div><a >Advertising</a></div>
                    </div>

                    <ul className = 'choices'>
                        <li><a>Countires</a></li>
                        <li><a>Cities</a></li>
                        <li><a>Hotels</a></li>
                    </ul>

                    <ul className= 'more'>
                        <li><a>Reviews</a></li>
                        <li><a>Articles</a></li>
                        <li><a>Ideas for Travel</a></li>
                    </ul>

                    <ul className= 'socials'>
                        <li><a>Facebook</a></li>
                        <li><a>Instagram</a></li>
                        <li><a>Twitter</a></li>
                    </ul>
               </div>
            </div>
        </div>
    );
};

export default Footer;