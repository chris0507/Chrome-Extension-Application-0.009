import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Login from "./pages/public/Login";
import Home from "./pages/public/Home";

import "./App.css";
import BusinessLogin from "./pages/business/BusinessLogin";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const Wrapper = ({ children }: { children: any }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  useEffect(() => {
    if (token) checkTokenValidity();
    else {
      if (location.pathname === "/home") navigate("/");
    }
  }, [location, token]);

  const checkTokenValidity = async () => {
    const response = await axios
      .post("http://localhost:5000/check-token", { token })
      .then((res) => {
        console.log(res);
        if (location.pathname !== "/home") navigate("/home");
      })
      .catch((err) => {
        if (location.pathname === "/home") navigate("/");
      });
  };
  return <>{children}</>;
};
function App() {
  return (
    <div className="min-h-screen">
      <Toaster />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Wrapper>
                <Login />
              </Wrapper>
            }
          />
          <Route
            path="/business"
            element={
              <Wrapper>
                <BusinessLogin />
              </Wrapper>
            }
          />
          <Route
            path="/home"
            element={
              <Wrapper>
                <Home />
              </Wrapper>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
