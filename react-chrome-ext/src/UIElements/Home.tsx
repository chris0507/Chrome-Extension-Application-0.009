import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";


const Home = () => {
  const openOnBoardingpage = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("onboarding.html") });
  };

  const handleClosePopup = () => {
    window.close();
  }

  return (
    <div className="w-full h-full border border-solid border-[#08A9D7] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% ">
      <div className="p-2 flex justify-end ">
        <button
          type="button"
          className="border border-white border-solid rounded-full p-1 inline-flex items-center justify-center text-white"
          onClick={handleClosePopup}
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <div>
          <img src="/images/logo.png" alt="logo" width={150} />
        </div>
        <div className="flex flex-col justify-center items-center gap-1 mb-2 text-white text-[15px]">
          <span>© Advertising Box limited</span>
          <span>Terms & Conditions</span>
          <span className="text-[#00A1D6]">About us</span>
        </div>
        <div className="flex items-center">
          <button
            className="bg-[#40A9F1] hover:bg-blue-700 text-white text-[15px] font-bold py-2 px-4 rounded-full"
            onClick={openOnBoardingpage}
          >
            Launch app
          </button>
        </div>
        <div>
          <span className="text-white text-[30px]">0 sch | Max 500</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
