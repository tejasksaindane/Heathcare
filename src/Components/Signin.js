import React, { useState } from "react";
import "../Styles/Login.css";
import doc from "../assets/Doctortwo.png";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("invalid credentials");
    } else {
      window.alert("Login Successful");
      navigate("/dashboard");
    }
  };

  return (
    <div className="login">
      <div className="login-left">
        <img src={doc} alt="" loading="lazy" />
      </div>
      <div className="login-right">
        <div className="login-header">
          <h1>Sign In Here</h1>
        </div>
        <div className="login-form">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="logi-pass"
          />
          <button type="submit" name="signin" onClick={loginUser}>
            Sign In
          </button>
          <Link to="/login">
            <p>Create an account</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
