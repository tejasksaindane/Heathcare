import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Dashboard from "./Layout/Dashboard";
// import About from "./Layout/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Components/Signin";

const App = () => {
  // console.log(process.env.REACT_APP_BACKEND);

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* // <Route exact path="/home" element={<Home />} /> */}
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signin" element={<Signin />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
