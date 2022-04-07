import React from "react";
import "../Styles/Exercise.css";
import BMI from "../assets/bmi2.png";
import Dumbbell from "../assets/dumbel.png";

const Exercise = () => {
  return (
    <div className="exercise">
      <div className="card">
        <i></i>
        <h1>Check Your BMI </h1>
        <h3>Body Mass Index</h3>
        <center>
          <img src={BMI} alt="" width="130vw" />
        </center>
        <button>
          <a href="https://wonderful-galileo-907f1d.netlify.app">Click</a>
        </button>
      </div>
      <div className="card">
        <i> </i>
        <h1>Workout Daily </h1>
        <h3>Join our Fitness Club</h3>
        <center>
          <img className="dumbbell" src={Dumbbell} alt="" width="130vw" />
        </center>
        <button>
          <a href="https://quirky-tesla-56b4d3.netlify.app">Click</a>
        </button>
      </div>
    </div>
  );
};

export default Exercise;
