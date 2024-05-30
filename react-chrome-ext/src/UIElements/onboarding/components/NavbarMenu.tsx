import React, { useEffect, useState } from "react";
import MenuModal from "./MenuModal";
import { useLocation } from "react-router-dom";

const NavbarMenu = () => {
  const location = useLocation();
  const [title, setTitle] = useState("Explore coupons");
  const userType: any = localStorage.getItem("userType");

  useEffect(() => {
    console.log("location.pathname", location.pathname);
    switch (location.pathname) {
      case "/high-street":
        setTitle("High Street");
        break;
      case "/expired-coupons":
        setTitle("Expired Coupons");
        break;
      case "/coupons":
        setTitle("Explore coupons");
        break;
      case "/public-account":
      case "/business-account":
        setTitle("");
        break;
      case "/edit-coupon":
        setTitle("Manage coupons");
        break;
      case "/manage-coupons":
        setTitle("Manage coupons");
        break;
      case "/manage-high-street":
        setTitle("Hight street");
        break;

      default:
        break;
    }
  }, [location, userType]);
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="flex flex-col items-center justify-center pt-2">
      <div className="container">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start ">
            <MenuModal userType={userType} />
            {userType === "public" ? (
              <div className=" gap-1 text-[#3FA9F5] md:flex hidden">
                <span className="text-xl font-bold lg:text-2xl">200 sch |</span>
                <span className="flex items-center textl-xl">Max 500</span>
              </div>
            ) : (
              <div className="md:flex hidden gap-1 text-[#9E4080]">
                <span className="text-xl font-bold lg:text-2xl">200 sch |</span>
                <span className="flex items-center text-xl">Max 500</span>
              </div>
            )}
          </div>
          {!(
            userType === "business" &&
            (title === "Manage coupons" ||
              location.pathname === "/manage-high-street")
          ) ? (
            <div className="relative">
              <input
                type="text"
                placeholder="Search business of interest"
                className="pr-10 pl-3 py-2 border rounded-md text-sm focus:outline-none bg-[#333333] text-white"
              />
              <button
                type="submit"
                className="absolute text-white transform -translate-y-1/2 right-1 top-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 "
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
          ) : null}
          <div className="flex items-center justify-end gap-3 mr-4">
            {userType === "public" ? (
              <span className="text-2xl md:block hidden font-bold text-[#3FA9F5]">
                {title}
              </span>
            ) : (
              <span className="text-2xl md:block hidden font-bold text-[#9E4080]">
                {title}
              </span>
            )}
            <img src="/images/logo.png" className="" alt="logo" width={120} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="container">
          <div className="flex items-center justify-start w-full gap-1 mb-4">
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
      </div>
    </div>
  );
};

export default NavbarMenu;
