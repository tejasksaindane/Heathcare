import React, { useState, useEffect } from "react";
import "../Styles/Dashboard.css";
import Calendar from "../Components/Calendar";
import Charts from "../Components/Chart";
import { FaHome, FaStethoscope, FaCcStripe } from "react-icons/fa";
import { FcVideoCall, FcPhone, FcSettings, FcAbout } from "react-icons/fc";
import PieChart from "../Components/PieChart";
import Table from "../Components/Ptable";
import Modal from "../Components/Modal";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  // const callAboutPage = async () => {
  //   try {
  //     const res = await fetch(`http://localhost:8000/datacome`, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     navigate("./login");
  //   }
  // };
  // useEffect(() => {
  //   callAboutPage();
  // }, []);
  // ------------------------------------------------------------------------------------------------
  return (
    <>
      <div className="dashboard">
        {/*-------------------------------------------------TODO sidebar starts here ---------------------------------------------  */}
        <div className="sidebar">
          <div className="sidebar-header">
            <img
              src="https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png"
              alt=""
              width="80px"
              height="80px"
            />
            <h1>
              Helpers
              <br />
              Heathcare
            </h1>
          </div>

          {/* -------------------------------TODO Sidebar list starts here--------------------------------------- */}
          <div className="sidebar-list">
            <ul>
              <Link to="/">
                <li>
                  <span>
                    <FaHome />
                  </span>
                  Home
                </li>
              </Link>

              <li>
                <span>
                  <FaStethoscope />
                </span>
                Appointment
              </li>

              <li>
                <span>
                  <FcAbout />
                </span>
                Chat wih Doctor
              </li>

              <li>
                <span>
                  <FcPhone />
                </span>
                Voice Call Session
              </li>

              <li>
                <span>
                  <FcVideoCall />
                </span>
                Video call Session
              </li>

              <li>
                <span>
                  <FaCcStripe />
                </span>
                Payment
              </li>
              <li>
                <span>
                  <FcSettings />
                </span>
                Settings
              </li>
            </ul>
          </div>
        </div>
        {/* -------------------------------------------TODO Main dash starts here------------------------------------------------------------ */}
        <div className="maindash">
          {/* -------------------------------Header------------------- */}
          <div className="maindash-header">
            <h1>Heathcare Dashboard</h1>
            <h3>Hello ,Tejas saindane</h3>
          </div>
          <br />
          {/* ------------------------------Header ends here------------- */}
          <div className="maindash-center">
            <div className="mdc-one">
              <Calendar />
            </div>
            <div className="mdc-two">
              <Charts />
            </div>
            <div className="mdc-three">
              <PieChart />
            </div>
          </div>
          {/* --------------------------Maindash ends here--------------- */}
          <div className="maindash-bottom">
            <div className="mdb-one">
              <Table />
            </div>
            <div className="mdb-two">
              <h2>Add Patients Detail here</h2>
              <button
                className="openModalBtn"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                open
              </button>
              {openModal && <Modal closeModal={setOpenModal} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
