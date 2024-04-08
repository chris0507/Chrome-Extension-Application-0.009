import React from "react";
import CustomDatePicker from "../../components/CustomDatePicker";
import { useNavigate } from "react-router-dom";

const EditCoupon = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center">
      <div className="w-[70%] h-full border border-solid border-[#932580] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% py-10 m-5">
        <div className="flex justify-around gap-5 ">
          <div className="w-full max-w-xs">
            <p className="text-white text-xl mb-2">Create coupons</p>
            <form className="pb-8 mb-4 w-full">
              <div className="mb-3 w-6/12">
                <input
                  className="bg-[#343434] shadow appearance-none rounded-md w-full p-2 text-white text-sm leading-tight focus:outline-none focus:shadow-outline "
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
                  className="bg-[#343434] shadow appearance-none rounded-full p-2 text-white text-sm leading-tight focus:outline-none focus:shadow-outline w-[60px]"
                  type="text"
                  placeholder="Value"
                  required
                />
              </div>
              <div className="mb-3 w-6/12">
                <input
                  className="bg-[#343434] shadow appearance-none rounded-md w-full p-2 text-white text-sm leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="sch | unlock cost"
                  required
                />
              </div>
              <div className="mb-3 w-6/12">
                <input
                  className="bg-[#343434] shadow appearance-none rounded-md w-full p-2 text-white text-sm leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Add code"
                  required
                />
              </div>
              <div className="mb-3 w-6/12">
                <input
                  className="bg-[#343434] shadow appearance-none rounded-md w-full p-2 text-white text-sm leading-tight focus:outline-none focus:shadow-outline"
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
                  className="w-full px-3 py-2 text-gray-700 text-sm border rounded-lg focus:outline-none bg-[#343434]"
                  placeholder="Preview text"
                ></textarea>
              </div>
              <div className="mb-3">
                <textarea
                  className="w-full px-3 py-2 text-gray-700 text-sm border rounded-lg focus:outline-none bg-[#343434]"
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
  );
};

export default EditCoupon;
