import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className ='site_footer'>
            <div className='container'>
               <div className ='site_footer__inner_wrapper'>
                    <div className= 'about_us'>
                        <div><Link>About Us</Link></div>
                        <div><Link>Advertising</Link></div>
                    </div>

                    <ul className = 'choices'>
                        <li><Link>Countires</Link></li>
                        <li><Link>Cities</Link></li>
                        <li><Link>Hotels</Link></li>
                    </ul>

                    <ul className= 'more'>
                        <li><Link>Reviews</Link></li>
                        <li><Link>Articles</Link></li>
                        <li><Link>Ideas for Travel</Link></li>
                    </ul>

                    <ul className= 'socials'>
                        <li><Link>Facebook</Link></li>
                        <li><Link>Instagram</Link></li>
                        <li><Link>Twitter</Link></li>
                    </ul>
               </div>
            </div>
        </div>
    );
};

export default Footer;