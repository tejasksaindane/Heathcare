import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Layout/Dashboard";

const App = () => {
  return (
    <div>
      <Home />
      <Router>
        <Routes>
          <Route path="/DashBoard" element={<Dashboard />} />
          {/* <Route path="/Chart" element={<Chart />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
