import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import LoginForm from "../../components/public/LoginForm";
import SignUpForm from "../../components/public/SignUpForm";
import {
  NoExistToast,
  WrongPassToast,
  SuccessLoginToast,
  ExistEmailToast,
} from "../../components/Alert";
import Footer from "../../components/Footer";


const Login = () => {
  const [loginStatus, setLoginStatus] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isResetpasswordEmailValid, setIsResetpasswordEmailValid] =
    useState<boolean>(false);
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

    if (isResetpasswordEmailValid) NoExistToast();
    setLoginStatus("");
  }, [handleStatusChange, loginStatus, isResetpasswordEmailValid]);

  return (
    <div className="flex items-center justify-center w-full ">
      <div className="container flex flex-col items-center justify-center gap-6 p-5 ">
        {isLoading && (
          <div className="fixed inset-0 bg-[#00080D] bg-opacity-75 z-20 flex justify-center items-center">
            <CircleLoader
              color={"#08A9D7"}
              loading={true}
              size={70}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
        <div>
          <img src="/images/logo.png" alt="logo" width={200} />
        </div>
        <div className="w-full h-full border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% p-10">
          <div className="flex flex-col justify-around flex-1 gap-5 sm:flex-row ">
            <LoginForm
              onStatusChange={handleStatusChange}
              setLoading={setIsLoading}
              setResetpasswordEmailValid={setIsResetpasswordEmailValid}
            />
            <SignUpForm setLoading={setIsLoading} />
          </div>
          <div className="flex items-center justify-center gap-2 mt-10 text-lg text-center text-white cursor-pointer">
            <NavLink
              to="business"
              className={`flex flex-row items-center gap-3`}
            >
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
            </NavLink>
          </div>
        </div>
        <div className="flex w-full px-4">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Login;
