import React from "react";
import "../Styles/Home.css";
import FirstPage from "./FirstPage";
import Nutrition from "./Nutrition";
import Slider from "./Slider";
import Doctor from "../assets/Doctortwo.png";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="Home">
        <div className="Home-Container">
          <div className="Home-left">
            <h1>
              Take Care of Your <br />
              Health Anytime Anywhere.
            </h1>
            <p>Your Companion guide and friend in journey of your life.</p>
          </div>
          <div className="Home-right">
            <div className="home-rightimg">
              <img src={Doctor} alt="" />
            </div>
          </div>
        </div>
      </div>
      <FirstPage />
      <Nutrition />
      <Slider />
    </>
  );
};

export default Home;