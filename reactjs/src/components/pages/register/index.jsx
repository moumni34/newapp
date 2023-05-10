import React, { useEffect } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { LoginImg, logo, NetIcon1, NetIcon2 } from "../../imagepath";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import * as yup from "yup";
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import "../../../assets/js/jquery-3.6.0.min.js"




const Register = (props) => {

  const [eye,seteye] = useState(true)

    const onEyeClick = () =>{
      seteye(!eye)
    }



  var settings = {
    //autoWidth: true,
    items: 2,
    margin: 25,
    dots: true,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],

    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };

  return (
    <>
      <div className="main-wrapper log-wrap">
        <div className="row">
          {/* Login Banner */}
          <div className="col-md-6 login-bg">
            <OwlCarousel
              {...settings}
              className="owl-carousel login-slide owl-theme"
            >
              <div className="welcome-login">
                <div className="login-banner">
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    DreamsLMS Courses.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
              <div className="welcome-login">
                <div className="login-banner">
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    DreamsLMS Courses.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
              <div className="welcome-login">
                <div className="login-banner">
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    DreamsLMS Courses.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
          {/* /Login Banner */}
          <div className="col-md-6 login-wrap-bg">
            {/* Login */}
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="img-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                  <div className="back-home">
                    <Link to="/">Back to Home</Link>
                  </div>
                </div>
                <h1>Sign up</h1>
                <form action="/reactjs/login">
                  <div className="form-group">
                    <label className="form-control-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Full Name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Password</label>
                      <div className="pass-group" id="passwordInput">																	
										<input className="form-control pass-input" placeholder="Enter your password" type={eye ? "password" : "text"}/>
                    {/* <span onClick={onEyeClick} className={`fa toggle-password feather-eye" ${eye ? "fa-eye" : "fa-eye-slash" }`}/> */}
                    <span onClick={onEyeClick} className={`fa toggle-password feather-eye" ${eye ? "fa-eye" : "fa-eye-slash" }`}/>
										<span className="toggle-password feather-eye"></span>
										<span className="pass-checked"><i className="feather-check"></i></span>
									</div>
                    <div className="password-strength" id="passwordStrength">
                      <span id="poor" />
                      <span id="weak" />
                      <span id="strong" />
                      <span id="heavy" />
                    </div>
                    <div id="passwordInfo" />
                  </div>
                  <div className="form-check remember-me">
                    <label className="form-check-label mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                      />
                      I agree to the
                      <Link to="/term-condition">Terms of Service</Link> and
                      <Link to="/privacy-policy">Privacy Policy.</Link>
                    </label>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-start" type="submit"
                      // onClick={() => navigate("/login")}
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
              <div className="google-bg text-center">
                <span>
                  <Link to="#">Or sign in with</Link>
                </span>
                <div className="sign-google">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src={NetIcon1} className="img-fluid" alt="Logo" />
                        Sign In using Google
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={NetIcon2} className="img-fluid" alt="Logo" />
                        Sign In using Facebook
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="mb-0">
                  Already have an account? <Link to="/login">Sign in</Link>
                </p>
              </div>
            </div>
            {/* /Login */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
