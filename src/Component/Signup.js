import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Component/Signup.css";
import { setUser } from "../actions";

const Signup = () => {
  const [ error,setError] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;
    const countrycode = e.target.countrycode.value;
    const mobileno = e.target.mobileno.value;
    //Validate Input 
    if (name.length < 1 || name.length > 40 || /^[a-zA-Z]+( [a-zA-Z]+)*$/.test(name)==false) {
      setError('Name is not valid.');
      return;
    }

    // Validate email
    if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)==false || email.includes('.yopmail') || email.toUpperCase() === email) {
      setError('Email is not valid.');
      return;
    }

    // Validate password
    if (password.length < 7 || password.length > 12 || password.includes(' ')) {
      setError('Password is not valid.');
      return;
    }

    // Validate confirm password
    if (password !== confirmpassword) {
      setError('Confirm password does not match.');
      return;
    }

    // Validate country code
    if (/^\+?\d{1,3}$/.test(countrycode)) {
      setError('Country code is not valid.');
      return;
    }

    // Validate mobile number
    if (mobileno.length < 10 || mobileno.length > 12 || mobileno.startsWith('0')) {
      setError('Mobile number is not valid.');
      return;
    }

    else{
      setError('');
    }


    //console.log(name,email,password);
    dispatch(
      setUser(name, email, password, confirmpassword, countrycode, mobileno)
    );
    e.target.name.value = '';
    e.target.email.value = '';
    e.target.password.value = '';
    e.target.confirmpassword.value = '';
    e.target.countrycode.value = '';
    e.target.mobileno.value = '';

  };
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <br/>
      <form onSubmit={handleSubmit}>
        <div className="box">
          <label htmlFor="name" className="fl fontLabel">
            Name:{" "}
          </label>
          <div className="new iconBox">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="text"
              name="name"
              id = "name"
              placeholder="Name"
              className="textBox"
              minLength={1}
              maxLength={40}
              required
            />
          </div>
          <div className="clr"></div>
        </div>

        <div className="box">
          <label htmlFor="email" className="fl fontLabel">
            {" "}
            Email ID:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="email"
              required
              name="email"
              placeholder="Email Id"
              className="textBox"
            />
          </div>
          <div className="clr"></div>
        </div>

        <div className="box">
          <label htmlFor="password" className="fl fontLabel">
            {" "}
            Password:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              minLength={7}
              maxLength={12}
              className="textBox"
            />
          </div>
          <div className="clr"></div>
        </div>

        <div className="box">
          <label htmlFor="confirmpassword" className="fl fontLabel">
            Confirm:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="password"
              required
              name="confirmpassword"
              placeholder="Confirm Password"
              className="textBox"
              minLength={7}
              maxLength={12}
            />
          </div>
          <div className="clr"></div>
        </div>

        <div className="box">
          <label htmlFor="countrycode" className="fl fontLabel">
            Code:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="text"
              name="countrycode"
              placeholder="Country Code"
              className="textBox"
            />
          </div>
          <div className="clr"></div>
        </div>

        <div className="box">
          <label htmlFor="mobileno" className="fl fontLabel">
            {" "}
            Mobile No.:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-phone-square" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="tel"
              required
              name="mobileno"
              minLength={10}
              maxlength={12}
              placeholder="Mobile no."
              className="textBox"
            />
          </div>
          <div className="clr"></div>
        </div>
        <br/>
        <br/>
        {error && <p className="error">{error}</p>}
        <br/>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
