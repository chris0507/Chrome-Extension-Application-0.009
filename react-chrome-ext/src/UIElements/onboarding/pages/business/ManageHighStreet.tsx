import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HighStreetModal from "../../components/HighStreetModal";

const ManageHighStreet = () => {
  const row = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [width, setWidth] = useState(0);

   const showModal = () => {
     setIsModalOpen(true);
   };

   const closeModal = () => {
     setIsModalOpen(false);
   };

   useEffect(() => {
     console.log("high street", location.pathname);
     if (isModalOpen) {
       document.body.style.overflow = "hidden";
     } else {
       document.body.style.overflow = "auto";
     }
   }, [isModalOpen]);
  useEffect(() => {
    if (row.current) {
      //get the width of the row
      const width = row.current.offsetWidth;
      setWidth(Math.floor((width - 40) / 6));
    }
  }, []);
  return (
    <div className="flex justify-center w-full">
      <div className="container flex-col">
        <div className="border w-10/12 border-solid border-[#9E4080] rounded-2xl bg-gradient-to-b from-[#3E3733] to-[#000000] to-35% p-5 m-5">
          <div className="flex flex-col lg:flex-row gap-4 items-center text-white">
            <div className="flex flex-1 flex-col gap-3 pl-0 lg:pl-[8%]">
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
              <div className="flex flex-row relative gap-3 items-center">
                <div className=" absolute -ml-[65px]">0/3 images</div>
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
                <div className="text-nowrap">sch |</div>
              </div>
              <div className="flex flex-col gap-3">
                <div>Select window position</div>
                <div className="flex flex-col gap-4">
                  <div className=" grid grid-cols-6 gap-2" ref={row}>
                    <div
                      className={`border-2 bg-[#1A1A1A] flex items-center border-gray-500  rounded-lg cursor-pointer `}
                      style={{ width: `${width}px`, height: `${width}px` }}
                    ></div>
                    <div
                      className={`border-2 bg-[#932580] flex items-center border-gray-500  rounded-lg cursor-pointer `}
                      style={{ width: `${width}px`, height: `${width}px` }}
                    ></div>
                    <div
                      className={`border-2 bg-[#9E4080] justify-center  border-gray-500  rounded-lg cursor-pointer flex flex-col items-center text-sm `}
                      style={{ width: `${width}px`, height: `${width}px` }}
                    >
                      <div className=" text-nowrap">6.25sch |</div>
                      <div>1 week</div>
                    </div>
                    <div
                      className={`border-2 bg-[#1A1A1A] flex items-center border-gray-500  rounded-lg cursor-pointer `}
                      style={{ width: `${width}px`, height: `${width}px` }}
                    ></div>
                    <div
                      className={`border-2 bg-[#1A1A1A] flex items-center border-gray-500  rounded-lg cursor-pointer `}
                      style={{ width: `${width}px`, height: `${width}px` }}
                    ></div>
                    <div
                      className={`border-2 bg-[#932580] flex items-center border-gray-500  rounded-lg cursor-pointer `}
                      style={{ width: `${width}px`, height: `${width}px` }}
                    ></div>
                  </div>
                  <div className=" grid grid-cols-6 gap-2" ref={row}>
                    <div
                      className={`border-2 bg-[#1A1A1A] flex items-center border-gray-500  rounded-lg cursor-pointer `}
                      style={{ width: `${width}px`, height: `${width}px` }}
                    ></div>
                    <div
                      className={`border-2 bg-[#1A1A1A] flex items-center border-gray-500  rounded-lg cursor-pointer `}
                      style={{ width: `${width}px`, height: `${width}px` }}
                    ></div>
                    <div
                      className={`border-2 bg-[#932580] justify-center  border-gray-500  rounded-lg cursor-pointer flex flex-col items-center text-sm `}
                      style={{ width: `${width}px`, height: `${width}px` }}
                    ></div>
                    <div
                      className={`border-2 bg-[#1A1A1A] flex items-center border-gray-500  rounded-lg cursor-pointer `}
                      style={{ width: `${width}px`, height: `${width}px` }}
                    ></div>
                    <div
                      className={`border-2 bg-[#1A1A1A] flex items-center border-gray-500  rounded-lg cursor-pointer `}
                      style={{ width: `${width}px`, height: `${width}px` }}
                    ></div>
                    <div
                      className={`border-2 bg-[#1A1A1A] flex items-center border-gray-500  rounded-lg cursor-pointer `}
                      style={{ width: `${width}px`, height: `${width}px` }}
                    ></div>
                  </div>
                </div>
                <div className=" text-end">Total cost: 6.25 sch | per week</div>
                <div className="flex justify-end">
                  <div className="flex flex-row gap-4">
                    <button
                      className="flex items-center justify-between bg-[#932580] text-white pr-3 pl-5 rounded-full"
                      onClick={() => {showModal()}}
                    >
                      <span className="py-1 pr-3">Preview</span>
                      <img
                        src="./images/paste.png"
                        alt=""
                        className="w-6 h-6 border-l-2 border-dashed border-white py-1 pl-2"
                      />
                    </button>
                    {isModalOpen && <HighStreetModal closeModal={closeModal} />}

                    <button
                      className="flex items-center justify-between bg-[#932580] text-white pr-3 pl-5 rounded-full"
                      onClick={() => {
                        navigate("/high-street");
                      }}
                    >
                      <span className="py-1 pr-3">Purchase</span>
                      <img
                        src="./images/purchase-order.png"
                        alt=""
                        className="w-6 h-6 border-l-2 border-dashed border-white py-1 pl-2"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className="border flex flex-col gap-3  border-solid border-[#9E4080] rounded-2xl text-base bg-gradient-to-b from-[#3E3733] to-[#000000] text-white to-35% p-5 ">
                <div className="text-lg">Business overview</div>
                <p>
                  Lorem ipsum dolor sit amet, consecteture adipiscing elit, sed
                  diam nonummy nigb enusumod tincidunt ut laoreet dolore magna
                  aliquam erate volutpat. ul wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suyscipit lobartis nisl ut
                  aliquip ex ea commodo xonsequat.
                </p>
                <p>
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suyscipit lobartis nisl ut aliquip ex ea commodo
                  xonsequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consecteture adipiscing elit, sed
                  diam nonummy nigb enusumod tincidunt ut laoreet dolore magna
                  aliquam erate volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suyscipit lobartis nisl ut
                  aliquip ex ea commodo xonsequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageHighStreet;
