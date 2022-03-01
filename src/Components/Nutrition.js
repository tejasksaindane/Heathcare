import React, { useState } from "react";
import "../Styles/Nutrition.css";
import axios from "axios";
import { FcSearch } from "react-icons/fc";
import Eggs from "../assets/egg.png";

const Nutrition = () => {
  const [Value, setValue] = useState([]);
  const [food, setFood] = useState();

  async function getDietTwo() {
    const res = await axios.get(
      ` https://api.spoonacular.com/recipes/complexSearch?query=${Value}&maxProtein=100&maxFat=1&maxCalcium=100&maxCholesterol=100&maxVitaminA=100&number=2&apiKey=6773ed22e4ad49dda943b6d879dbc5b8`
    );
    console.log(Value);
    console.log(res.data);
    setFood(res.data);
  }

  var HandleChange = (e) => {
    e.preventDefault();
    getDietTwo();
  };
  return (
    <>
      <div className="Nutrition">
        {/* ------------------------------------------------------------------------ */}
        <div className="Nutri-Top">
          <h1>"Healthify Yourself with Proper Diet and Nutrition"</h1>
          <input
            type="text"
            placeholder="     Type here"
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={HandleChange}>
            <FcSearch />
          </button>
        </div>
        <br />
        {/* -----------------------------------------------TODO ------------------------------------------------------------- */}
        <div className="Nutri-bottom">
          <img
            src={food?.results[0]?.image}
            alt=""
            width="150px"
            height="150px"
            loading="lazy"
          />
          <span>
            <h2>{food?.results[0]?.title}</h2>
            <p>
              <label>
                Protein{food?.results[0]?.nutrition?.nutrients[0]?.title}:{" "}
              </label>
              {food?.results[0]?.nutrition?.nutrients[0]?.amount}{" "}
              <label>{food?.results[0]?.nutrition?.nutrients[0]?.unit}</label>
            </p>
            <p>
              <label>
                Fat{food?.results[0]?.nutrition?.nutrients[1]?.title}:{" "}
              </label>
              {food?.results[0]?.nutrition?.nutrients[1]?.amount}{" "}
              <label>{food?.results[0]?.nutrition?.nutrients[1]?.unit}</label>
            </p>
            <p>
              <label>
                Calories{food?.results[0]?.nutrition?.nutrients[2]?.title}:{" "}
              </label>
              {food?.results[0]?.nutrition?.nutrients[2]?.amount}{" "}
              <label>{food?.results[0]?.nutrition?.nutrients[2]?.unit}</label>
            </p>
            <p>
              <label>
                Calcium{food?.results[0]?.nutrition?.nutrients[3]?.title}:{" "}
              </label>
              {food?.results[0]?.nutrition?.nutrients[3]?.amount}{" "}
              <label>{food?.results[0]?.nutrition?.nutrients[3]?.unit}</label>
            </p>
            <p>
              <label>
                Calcium{food?.results[0]?.nutrition?.nutrients[4]?.title}:{" "}
              </label>
              {food?.results[0]?.nutrition?.nutrients[4]?.amount}{" "}
              <label>{food?.results[0]?.nutrition?.nutrients[4]?.unit}</label>
            </p>
          </span>
        </div>
        {/* -----------------------------------------TODO NUtri Last--------------------------------------------------- */}
        <div className="Nutri-last">
          <div className="Nutri-last-one">
            <img
              src={Eggs}
              alt=""
              width="120px"
              height="120px"
              loading="lazy"
            />
            <span>
              <h2>Eggs</h2>
              <label>Protein: </label>
              0.0045 <label> mg</label>
              <br />
              <label>Fat: </label>
              0.0045 <label> mg</label>
              <br />
              <label>Calories: </label>
              0.0045 <label> mg</label>
              <br />
              <label>Calcium: </label>
              0.0045 <label> mg</label>
              <br />
              <label>Cholestrol: </label>
              0.0045 <label> mg</label>
            </span>
          </div>
          {/* --------------------------------------------------- */}
          <div className="Nutri-last-two">
            <img src={Eggs} alt="" width="120px" height="120px" />
            <span>
              <h2>Eggs</h2>
              <label>Protein: </label>
              0.0045 <label> mg</label>
              <br />
              <label>Fat: </label>
              0.0045 <label> mg</label>
              <br />
              <label>Calories: </label>
              0.0045 <label> mg</label>
              <br />
              <label>Calcium: </label>
              0.0045 <label> mg</label>
              <br />
              <label>Cholestrol: </label>
              0.0045 <label> mg</label>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nutrition;

//TODO ------------------------------------------------------------------------------------------------------------------------------------------
//TODO https://api.spoonacular.com/recipes/complexSearch?query=${Value}&maxFat=25&maxProtein=100&number=2&apiKey=6773ed22e4ad49dda943b6d879dbc5b8`
//TODO ------------------------------------------------------------------------------------------------------------------------------------------
