import React, { useState } from "react";

const SignUpForm = () => {
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-[#932580] text-2xl font-bold mb-4">
        New Business users
      </h1>
      <form className="pb-8 mb-4 w-8/12">
        <div className="mb-3">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="businessName"
            type="text"
            placeholder="Business brand name"
          />
        </div>
        <div className="mb-3">
          <select
            id="city"
            className="bg-[#932580] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white pr-10"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>

          {/* <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Dropdown button{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button> */}
        </div>
        <div className="mb-3">
          <select
            id="ethnicity"
            className="bg-[#932580] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white"
          >
            <option selected>Ethnicity</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="mb-3">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="managerName"
            type="text"
            placeholder="CEO/Manager Name"
          />
        </div>
        <div className="mb-3">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="managerEmail"
            type="email"
            placeholder="CEO/Manager Email"
          />
        </div>
        <div className="mb-3">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="companyID"
            type="text"
            placeholder="Companies House ID"
          />
        </div>
        <div className="mb-3">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="businessURL"
            type="test"
            placeholder="Business URL"
          />
        </div>
        <div className="mb-3">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="uploadLogo"
            type="upload"
            placeholder="Upload logo"
          />
        </div>
        <div className="mb-3">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email address"
          />
        </div>
        <div className="mb-3 relative flex items-center justify-end">
          <input
            className="bg-[#343434] shadow appearance-none rounded w-full p-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Passwrod"
          />
          <div className="absolute pr-2 cursor-pointer">
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
