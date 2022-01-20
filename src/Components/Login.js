import React from "react";
import "../Styles/Login.css";
// import doc from "../assets/Doctor-removebg.png";
import doc from "../assets/Doctortwo.png";
const Login = () => {
  return (
    <div className="login">
      <div className="login-left">
        <img src={doc} alt="" loading="lazy" />
      </div>
      <div className="login-right">
        <div className="login-header">
          <h1>Register Your Account</h1>
        </div>
        <div className="login-form">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="email" />
          <label htmlFor="">Contact No</label>
          <input type="number" />
          <label htmlFor="">Password</label>
          <input type="password" className="logi-pass" />
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
