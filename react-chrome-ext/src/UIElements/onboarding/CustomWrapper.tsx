import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import axios from "axios";
import "./App.css";
import NavbarMenu from "./components/NavbarMenu";

const CustomWrapper = () => {
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
          if (location.pathname !== "/home") {
            if (
              location.pathname == "/" ||
              location.pathname == "/home" ||
              location.pathname == "/explore-coupons" ||
              location.pathname == "/coupons" ||
              location.pathname == "/high-street" ||
              location.pathname == "/my-coupons"
            ) {
              localStorage.setItem("userType", "public");
            }
            navigate("/home");
          }
        } else if (res.data.status == "business_verify_token") {
          if (location.pathname !== "/business-home") {
            if (
              location.pathname == "/business" ||
              location.pathname == "/business-home" ||
              location.pathname == "/manage-coupons"
            ) {
              localStorage.setItem("userType", "business");
            }
            navigate("/business-home");
          }
        }
      })
      .catch((err) => {
        if (location.pathname === "/home") navigate("/");
      });
  };
  return (
    <>
      <div
        style={
          location.pathname == "/high-street"
            ? {
                backgroundImage: `url(https://i.ibb.co/BVZXN1W/New-space-009.png)`,
              }
            : { backgroundImage: "" }
        }
      >
        {location.pathname !== "/" &&
          location.pathname !== "/home" &&
          location.pathname !== "/business" &&
          location.pathname !== "/business-home" &&
          location.pathname !== "/verify-email" && <NavbarMenu />}
        <Outlet />
      </div>
    </>
  );
};

export default CustomWrapper;
