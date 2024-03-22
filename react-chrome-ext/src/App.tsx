import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./UIElements/Home";
import "./App.css";
import Wrapper from "./UIElements/Wrapper";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
