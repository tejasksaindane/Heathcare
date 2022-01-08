import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Dashboard from "./Layout/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Components/Signin";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
