import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginForm from "../../components/public/LoginForm";
import SignUpForm from "../../components/public/SignUpForm";
import { Toaster } from "react-hot-toast";

import {
  NoExistToast,
  WrongPassToast,
  SuccessLoginToast,
  ExistEmailToast,
} from "../../components/Alert";
import axios from "axios";

const Login = () => {
  const [loginStatus, setLoginStatus] = useState("");

  const handleStatusChange = (newStatus: React.SetStateAction<string>) => {
    setLoginStatus(newStatus);
  };

  useEffect(() => {
    if (loginStatus == "noexist") {
      NoExistToast();
    } else if (loginStatus == "wrongPassword") {
      WrongPassToast();
    } else if (loginStatus == "successLogin") {
      SuccessLoginToast();
    } else if (loginStatus == "existed_email") {
      ExistEmailToast();
    }
    setLoginStatus("");
  }, [handleStatusChange, loginStatus]);

  return (
    <>
      <div className="min-h-screen h-full w-full flex flex-col items-center justify-center gap-10 p-5">
        <div>
          <img src="/images/logo.png" alt="logo" width={200} />
        </div>
        <div className="w-full h-full border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% p-10">
          <div className="flex justify-around gap-5 ">
            <LoginForm onStatusChange={handleStatusChange} />
            <SignUpForm onStatusChange={handleStatusChange} />
          </div>
          <NavLink to="business">
            <div className="flex justify-center items-center text-white text-center text-lg mt-10 gap-2 cursor-pointer">
              <span>Business users</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Login;
