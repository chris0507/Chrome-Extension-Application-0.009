import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import LoginForm from "../../components/business/LoginForm";
import SignUpForm from "../../components/business/SignUpForm";
import {
  NoExistToast,
  WrongPassToast,
  SuccessLoginToast,
  ExistEmailToast,
} from "../../components/Alert";
import Footer from "../../components/Footer";

const BusinessLogin = () => {
  const [loginStatus, setLoginStatus] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    <div className="h-screen w-full flex justify-center items-center">
      <div className=" container flex flex-col justify-center items-center gap-10 p-5">
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
          <div className="flex flex-1 sm:flex-row flex-col  justify-around gap-5">
            <LoginForm
              onStatusChange={handleStatusChange}
              setLoading={setIsLoading}
            />
            <SignUpForm setLoading={setIsLoading} />
          </div>
          <div>
            <div className="flex justify-center items-center text-white text-center mt-10 text-lg gap-2 cursor-pointer">
              <NavLink to="/" className={`flex flex-row items-center gap-3`}>
                <span>Public users</span>
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
        </div>
        <div className="flex w-full px-4">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BusinessLogin;
