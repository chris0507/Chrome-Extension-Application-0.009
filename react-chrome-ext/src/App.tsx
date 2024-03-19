import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import Wrapper from "./pages/Wrapper";
import SignUp from "./pages/SignUpPage";
import "./index.css";

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full space-y-8">
        <Router>
          <Routes>
            <Route path="/" element={<Wrapper />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signUp" element={<SignUp />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
