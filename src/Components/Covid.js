import React, { useState } from "react";
import "../Styles/Covid.css";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";

const options = {
  method: "GET",
  // url: "https://covid-19-data.p.rapidapi.com/country/code",
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
              <h1>{data?.[0]?.country}</h1>
            </div>
            <div className="covidOne">
              <h3>
                Total <span> Recovered</span>
              </h3>
              <h1>{data?.[0]?.recovered}</h1>
            </div>
            <div className="covidOne">
              <h3>
                Total <span> Confirmed</span>
              </h3>
              <h1>{data?.[0]?.confirmed}</h1>
            </div>
            <div className="covidOne">
              <h3>
                Total <span>Deaths</span>
              </h3>
              <h1>{data?.[0]?.deaths}</h1>
            </div>
            <div className="covidOne">
              <h3>
                Total <span> Active</span>
              </h3>
              <h1>{data?.[0]?.critical}</h1>
            </div>
            <div className="covidOne">
              <h3>
                Total <span> Updated</span>
              </h3>
              <h1>{data?.[0]?.lastUpdate}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Covid;
//  <h1>{data?.[0]?.confirmed}</h1>
