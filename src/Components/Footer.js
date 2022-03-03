import React from "react";
import "../Styles/Footer.css";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-header">
        <h1>Get In Touch of HealthCare</h1>
      </div>
      <div className="footer-container">
        <div className="footer-left">
          <ul>
            <li>Yoga Teacher</li>
            <li>Dieticians</li>
            <li>Fitness trainer</li>
            <li>Vaccinate me</li>
            <li>Corporate Wellness</li>
            <li>Terms and Condition</li>
          </ul>
        </div>
        <div className="footer-right">
          <div className="footer-follow">
            <h1>Follow me on : </h1>
          </div>
          <div className="footer-media">
            <img src={twitter} alt="" width="50vw" />
            <img src={linkedin} alt="" width="50vw" />
          </div>
          <div className="footer-linkers">
            <h3>
              <label htmlFor="email">Email : </label>
              <address>healthcare.ssct@2022.gmail.com</address>
              <label>Toll Free No ( सम्पर्क करें ): </label>
              <address>1800 - 257 - 257</address>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
