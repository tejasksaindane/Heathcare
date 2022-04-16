import React from "react";
import "../Styles/Firstpage.css";
import { FcAbout, FcPhone, FcVideoCall } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const FirstPage = () => {
  const notify = () => toast.info("915561000");
  return (
    <div className="Firstpage">
      <ToastContainer />
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
              <Link to="/login">
                <a href="https://wondrous-blancmange-027998.netlify.app/">
                  <button>Click</button>
                </a>
              </Link>
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
              Talk anonymously with an expert of your choice. This service is
              available to you anytime, anywhere.
            </p>
            <center>
              <button onClick={notify}>Click</button>
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
              Video Chat anonymously with an expert of your choice. This service
              is available to you anytime, anywhere.
            </p>
            <center>
              {/* <Link to="/login"> */}
              <a href="https://webrtc-video-room.herokuapp.com/">
                <button>Click</button>
              </a>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
// "proxy": "http://localhost:8000",
