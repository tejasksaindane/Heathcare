import React, { useState } from "react";
import "../Styles/Covid.css";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";

const options = {
  method: "GET",
  //   url: "https://covid-19-data.p.rapidapi.com/country/code",
  params: { code: "in" },
  headers: {
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    "x-rapidapi-key": "bf2be0966dmsh98991ad37ebce68p17befajsn2fa53e6c8585",
  },
};

const Covid = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div>
        <div className="Covid">
          <div className="covid-title">
            <h1>💉covid-19 corona virus tracker💉</h1>
            <p>दो गज की दूरी, मास्क है जरूरी</p>
          </div>
          <div className="Covid-container">
            <div className="covidOne">
              <h3>
                Our<span> Country</span>
              </h3>
              <h1>{data?.[0]?.country}India</h1>
            </div>
            <div className="covidOne">
              <h3>
                Total <span> Recovered</span>
              </h3>
              <h1>{data?.[0]?.recovered}42,307,686 </h1>
            </div>
            <div className="covidOne">
              <h3>
                Total <span> Confirmed</span>
              </h3>
              <h1>{data?.[0]?.confirmed}42,821,529</h1>
            </div>
            <div className="covidOne">
              <h3>
                Total <span>Deaths</span>
              </h3>
              <h1>{data?.[0]?.deaths}5.14 Lakhs</h1>
            </div>
            <div className="covidOne">
              <h3>
                Total <span> Active</span>
              </h3>
              <h1>{data?.[0]?.critical}8013</h1>
            </div>
            <div className="covidOne">
              <h3>
                Total <span> Updated</span>
              </h3>
              <h1>{data?.[0]?.lastUpdate}11 March 2022</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Covid;
