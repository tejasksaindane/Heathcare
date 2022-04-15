import React, { useState } from "react";
import "../Styles/Navbar.css";
import { SiAircanada } from "react-icons/si";
import { FaBars, FaInstagramSquare, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* TODO ist Logo part */}
        <div className="logo">
          <h2>
            <span>H</span>ealth
            <span>C</span>are
          </h2>
        </div>
        {/* TODO 2nd part */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
          // className
        >
          <ul>
            {/* <Link to="#">
              <li>
                <a href="https://wonderful-galileo-907f1d.netlify.app">
                  Self Test
                </a>
              </li>
            </Link> */}
            <Link to="/Signin">
              <li>Appointment</li>
            </Link>
            <Link to="/Signin">
              <li>SignIn</li>
            </Link>
            <Link to="/Login">
              <li>SignUp</li>
            </Link>
            {/* <Link to="/about">
              <li>About</li>
            </Link> */}
          </ul>
        </div>
        {/* TODO 3rd Social media Links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="">
                <SiAircanada />
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebookF />
              </a>
            </li>
          </ul>
          {/* TODO Hamburger Menu start */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <FaBars />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
