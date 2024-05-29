import React from "react";
import { useNavigate } from "react-router-dom";

interface HighStreetModalProps {
  closeModal: () => void;
}

const HighStreetModal: React.FC<HighStreetModalProps> = ({ closeModal }) => {
  const userType: any = localStorage.getItem("userType");
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black bg-opacity-95">
      <div className="container w-full ">
        <div className="flex flex-col items-center w-full gap-10 lg:items-start lg:flex-row">
          <div className="flex flex-col w-full lg:px-0 relative px-5 lg:w-[30%] pt-5">
            <div className="absolute flex flex-row-reverse w-full mb-3 lg:hidden ">
              <img src="/images/logo.png" className="" alt="logo" width={150} />
            </div>
            <div className="flex items-center justify-start">
              <img src="./images/annie1.png" alt="" />
            </div>

            <div className="flex flex-col mb-6 text-base">
              <p className="mb-3 text-2xl font-semibold text-white">
                Business overview
              </p>
              <p className="mb-3 text-white">
                Ever had an authentic Rhode Island style burger? Or maybe tired a very much vegan, vegetarian burger that will 100% not want to end. Remind yourself Rholdel Island and if you don't know get to know with our burger shack style dining of the Americas. Learn about our traditions and how we've make our tasty burgers since 2009. Fresh off the grill, packed with the perfect blend of seasons that will keep you coming back for more.
              </p>
              <p className="mb-3 text-white">
                We re not about fast food, we are for the experience come join the fun and enjoy yourself to make history with us... reminds me of home.
              </p>
              <p className="text-white">
                Not Just meaty but ethically inclusive with a twist.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <button
                className={`flex items-center justify-between  text-white px-4 rounded-full ${
                  userType === "business" ? "bg-[#932580]" : "bg-[#43A9F5]"
                }`}
                onClick={() => navigate("/manage-coupons")}
              >
                <span className="py-1 pr-2">Visit profile</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 py-1 pl-2 border-l-2 border-white border-dashed"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </button>
              <button
                className={`flex items-center justify-between bg-[#43A9F5] text-white px-4 rounded-full ${
                  userType === "business" ? "bg-[#932580]" : "bg-[#43A9F5]"
                }`}
              >
                <span
                  className="py-1 pr-2"
                  onClick={() =>
                    window.open("https://anniesburgershack.com/", "_blank")
                  }
                >
                  View website
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 py-1 pl-2 border-l-2 border-white border-dashed"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 m-auto text-white">
              <a href="https://google.com">View Google Sheets</a>
              <img src="./images/resize.png" width={15} height={15} alt="" />
            </div>
          </div>
          <div className="flex flex-col flex-auto gap-5">
            <div className="flex flex-col items-end justify-end gap-5">
              <div className="hidden lg:block">
                <img src="./images/logo.png" width={120} alt="" />
              </div>
              <div>
                <svg
                  className="w-4 h-4 text-white border border-white rounded-full cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  onClick={closeModal}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <p className="pl-16 mb-4 text-3xl font-bold text-white">
              ANNIE'S BURGER SHACK NOTTINGHAM
            </p>
            <div className="flex flex-row items-center gap-10">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-white rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div className="flex-auto ">
                <img
                  src="./images/annie'sburger.png"
                  className="w-full h-full"
                  alt=""
                />
              </div>
              <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighStreetModal;
