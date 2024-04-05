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
import Conpons from "./pages/public/Conpons";
import { Navbar } from "@material-tailwind/react";
import NavbarMenu from "./components/NavbarMenu";
import ExploreCoupons from "./components/ExploreCoupons";
import MyCoupons from "./components/MyCoupons";

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
          if (location.pathname == "/") navigate("/home");
        } else if (res.data.status == "business_verify_token") {
          if (location.pathname !== "/business-home")
            navigate("/business-home");
        }
      })
      .catch((err) => {
        if (location.pathname === "/home") navigate("/");
      });
  };
  return (
    <>
      <div>
        {location.pathname !== "/" && location.pathname !== "/home" && (
          <NavbarMenu />
        )}
        {children}
      </div>
    </>
  );
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
            path="/coupons"
            element={
              <Wrapper>
                <Conpons />
              </Wrapper>
            }
          />
          <Route
            path="/explore-coupons"
            element={
              <Wrapper>
                <ExploreCoupons />
              </Wrapper>
            }
          />
          <Route
            path="/my-coupons"
            element={
              <Wrapper>
                <MyCoupons />
              </Wrapper>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
