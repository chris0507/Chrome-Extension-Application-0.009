import React, { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import { Progress } from "@material-tailwind/react";
import { PieChart } from "react-minimal-pie-chart";
import Dropdown from "../../components/public/Dropdown";
import { useNavigate } from "react-router-dom";

const BusinessAccount = () => {
  const navigate = useNavigate();
  const handleSelect = (value: string) => {
    //   setValue("ethnicity", value, { shouldValidate: true });
  };

  return (
    <div className="flex justify-center w-full">
      <div className="container flex-col ">
        <div className="  flex justify-end pr-4">
          <div className="flex flex-row gap-4">
            <button
              className="flex items-center justify-between bg-[#932580] text-white px-2 pl-4 rounded-full"
              onClick={() => { navigate("/create-coupons") }}
            >
              <span className="py-1 pr-2">Manage Coupons</span>
              <img
                src="./images/repair.png"
                alt=""
                className="w-6 h-6 border-l-2 border-dashed border-white py-1 pl-2"
              />
            </button>
            <button
              className="flex items-center justify-between bg-[#932580] text-white px-2 pl-4 rounded-full"
              onClick={() => {navigate("/manage-high-street")}}
            >
              <span className="py-1 pr-2">Manage High Street</span>
              <img
                src="./images/repair.png"
                alt=""
                className="w-6 h-6 border-l-2 border-dashed border-white py-1 pl-2"
              />
            </button>
          </div>
        </div>
        <div className="border w-full max-w-4xl border-solid border-[#9E4080] rounded-2xl bg-gradient-to-b from-[#3E3733] to-[#000000] to-35% py-10 m-5">
          <div className="flex justify-around gap-5 md:flex-row flex-col ">
            <div className="w-full flex justify-center ">
              <form className="gap-3 mb-4 w-10/12 flex flex-col">
                <p className="text-[#9E4080] text-2xl mb-4">Business account</p>
                <div className=" flex flex-row gap-3">
                  <input
                    className="bg-[#343434] border-none shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    value={`Annie's Burger Shack`}
                    required
                  />
                  <input
                    className="bg-[#343434] border-none shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    value={`info@anniesburgershack.com`}
                    required
                  />
                </div>
                <div className=" flex flex-row  gap-3">
                  <div className="flex-1">
                    <select
                      id="city"
                      className="bg-[#932580] border-none  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 text-white"
                      required
                    >
                      <option value="" disabled selected>
                        Nottingham
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-1 items-center justify-end">
                    <input
                      className="bg-[#343434] border-none shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="text"
                      placeholder="Update Password"
                      value={`Update password`}
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
                <div className=" flex flex-row  gap-3">
                  <div className="flex-1">
                    <select
                      id="city"
                      className="bg-[#932580]  border-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 text-white"
                      required
                    >
                      <option value="" disabled selected>
                        Restaurant
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-1 items-center justify-end"></div>
                </div>
                <div className="flex flex-row gap-3">
                  <div className="flex flex-1">
                    <input
                      className="bg-[#343434] border-none shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      value={`Annie Spaziano`}
                      required
                    />
                  </div>
                  <div className="flex flex-1"></div>
                </div>
                <div className="flex flex-row gap-3">
                  <div className="flex flex-1">
                    <input
                      className="bg-[#343434] border-none shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      value={`annie@anniesburgershack.com`}
                      required
                    />
                  </div>
                  <div className="flex flex-1"></div>
                </div>
                <div className="flex flex-row gap-3">
                  <div className="flex flex-1">
                    <input
                      className="bg-[#343434] border-none shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      value={`08189761`}
                      required
                    />
                  </div>
                  <div className="flex flex-1"></div>
                </div>
                <div className="flex flex-row gap-3">
                  <div className="flex flex-1">
                    <input
                      className="bg-[#343434] border-none shadow appearance-none rounded w-full p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      value={`anniesburgershack.com`}
                      required
                    />
                  </div>
                  <div className="flex flex-1"></div>
                </div>
                <div className="flex flex-row gap-3 items-center ">
                  <div className="flex flex-1 gap-4 items-center">
                    <div className="flex flex-1">
                      <img src="./images/annie1.png" alt="" />
                    </div>
                    <div className="flex-1 flex justify-start  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-white -rotate-90"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-1"></div>
                </div>
                <div className=" flex flex-row gap-4 items-center">
                  <div className=" w-4/5">
                    <img src="./images/annielogo.png" alt="" />
                  </div>
                  <div className="flex justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 text-white -rotate-90"
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
            <div className="w-full border-l-2 border-gray-400 flex justify-center ">
              <div className=" w-8/12 flex flex-col gap-3">
                <div className="">
                  <span className="text-[#9E4080] text-2xl">Account</span>
                  <div className="border border-solid border-[#9E4080] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-2 p-3 px-5">
                    <div className="border border-solid border-[#9E4080] bg-white rounded-2xl py-2 px-3">
                      <div className="flex gap-2 flex-row justify-between">
                        <span className="text-lg font-bold">6000 sch</span>
                        <button className="flex items-center justify-between bg-[#91257D] text-white px-2 rounded-full">
                          <span className="py-1 pr-2 text-white">
                            Purchase sch
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
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="bg-black rounded-full mt-1 p-3 w-full">
                        <Progress
                          value={40}
                          variant="filled"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                          color="red"
                          className="min-h-[2px] max-h-[2px] bg-[#434343]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <span className="text-[#9E4080] text-2xl">Stats</span>
                  <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-2 p-3 px-5 flex justify-between items-center gap-2">
                    <div className="text-center">
                      <PieChart
                        data={[
                          { title: "One", value: 60, color: "#932580" },
                          { title: "Two", value: 30, color: "#ffffff" },
                          { title: "Three", value: 10, color: "#2E3192" },
                        ]}
                        style={{ height: "90px" }}
                      />
                      <span className="text-white">Market share</span>
                    </div>
                    <div className="text-center">
                      <PieChart
                        data={[
                          { title: "One", value: 60, color: "#932580" },
                          { title: "Two", value: 30, color: "#ffffff" },
                          { title: "Three", value: 10, color: "#2E3192" },
                        ]}
                        style={{ height: "90px" }}
                      />
                      <span className="text-white">Users</span>
                    </div>
                    <div className="text-center">
                      <PieChart
                        data={[
                          { title: "One", value: 60, color: "#932580" },
                          { title: "Two", value: 30, color: "#ffffff" },
                          { title: "Three", value: 10, color: "#2E3192" },
                        ]}
                        style={{ height: "90px" }}
                      />
                      <span className="text-white">Businesses</span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <span className="text-[#9E4080] text-2xl">Users stats</span>
                  <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-2 p-3 px-5 flex flex-row justify-between items-center text-white">
                    <div className=" -rotate-90">
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
                          d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <span className="text-4xl ">118,890</span>
                      <span className="text-sm">users registered</span>
                    </div>
                    <div className=" rotate-90">
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
                          d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="">
                  <span className="text-[#9E4080] text-2xl">
                    Buisness stats
                  </span>
                  <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-2 p-3 px-5 flex flex-row justify-between items-center text-white">
                    <div className=" -rotate-90">
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
                          d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <span className="text-4xl ">383,210</span>
                      <span className="text-sm">
                        sch | generated by businesses
                      </span>
                      <span className="">(100 sch| = £1)</span>
                    </div>
                    <div className=" rotate-90">
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
                          d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 flex flex-row items-center justify-end text-white gap-2 pr-4" >
          <div>View Google Sheets</div>
          <div>
            <img src="./images/resize.png" width={15} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAccount;
