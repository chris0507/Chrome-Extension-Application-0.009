import React from "react";
import MenuModal from "./MenuModal";

const NavbarMenu = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="pt-2 ">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center ">
          <MenuModal />
          <div className="flex gap-2 text-[#3FA9F5]">
            <span className="text-2xl font-bold">200 sch |</span>
            <span className="flex items-center text-xl">Max 500</span>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search business of interest"
            className="pr-10 pl-3 py-2 border rounded-full text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 transform -translate-y-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-end items-center gap-3 mr-4">
          <span className="text-2xl font-bold text-[#3FA9F5]">
            Explore coupons
          </span>
          <img src="/images/logo.png" className="" alt="logo" width={120} />
        </div>
      </div>
      <div className="flex justify-start items-center pr-2 gap-1 ml-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-white cursor-pointer"
          onClick={handleBack}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <span className="text-white cursor-pointer" onClick={handleBack}>
          Back
        </span>
      </div>
    </div>
  );
};

export default NavbarMenu;
