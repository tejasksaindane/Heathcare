import React from "react";
import "../Styles/Login.css";
import doc from "../assets/Doctor-removebg.png";
import { FaRegEnvelope } from "react-icons/fa";

const Signin = () => {
  return (
    <div className="login">
      <div className="login-left">
        <img src={doc} alt="" />
      </div>
      <div className="login-right">
        <div className="login-header">
          <h1>Sign In Here</h1>
        </div>
        <div className="login-form">
          <label htmlFor="">
            {/* <FaRegEnvelope /> */}
            Email
          </label>
          <input type="email" />
          <label htmlFor="">Password</label>
          <input type="password" className="logi-pass" />
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
