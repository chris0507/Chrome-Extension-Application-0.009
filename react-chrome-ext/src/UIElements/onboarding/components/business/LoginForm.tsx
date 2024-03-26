import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import env from "react-dotenv";
import { NoExistToast, SuccessLoginToast, WrongPassToast } from "../Alert";

interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  // const API_BASE_URL ="http://135.181.213.19:5000";
  const API_BASE_URL = "https://chrome-extension-application-0-009-server.onrender.com/";


  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();

  const submitForm = (data: FormData) => {
    axios
      .post(`${API_BASE_URL}business/login`, data)
      .then((res) => {
        if (res.data.status === "success") {
          SuccessLoginToast();
          const token = res.data.data;
          localStorage.setItem("token", token);
          navigate("/business-home");
        }
      })
      .catch((err) => {
        const errStatus = err.response.data.status;
        if (errStatus == "noexist") {
          NoExistToast();
        } else if (errStatus == "wrongPassword") {
          WrongPassToast();
        }
      });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit;
    }
  };

  return (
    <div className="w-full flex justify-center">
      <form className="pb-8 mb-4 w-3/12" onSubmit={handleSubmit(submitForm)}>
        <h1 className="text-[#932580] text-2xl font-bold mb-4">
          Existing users
        </h1>
        <div className="mb-3">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email address"
            {...register("email")}
            required
          />
        </div>
        <div className="mb-3 relative flex items-center justify-end">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            onKeyDown={handleKeyPress}
            {...register("password")}
            required
          />
          <div className="absolute pr-2 cursor-pointer">
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-white text-xs text-center cursor-pointer">
          Reset password
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
