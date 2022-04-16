import React, { useState } from "react";
import "../Styles/Login.css";
import doc from "../assets/Doctortwo.png";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../backend";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: " ",
    phone: " ",
    password: " ",
  });
  // console.log(values);
  // const { name, email, phone, password } = user;

  let name, value;
  // let value;
  const handleChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password } = user;
    // const res = await fetch("/register", {
    console.log(user);
    // const res = await fetch(`http://localhost:8000/registers`, {
    const res = await fetch(
      ` https://healthproj-backend.herokuapp.com/8000/registers`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
        }),
      }
    );
    const data = res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert(" registration successfull");
      console.log(" registration successfull");
      navigate("/signin");
    }
  };

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
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            value={user.email}
            onChange={handleChange}
          />
          <label htmlFor="">Contact No</label>
          <input
            type="tel"
            name="phone"
            values={user.phone}
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            className="logi-pass"
            values={user.password}
            onChange={handleChange}
          />
          <button onClick={PostData} type="submit" name="signup">
            Sign Up
          </button>
          <Link to="/signin">
            <p>I'm already registered</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
