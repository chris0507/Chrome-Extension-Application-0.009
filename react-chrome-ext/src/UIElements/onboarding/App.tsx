import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Login from "./pages/public/Login";
import Home from "./pages/public/Home";
import BusinessLogin from "./pages/business/BusinessLogin";
import BusinessHome from "./pages/business/BusinessHome";
import "./App.css";
import VerifyEmail from "./components/VerifyEmail";
import ExploreConpons from "./pages/public/ExploreConpons";

const Wrapper = ({ children }: { children: any }) => {
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("token");
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  useEffect(() => {
    if (token) checkTokenValidity();
    else {
      if (location.pathname === "/home") navigate("/");
    }
  }, []);

  const checkTokenValidity = async () => {
    await axios
      .post(`${API_BASE_URL}check-token`, { token })
      .then((res) => {
        if (res.data.status == "public_verify_token") {
          if (location.pathname !== "/home") navigate("/home");
        } else if (res.data.status == "business_verify_token") {
          if (location.pathname !== "/business-home")
            navigate("/business-home");
        }
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
            path="/home"
            element={
              <Wrapper>
                <Home />
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
            path="/business-home"
            element={
              <Wrapper>
                <BusinessHome />
              </Wrapper>
            }
          />
          <Route
            path="/verify-email"
            element={
              <Wrapper>
                <VerifyEmail />
              </Wrapper>
            }
          />
          <Route
            path="/explore-coupons"
            element={
              <Wrapper>
                <ExploreConpons />
              </Wrapper>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
