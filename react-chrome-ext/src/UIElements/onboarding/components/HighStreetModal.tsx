import React from "react";
import { useNavigate } from "react-router-dom";

interface HighStreetModalProps {
  closeModal: () => void;
}

const HighStreetModal: React.FC<HighStreetModalProps> = ({ closeModal }) => {
  const userType: any = localStorage.getItem("userType");
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex justify-center items-start bg-black bg-opacity-95 z-50 overflow-auto">
      <div className="container w-full ">
        <div className="gap-10 flex-col w-full flex items-center lg:items-start lg:flex-row">
          <div className="flex flex-col w-full lg:px-0 relative px-5 lg:w-[30%] pt-5">
            <div className="lg:hidden w-full absolute flex mb-3 flex-row-reverse ">
              <img src="/images/logo.png" className="" alt="logo" width={150} />
            </div>
            <div className="flex  justify-start items-center">
              <img src="./images/annie1.png" alt="" />
            </div>

            <div className="flex flex-col mb-6 text-base">
              <p className="text-white text-2xl font-semibold mb-3">
                Business overview
              </p>
              <p className="text-white mb-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <p className="text-white mb-3">
                Pieminister Available to purchase Ut wisi enim ad minim veniam,
                quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                dolor sit amet, consectetuer adipiscing
              </p>
              <p className="text-white">
                elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex justify-center items-center gap-3 mb-4">
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
                  className="w-6 h-6 border-l-2 border-dashed border-white py-1 pl-2"
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
                  onClick={() => window.open("http://your-url.com", "_blank")}
                >
                  View website
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 border-l-2 border-dashed border-white py-1 pl-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                  />
                </svg>
              </button>
            </div>
            <div className="m-auto text-white flex items-center justify-center flex-row gap-2">
              <a href="https://google.com">View Google Sheets</a>
              <img src="./images/resize.png" width={15} height={15} alt="" />
            </div>
          </div>
          <div className="flex flex-auto gap-5 flex-col">
            <div className="flex flex-col gap-5 items-end justify-end">
              <div className=" lg:block hidden">
                <img src="./images/logo.png" width={120} alt="" />
              </div>
              <div>
                <svg
                  className="h-4 w-4 text-white border border-white rounded-full cursor-pointer"
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
            <p className="text-white text-3xl pl-16 font-bold mb-4">
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
              <div className=" flex-auto">
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
