import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SuccessRegisterToast, WrongVerificationToast } from "./Alert";

const API_BASE_URL = process.env.REACT_APP_API_URL;

const VerifyEmail = () => {
  const [code, setCode] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [resendTimer, setResendTimer] = useState(30);

  const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const submitCode = () => {
    const data = {
      sheetName: location?.state.type,
      email: location?.state.email,
      confirmedVerifyCode: code,
    };
    axios
      .post(`${API_BASE_URL}confirmed-account`, data)
      .then((res) => {
        if (res.data.status == "verified") {
          SuccessRegisterToast();
          const token = res.data.data;
          localStorage.setItem("token", token);
          navigate("/home");
        } else if (res.data.status == "wrong-code") WrongVerificationToast();
      })
      .catch((err) => {
        const errStatus = err.response.data.status;
        if (errStatus == "existed_email") {
        }
      });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitCode();
    }
  };

  useEffect(() => {
    const verifyEmail = localStorage.getItem("verifyEmail");
    if (verifyEmail == 'true') localStorage.setItem("verifyEmail", 'false')
    else navigate("/");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (resendTimer > 0) {
        setResendTimer(resendTimer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleResend = () => {
    setResendTimer(30);
    submitCode();
  };

  return (
    <div className="min-h-screen h-full w-full flex flex-col items-center justify-center gap-10 p-5">
      <div className="flex flex-col w-[400px] justify-center h-full border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% p-10">
        <div className="flex flex-col justify-center items-center gap-3 mb-3">
          <img src="/images/logo.png" className="" alt="logo" width={150} />
          <span className="text-white text-2xl font-bold ">
            Verify your email
          </span>
        </div>
        <div className="bg-[#343434] flex flex-col shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-3">
          <span className="text-[#d5d7d9]">email</span>
          <span className="text-xl text-[#a4aeb6]">
            {location.state?.email}
          </span>
        </div>
        <div className="mb-5 text-center text-[#6f87a7]">
          <span>
            Please enter the 6-digit verification code we sent to the above
            email. This code expires within 30 minutes.
          </span>
        </div>
        <div className="mb-6 relative flex items-center justify-end">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white text-xl leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter your code"
            value={code}
            onChange={handleChangeCode}
            onKeyDown={handleKeyPress}
          />
          {resendTimer === 0 ? (
            <div
              className="w-[78px] absolute pr-2 cursor-pointer border-l-2 border-[#6f87a7] px-2 flex justify-center"
              onClick={handleResend}
            >
              <span className="text-[#389ae7] text-lg">Resend</span>
            </div>
          ) : (
            <div className="w-[78px] absolute pr-2 border-l-2 border-[#6f87a7] px-2 flex justify-center">
              <span className="text-[#389ae7] text-lg">{resendTimer}</span>
            </div>
          )}
        </div>
        <div className="">
          <button
            type="button"
            className="w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-full text-lg px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 font-medium"
            onClick={submitCode}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
