import React from "react";
import DropdownMenu from "../DropdownMenu";
import { Progress } from "@material-tailwind/react";

const RightSidebar = () => {
  return (
    <div className="relative max-w-[500px] min-w-[400px] w-full xl:w-1/3  border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% p-5 m-5 mt-10">
      <span className="text-[#3FA9F5] text-2xl font-bold mb-4">Top URLs</span>
      <img
        src="/images/logo.png"
        className="top-[-30px] right-[10px] absolute"
        alt="logo"
        width={150}
      />
      <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-2 p-4">
        <div>
          <DropdownMenu />
        </div>
        <div className="my-2 gap-5">
          <div className="flex items-center gap-5 my-1">
            <div className="flex justify-center items-center w-[65px]">
              <img src="images/google.svg" alt="google" width={30} />
            </div>
            <div className="text-white flex justify-center gap-3">
              <span className="text-[13px]">Google</span>
              <span className="bg-[#3FA9F5] rounded-full p-1 flex items-center justify-center w-[22px] h-[22px] text-lg">
                +
              </span>
              <span className="text-[9px] flex items-center">
                Add to Dashboard | Report
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 my-1">
            <div className="flex justify-center items-center w-[65px]">
              <img src="images/amazon.svg" alt="amazon" width={50} />
            </div>
            <div className="text-white flex justify-center gap-3">
              <span className="text-[13px]">Amazon</span>
              <span className="bg-[#3FA9F5] rounded-full p-1 flex items-center justify-center w-[22px] h-[22px] text-lg">
                +
              </span>
              <span className="text-[9px] flex items-center">
                Add to Dashboard | Report
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 my-1">
            <div className="flex justify-center items-center w-[65px]">
              <img
                src="images/Annie'sBurgerShack.png"
                alt="Annie's Burger Shack"
                width={50}
              />
            </div>
            <div className="text-white flex justify-center gap-3">
              <span className="text-[13px]">Annie's Burger Shack</span>
              <span className="bg-[#3FA9F5] rounded-full p-1 flex items-center justify-center w-[22px] h-[22px] text-lg">
                +
              </span>
              <span className="text-[9px] flex items-center">
                Add to Dashboard | Report
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 my-1">
            <div className="flex justify-center items-center w-[65px]">
              <img src="images/douhnuts.png" alt="Doughnuts" width={50} />
            </div>
            <div className="text-white flex justify-center gap-3">
              <span className="text-[13px]">Doughnuts</span>
              <span className="bg-[#3FA9F5] rounded-full p-1 flex items-center justify-center w-[22px] h-[22px] text-lg">
                +
              </span>
              <span className="text-[9px] flex items-center">
                Add to Dashboard | Report
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 my-1">
            <div className="flex justify-center items-center w-[65px]">
              <img src="images/truffles1.png" alt="Truffles" width={50} />
            </div>
            <div className="text-white flex justify-center gap-3">
              <span className="text-[13px]">Truffles</span>
              <span className="bg-[#3FA9F5] rounded-full p-1 flex items-center justify-center w-[22px] h-[22px] text-lg">
                +
              </span>
              <span className="text-[9px] flex items-center">
                Add to Dashboard | Report
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 my-1">
            <div className="flex justify-center items-center w-[65px]">
              <img src="images/pieminister1.png" alt="Pieminister" width={50} />
            </div>
            <div className="text-white flex justify-center gap-3">
              <span className="text-[13px]">Pieminister</span>
              <span className="bg-[#3FA9F5] rounded-full p-1 flex items-center justify-center w-[22px] h-[22px] text-lg">
                +
              </span>
              <span className="text-[9px] flex items-center">
                Add to Dashboard | Report
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 my-1">
            <div className="flex justify-center items-center w-[65px]">
              <img src="images/codscallops.png" alt="Cod Scallops" width={50} />
            </div>
            <div className="text-white flex justify-center gap-3">
              <span className="text-[13px]">Cod Scallops</span>
              <span className="bg-[#3FA9F5] rounded-full p-1 flex items-center justify-center w-[22px] h-[22px] text-lg">
                +
              </span>
              <span className="text-[9px] flex items-center">
                Add to Dashboard | Report
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 my-1">
            <div className="flex justify-center items-center w-[65px]">
              <img src="images/pryzm1.png" alt="Pryzm" width={50} />
            </div>
            <div className="text-white flex justify-center gap-3">
              <span className="text-[13px]">Pryzm</span>
              <span className="bg-[#3FA9F5] rounded-full p-1 flex items-center justify-center w-[22px] h-[22px] text-lg">
                +
              </span>
              <span className="text-[9px] flex items-center">
                Add to Dashboard | Report
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 my-1">
            <div className="flex justify-center items-center w-[65px]">
              <img src="images/unidays1.png" alt="Unidays" width={50} />
            </div>
            <div className="text-white flex justify-center gap-3">
              <span className="text-[13px]">Unidays</span>
              <span className="bg-[#3FA9F5] rounded-full p-1 flex items-center justify-center w-[22px] h-[22px] text-lg">
                +
              </span>
              <span className="text-[9px] flex items-center">
                Add to Dashboard | Report
              </span>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-[#3FA9F5] text-2xl  font-bold mb-4">Wallet</span>
        <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-2 p-3 px-5">
          <div className="border border-solid border-[#2BAAE1] bg-white rounded-2xl p-4">
            <div className="flex gap-2">
              <span className="text-lg font-bold">200 sch |</span>
              <span className="flex items-center">Max 500</span>
            </div>
            <div className=" bg-blue-500"></div>
            <div className="bg-black rounded-full mt-1 p-5 w-full">
              <Progress
                value={40}
                size="sm"
                variant="filled"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                color="blue"
                className="max-h-[2px] min-h-[2px]   bg-[#434343]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-[#3FA9F5] text-2xl font-bold mb-4">
          Featured Coupons
        </span>
        <div className="border flex flex-row gap-2 border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-2 p-3 px-5">
          <div className="bg-white border border-solid border-[#2BAAE1] p-2 flex justify-center items-center rounded-xl w-[50px] h-[50px]">
            <img
              src="images/Logo-google-icon-PNG.png"
              alt="google"
              width={40}
            />
          </div>
          <div className="bg-white border border-solid border-[#2BAAE1] p-2 flex justify-center items-center rounded-xl w-[50px] h-[50px]">
            <img src="images/300px-EBay_logo.svg.png" alt="google" width={40} />
          </div>
          <div className="bg-white border border-solid border-[#2BAAE1] p-2 flex justify-center items-center rounded-xl w-[50px] h-[50px]">
            <img
              src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png"
              alt="google"
              width={40}
            />
          </div>
          <div className="bg-white border border-solid border-[#2BAAE1] p-2 flex justify-center items-center rounded-xl w-[50px] h-[50px]">
            <img
              src="https://cdn.worldvectorlogo.com/logos/foot-locker-logo-2.svg"
              alt="google"
              width={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
