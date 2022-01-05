import React from "react";
import "../Styles/Modal.css";

const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {/* ------------------------------------------------ */}
        <div className="title">
          <label className="">FullName: </label>
          <input type="text" />
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
          <input type="number" />

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
          <button onClick={() => closeModal(false)}>Close</button>
          {/* <button>Continue</button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
