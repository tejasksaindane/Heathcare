import React from "react";
import "../Styles/Firstpage.css";
import { FcAbout, FcPhone, FcVideoCall } from "react-icons/fc";
const FirstPage = () => {
  return (
    <div className="Firstpage">
      <div className="firstpage-header">
        <center>
          <h1>Select The Mode Of Session</h1>
        </center>
      </div>
      <div className="firstpage-container">
        <div className="fpone">
          <div className="fpone-top">
            <span className="fp-icons">
              <FcAbout />
            </span>
            <h1>Chat Session</h1>
          </div>
          <div className="fpone-bottom">
            <p>
              Chat anonymously with an expert of your choice. This service is
              available to you anytime, anywhere.
            </p>
            <center>
              <button>Click</button>
            </center>
          </div>
        </div>
        <div className="fpone">
          <div className="fpone-top">
            <span className="fp-icons">
              <FcPhone />
            </span>
            <h1>Voice Call Session</h1>
          </div>
          <div className="fpone-bottom">
            <p>
              Chat anonymously with an expert of your choice. This service is
              available to you anytime, anywhere.
            </p>
            <center>
              <button>Click</button>
            </center>
          </div>
        </div>
        <div className="fpone">
          <div className="fpone-top">
            <span className="fp-icons">
              <FcVideoCall />
            </span>
            <h1>Video Call Session</h1>
          </div>
          <div className="fpone-bottom">
            <p>
              Chat anonymously with an expert of your choice. This service is
              available to you anytime, anywhere.
            </p>
            <center>
              <button>Click</button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
