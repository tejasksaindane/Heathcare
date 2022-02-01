import React, { useState } from "react";
import "../Styles/Login.css";
import doc from "../assets/Doctortwo.png";
import { signup } from "../auth/index";

const Login = () => {
  const [values, setValues] = useState({
    name: "",
    email: " ",
    number: " ",
    password: " ",
  });
  // console.log(values);
  const { name, email, number, password } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  // const handleChange = (event) => {
  //   setValues(values);
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });
    signup({ name, email, number, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            number: "",
            password: "",
          });
        }
      })
      .catch(console.log("Error in signup"));
    alert("hello");
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
          <input type="text" values={name} onChange={handleChange("name")} />
          <label htmlFor="">Email</label>
          <input type="email" values={email} onChange={handleChange("email")} />
          <label htmlFor="">Contact No</label>
          <input
            type="number"
            values={number}
            onChange={handleChange("number")}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="logi-pass"
            values={password}
            onChange={handleChange("password")}
          />
          <button onClick={onSubmit}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
