import React from "react";
import CustomDatePicker from "../../components/CustomDatePicker";
import { useNavigate } from "react-router-dom";

const CreateCoupons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center w-full">
      <div className="container w-full">
        <div className=" h-full w-full border border-solid border-[#932580] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% py-10 m-5">
          <div className="flex flex-1 md:flex-row flex-col justify-around gap-5 ">
            <div className="w-full flex justify-center">
              <div className=" flex flex-col ">
                <p className="text-white text-xl mb-4">Coupon templates</p>
                <div className="grid grid-cols-2 gap-4 md:gap-4">
                  <button className="bg-[#333333] text-white py-3 px-4 rounded-md text-center w-full">
                    Blank
                  </button>
                  <button className="bg-[#932580] text-white py-3 px-4 rounded-md text-center w-full">
                    Buy 1 get 1 on us
                  </button>
                  <button className="bg-[#932580] text-white py-3 px-4 rounded-md text-center w-full">
                    10% off
                  </button>
                  <button className="bg-[#932580] text-white py-3 px-4 rounded-md text-center w-full">
                    Free drink on us
                  </button>
                  <button className="bg-[#932580] text-white py-3 px-4 rounded-md text-center w-full">
                    10% off
                  </button>
                  <button className="bg-[#932580] text-white py-3 px-4 rounded-md text-center w-full">
                    Lets include desert
                  </button>
                  <button className="bg-[#932580] text-white py-3 px-4 rounded-md text-center w-full">
                    Paste prvious offer
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center border-l-0 md:border-l-2 border-gray-500 ">
              <div className=" flex flex-col">
                <p className="text-white text-xl mb-2">Create coupons</p>
                <form className="pb-8 mb-4 w-full">
                  <div className="mb-3 w-6/12">
                    <input
                      className="bg-[#343434] shadow appearance-none rounded-md w-full p-2 text-white text-sm leading-tight focus:outline-none border-none focus:shadow-outline "
                      type="text"
                      placeholder="Title"
                      required
                    />
                  </div>
                  <div className="mb-3 flex items-center gap-3 w-8/12">
                    <select
                      className="bg-[#932580]  text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pl-4 text-white"
                      required
                    >
                      <option value="" disabled selected>
                        Percentage
                      </option>
                      <option value="10">10%</option>
                      <option value="20">20%</option>
                      <option value="30">30%</option>
                      <option value="40">40%</option>
                      <option value="50">50%</option>
                      <option value="60">60%</option>
                      <option value="70">70%</option>
                      <option value="80">80%</option>
                      <option value="90">90%</option>
                    </select>
                    <input
                      className="bg-[#343434] shadow appearance-none rounded-md p-2 text-white text-sm leading-tight focus:outline-none border-none focus:shadow-outline w-[60px]"
                      type="text"
                      placeholder="Value"
                      required
                    />
                  </div>
                  <div className="mb-3 flex flex-row items-center">
                    <input
                      className="bg-[#343434] shadow appearance-none rounded-md w-6/12 p-2 text-white text-sm leading-tight focus:outline-none border-none focus:shadow-outline"
                      type="text"
                      placeholder="sch | unlock cost"
                      required
                    />
                    <div className="text-white pl-2 w-fit">sch |</div>
                  </div>
                  <div className="mb-3  flex flex-row items-center">
                    <input
                      className="bg-[#343434] w-6/12 shadow appearance-none rounded-md  p-2 text-white text-sm leading-tight focus:outline-none border-none focus:shadow-outline"
                      type="text"
                      placeholder="Add code"
                      required
                    />
                    <div className="text-white pl-2 w-fit">
                      Or generate code
                    </div>
                  </div>
                  <div className="mb-3 w-6/12">
                    <input
                      className="bg-[#343434] shadow appearance-none rounded-md w-full p-2 text-white text-sm leading-tight focus:outline-none border-none focus:shadow-outline"
                      type="text"
                      placeholder="Number of codes"
                      required
                    />
                  </div>
                  <div className="mb-3 w-10/12 flex gap-3">
                    <CustomDatePicker />
                    <CustomDatePicker />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="w-full px-3 py-2 border-none text-gray-700 text-sm border rounded-lg focus:outline-none bg-[#343434]"
                      placeholder="Preview text"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="w-full border-none px-3 py-2 text-gray-700 text-sm border rounded-lg focus:outline-none bg-[#343434]"
                      placeholder="Coupon terms"
                    ></textarea>
                  </div>
                  <div className="mb-3 flex justify-end">
                    <button
                      className="flex items-center justify-between bg-[#932580] text-white px-2 rounded-full"
                      onClick={() => {
                        navigate("/manage-coupons");
                      }}
                    >
                      <span className="py-1 pr-2 pl-4">Generate coupon</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 border-l-2 border-dashed border-white py-1 pl-2 text-whie"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCoupons;
