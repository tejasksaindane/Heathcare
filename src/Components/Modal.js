import React from "react";
import emailjs from "emailjs-com";

import "../Styles/Modal.css";

const Modal = ({ closeModal }) => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm();
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {/* ------------------------------------------------ */}
        <div className="title">
          <label className="">FullName: </label>
          <input type="text" name="name" />
          <label htmlFor="" className="">
            Gender : {"  "}
          </label>
          <select name="" id="">
            Gender
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Other</option>
          </select>
        </div>
        {/* ------------------------------------------------- */}
        <div className="modal-body">
          <label>Age : </label>
          <input type="number" name="age" />

          <br />
          <div className="Modal-contact"></div>
          <label htmlFor="">Contact No : </label>
          <input type="Number" />
        </div>

        {/* -------------------------------------------------- */}
        <div className="footer">
          <label htmlFor="">City : </label>
          <select name="" id="">
            <option value="">Ahmadnagar</option>
            <option value="">Amravati</option>
            <option value="">Akola</option>
            <option value="">Aurangabad</option>
            <option value="">Chandrapur</option>
            <option value="">Jalgaon</option>
            <option value="">Nashik</option>
            <option value="">Nagpur</option>
          </select>
          <button type="submit" onSubmit={sendEmail}>
            Submit
          </button>
          <button onClick={() => closeModal(false)}>Close</button>
          {/* <button>Continue</button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
