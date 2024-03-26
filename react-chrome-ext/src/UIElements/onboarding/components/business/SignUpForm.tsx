import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";
import { ExistEmailToast, SuccessLoginToast } from "../Alert";
interface FormData {
  brandName: string;
  city: string;
  baseCountry: string;
  CEOname: string;
  CEOemail: string;
  companyID: string;
  businessURL: string;
  logo: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  // const API_BASE_URL = "http://135.181.213.19:5000";
  const API_BASE_URL = "https://chrome-extension-application-0-009-server.onrender.com/";

  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();

  const submitForm = (data: FormData) => {
    console.log(data);
    data.email = data.email.toLowerCase();
    axios
      .post(`${API_BASE_URL}business/register`, data)
      .then((res) => {
        SuccessLoginToast();
      })
      .catch((err) => {
        const errStatus = err.response.data.status;
        if (errStatus == "existed_email") {
          ExistEmailToast();
        }
      });
    console.log(data);
  };
  return (
    <div className="w-full flex justify-center">
      <form
        className="w-6/12 pb-8 mb-4 flex flex-col justify-center"
        onSubmit={handleSubmit(submitForm)}
      >
        <h1 className="text-[#932580] text-2xl font-bold mb-4">
          New Business users
        </h1>
        <div className="w-full flex justify-center gap-5">
          <div className="w-full">
            <div className="mb-3">
              <input
                className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="brandName"
                type="text"
                placeholder="Business brand name"
                {...register("brandName")}
                required
              />
            </div>
            <div className="mb-3">
              <select
                id="city"
                className="bg-[#932580] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-white pr-10"
                {...register("city")}
                required
              >
                <option value="" disabled selected>
                  City
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="mb-3">
              <select
                id="baseCount"
                className="bg-[#932580] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white"
                {...register("baseCountry")}
                required
              >
                <option value="" disabled selected>
                  Base Country
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="mb-3">
              <input
                className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="CEOname"
                type="text"
                placeholder="CEO/Manager Name"
                {...register("CEOname")}
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="CEOemail"
                type="email"
                placeholder="CEO/Manager Email"
                {...register("CEOemail")}
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="companyID"
                type="text"
                placeholder="Companies House ID"
                {...register("companyID")}
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="businessURL"
                type="test"
                placeholder="Business URL"
                {...register("businessURL")}
                required
              />
            </div>
            <div className="mb-3">
              <input
                className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="logo"
                type="upload"
                placeholder="Upload logo"
                {...register("logo")}
                required
              />
            </div>
          </div>
          <div className="w-full">
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
                placeholder="Passwrod"
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
