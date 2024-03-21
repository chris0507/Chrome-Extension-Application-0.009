import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./UIElements/Home";
import LoginPage from "./UIElements/onboarding/pages/public/LoginPage";
import "./App.css";
import Wrapper from "./UIElements/Wrapper";
import SignUp from "./UIElements/onboarding/pages/public/SignUpPage";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
