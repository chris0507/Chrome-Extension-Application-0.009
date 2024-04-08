import React, { useRef, useState } from "react";
import DropdownMenu from "../DropdownMenu";
import { Progress } from "@material-tailwind/react";
import { PieChart } from "react-minimal-pie-chart";
import { useNavigate } from "react-router-dom";

const BRightSidebar = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setIsMenuOpen(true);
  };
  const closeModal = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      setIsMenuOpen(false);
    }
  };
  return (
    <div className="relative flex-auto  border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% p-5 m-5 mt-10">
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#00080D] bg-opacity-75 z-20 flex justify-center items-center"
          onClick={closeModal}
          ref={modalRef}
        >
          <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% p-2">
            <div className="flex justify-between pb-2 px-1">
              <span className="text-white text-base font-bold">
                Purchase sch |
              </span>
              <svg
                className="h-4 w-4 border border-white rounded-full cursor-pointer text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                onClick={() => setIsMenuOpen(false)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="border border-white rounded-2xl bg-white p-2">
              <p className="text-dark text-base font-bold mb-1">
                Balance 6000 sch
              </p>
              <div className="flex justify-end items-center gap-3">
                <input
                  type="text"
                  className="bg-[#333333] text-white text-sm px-2 py-1 rounded-lg w-[150px]"
                  placeholder="Enter amount"
                ></input>
                <button
                  className="flex items-center justify-between bg-[#91257D] text-white px-2 rounded-full"
                  onClick={showModal}
                >
                  <span className="py-1 pr-2 text-white">Purchase sch</span>
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
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </button>
              </div>
              <div className="bg-black rounded-full mt-1 p-5 w-full">
                <Progress
                  value={25}
                  variant="filled"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  color="red"
                  className="h-[3px] bg-[#434343]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <span className="text-white text-xl font-bold mb-1">Website</span>
      <img
        src="/images/logo.png"
        className="top-[-30px] right-[10px] absolute"
        alt="logo"
        width={150}
      />
      <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-1 p-1 flex items-center gap-3">
        <div className="flex justify-center items-center w-[100px]">
          <img src="images/google.svg" alt="google" width={70} />
        </div>
        <span className="text-base text-white">
          Rank:<span className="text-xl">1022 users</span>
        </span>
      </div>
      <div className="mt-3">
        <span className="text-white text-xl font-bold">Account</span>
        <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% p-3 px-5 mt-1">
          <div className="border border-solid border-[#91257D] bg-white rounded-2xl p-2">
            <div className="flex justify-between items-center">
              <span className="text-base font-bold">6000 sch</span>
              <button
                className="flex items-center justify-between bg-[#91257D] text-white px-2 rounded-full"
                onClick={showModal}
              >
                <span className="py-1 pr-2 text-white">Purchase sch</span>
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
            </div>
            <div className="bg-black rounded-full mt-1 p-5 w-full">
              <Progress
                value={25}
                variant="filled"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                color="red"
                className="h-[4px] bg-[#434343]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-white text-xl font-bold">Stats overview</span>
        <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-1 p-3 px-5 flex justify-between items-center">
          <div className="text-center">
            <PieChart
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
              ]}
              style={{ height: "90px" }}
            />
            <span className="text-white">Market share</span>
          </div>
          <div className="text-center">
            <PieChart
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
              ]}
              style={{ height: "90px" }}
            />
            <span className="text-white">Users</span>
          </div>
          <div className="text-center">
            <PieChart
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
              ]}
              style={{ height: "90px" }}
            />
            <span className="text-white">Business</span>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-white text-xl font-bold">Users stats</span>
        <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-1 p-3 px-5 flex flex-col justify-center items-center text-white">
          <span className="text-4xl ">118,890</span>
          <span className="text-sm">users registered</span>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-white text-xl font-bold">Buisness stats</span>
        <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-1 p-3 px-5 flex flex-col justify-center items-center text-white">
          <span className="text-4xl ">383,210</span>
          <span className="text-sm">sch | generated by businesses</span>
          <span className="">(100 sch| = £1)</span>
        </div>
      </div>
    </div>
  );
};

export default BRightSidebar;
