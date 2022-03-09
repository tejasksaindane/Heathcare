// import React from "react";
import emailjs from "emailjs-com";

import "../Styles/Modal.css";
import React, { useState } from "react";

const Modal = ({ closeModal }) => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm();
  }

  const handle = () => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Gender", gender);
    localStorage.setItem("City", city);
    localStorage.setItem("Phone", phone);
  };
  const remove = () => {
    localStorage.removeItem("Name");
    localStorage.removeItem("Age");
    localStorage.removeItem("Gender");
    localStorage.removeItem("City");
    localStorage.removeItem("Phone");
  };
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  console.log(name);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {/* ------------------------------------------------ */}
        <div className="title">
          <label className="">FullName: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Gender : {"  "}</label>
          <input
            type="text"
            name="name"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        {/* ------------------------------------------------- */}
        <div className="modal-body">
          <label>Age : </label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <br />
          <div className="Modal-contact"></div>
          <label htmlFor="">Contact No : </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* -------------------------------------------------- */}
        <div className="footer">
          <label htmlFor="">City : </label>
          <input
            type="text"
            name="age"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {/* <button type="submit" onSubmit={sendEmail}>
            Submit
          </button> */}
          <button onClick={handle}>Add</button>
          <button onClick={remove}>Remove</button>
          <button onClick={() => closeModal(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
// https://covid19-api.com/country?name=India&format=json
// curl -X GET "https://covid19-api.com/country?name=India&format=json" -H "accept: application/json"
