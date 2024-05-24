import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import axios from "axios";
import "./App.css";
import NavbarMenu from "./components/NavbarMenu";
import { setUserInfo } from "./features/auth/authSlice";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";

const CustomWrapper = () => {
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("token");
  const location = useLocation();
  const navigate = useNavigate();
  console.log("custom wrapper:", location.pathname);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {

    if (token) checkTokenValidity();
    else {
      console.log("not token");
      navigate("/");
    }
  }, []);

  const checkTokenValidity = async () => {
    const data = { token: token, userType: localStorage.getItem("userType") };

    await axios
      .post(`${API_BASE_URL}check-token`, { ...data })
      .then((res) => {
        console.log('this is custom wrapper')
        dispatch(setUserInfo(res.data.data))
        localStorage.setItem('email', res.data.data.email)
        if (res.data.status === "public_verify_token") {
          console.log("public_verify_token", res.data.status);
          if (
            location.pathname === "/" ||
            location.pathname === "/home" ||
            location.pathname === "/explore-coupons" ||
            location.pathname === "/coupons" ||
            location.pathname === "/high-street" ||
            location.pathname === "/my-coupons"
          ) {
            console.log("1");
            localStorage.setItem("userType", "public");
          }
          if (location.pathname === "/home") {
            console.log("2");
            navigate("/home");
          }
        } else if (res.data.status === "business_verify_token") {
          if (
            location.pathname === "/business" ||
            location.pathname === "/business-home" ||
            location.pathname === "/manage-coupons" ||
            location.pathname === "/business-account"
          ) {
            localStorage.setItem("userType", "business");
          }
          if (location.pathname === "/business-home") {
            navigate("/business-home");
          }
        } else if (res.data.status === "wrong_userType") {
          navigate("/wrong-page");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.status === "invalid_token") {
          localStorage.removeItem("token");
          localStorage.removeItem("userType");
          navigate("/");
        }
      });
  };

  return (
    <>
      <div
        style={
          location.pathname === "/high-street"
            ? {
                backgroundImage: `url(/images/New-space-009.png)`,
                backgroundSize: "cover",
                height: "100vh",
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
