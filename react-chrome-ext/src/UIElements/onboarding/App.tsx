import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/public/Login";
import Home from "./pages/public/Home";

import "./App.css";
import BusinessLogin from "./pages/business/BusinessLogin";


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/business" element={<BusinessLogin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
