import React from "react";
import './Register.css';

const Register = () => {
  return (
    <div className="sign-up-page">
      <div className="sign-up-form">
        <h2 className="sign-up-form__title"> Register Account </h2>
    <div className="register-form-content">
      <form>
        <div className="form-group">
          <label className="form-group__label" for="username">Username</label>
          <input className="form-group__input" type="text" id="username" name="username" required="required" />
        </div>
        <div className="form-group">
          <label className="form-group__label" for="password">Password</label>
          <input className="form-group__input" type="password" id="password" name="password" required="required"/>
        </div>
        <div className="form-group">
          <label className="form-group__label" for="cpassword">Confirm Password</label>
          <input className="form-group__input" type="password" id="cpassword" name="cpassword" required="required" />
        </div>
        <div className="form-group">
          <label className="form-group__label" for="email">Email Address</label>
          <input className="form-group__input" type="email" id="email" name="email" required="required" />
        </div>
          <button className="register-form__btn" type="submit">Register</button>
      </form>
    </div>
      </div>
    </div>
  );
};

export default Register;
