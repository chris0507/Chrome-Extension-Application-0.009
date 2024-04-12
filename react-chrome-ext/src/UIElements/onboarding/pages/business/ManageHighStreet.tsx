import React from "react";

const ManageHighStreet = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="container flex-col">
        <div className="border w-10/12 border-solid border-[#9E4080] rounded-2xl bg-gradient-to-b from-[#3E3733] to-[#000000] to-35% p-5 m-5">
          <div className="flex flex-row gap-4 items-center text-white">
            <div className="flex flex-1 flex-col gap-3 pl-[8%]">
              <p className="text-lg font-semibold">Manage Highstreet</p>
              <div className="text-sm">
                All windows available to purchase at a cost of 6.25 sch | each
              </div>
              <input
                className="bg-[#343434] w-1/3 border-none shadow appearance-none rounded  p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={`URL`}
                required
              />
              <div className="flex flex-row gap-3 items-center">
                <div className="w-1/3">
                  <div className="flex flex-1 items-center justify-end ">
                    <input
                      className="bg-[#343434] w-full shadow appearance-none rounded  p-2 text-white border-none leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="text"
                      placeholder="Update Password"
                      value={`Upload banner`}
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
                          className="w-5 h-5 text-white -rotate-90"
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
                <div className="flex flex-row gap-2 items-center">
                  <div>600 &times; 600px</div>
                  <img src="./images/plus.png" width={16} height={16} alt="" />
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div>Promote to Highstreet</div>
                <div>
                  <select
                    id="city"
                    className="bg-[#932580]  text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 placeholder-gray-400 text-white"
                    required
                  >
                    <option value="" disabled selected>
                      Yes
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div>Schedule occupancy</div>
                <div>
                  <select
                    id="city"
                    className="bg-[#932580]  text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 placeholder-gray-400 text-white"
                    required
                  >
                    <option value="" disabled selected>
                      Weekly
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row gap-3 w-1/3 items-center">
                <div>Cost</div>
                <input
                  className="bg-[#343434] w-full  border-none shadow appearance-none rounded  p-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value={`6.25`}
                  required
                />
                <div className="text-nowrap" >sch |</div>
              </div>
              <div>
                <div>Select window position</div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageHighStreet;
