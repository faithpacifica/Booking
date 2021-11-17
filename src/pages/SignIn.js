import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';


const SignIn = () => {
    // let url = useLocation();
    // console.log(url);
    return (
        <div className='signIn-page'>
            <div className='signIn-form'>
                <h2 className='signIn-form__title'>Sign In With</h2>
                <div className='site-login-form'  > {/*TODO:formga qaytarish */}
                    <div className='login-form'>
                        <Link className='login-form__link login-form__link_face' to='/'><i className="fab fa-facebook-square"></i>Facebook</Link>
                        <Link className='login-form__link login-form__link_google' to='/'><img className='google-image' src='img/icon-google.png' alt='GOOGLE' />Google</Link>
                    </div>
                    <div className='login-communication'>
                        <label className='login-communication__interrogation'>Username</label>
                        <input className='login-communication__input' type='text' name='username' />
                        <label className='login-communication__interrogation'>Password</label>
                        <input className='login-communication__input' type='password' name='password' />
                        <button className='login-communication__btn' ><Link  to="/">Sign In</Link></button>
                        <div className='login-help'>
                            <span className='login-help__text'>Not a member?</span>
                            <Link className='login-help__link' to='/dashboard'>Sign up now</Link> 
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;