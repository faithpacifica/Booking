import React from 'react';
import { Link } from "react-router-dom";
import './SignIn.css';

const SignIn = () => {
    return (
        <div className='signIn-page'>
            <div className='signIn-form'>
                <h2 className='signIn-form__title'>Sign In With</h2>
                <form className='login-form site-login-form'>
                    <Link className='login-form__link_face' to='/'><i class="fab fa-facebook-square"></i>Facebook</Link>
                    <Link className='login-form__link_google' to='/'><img src='img/icon-google.png' alt='GOOGLE' />Google</Link>
                    <div className='login-communication'>
                        <label className='login-communication__interrogation'>Username</label>
                        <input className='login-communication__input' type='text' name='username' />
                        <label className='login-communication__interrogation'>Password</label><Link className='login-forgot' to='/'>Forgot?</Link>
                        <input className='login-communication__input' type='password' name='password' />
                        <button className='login-communication__btn' type='submit'>Sign In</button>
                        <div className='login-help'>
                            <span className='login-help__text'>Not a member?</span>
                            <Link className='login-help__link' to='/'>Sign up now</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;