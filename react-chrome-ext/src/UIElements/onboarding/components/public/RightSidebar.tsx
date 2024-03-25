import React from "react";
import DropdownMenu from "../DropdownMenu";
import { Progress } from "@material-tailwind/react";

const RightSidebar = () => {
  return (
    <div className="relative flex-auto  border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% p-5 m-5 mt-10">
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
          <div className="flex items-center gap-5 my-4">
            <div className="flex justify-center items-center w-[100px]">
              <img src="images/google.svg" alt="google" width={30} />
            </div>
            <div className="text-white flex justify-center gap-3">
              <span className="text-[15px]">Google</span>
              <span className="bg-[#3FA9F5] rounded-full p-1 flex items-center justify-center w-[22px] h-[22px] text-lg">
                +
              </span>
              <span>Add to Dashboard | Report</span>
            </div>
          </div>
          <div className="flex items-center gap-5 my-4">
            <div className="flex justify-center items-center w-[100px]">
              <img src="images/amazon.svg" alt="amazon" width={50} />
            </div>
            <div className="text-white flex justify-center gap-3">
              <span className="text-[15px]">Amazon</span>
              <span className="bg-[#3FA9F5] rounded-full p-1 flex items-center justify-center w-[22px] h-[22px] text-lg">
                +
              </span>
              <span>Add to Dashboard | Report</span>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-[#3FA9F5] text-2xl font-bold mb-4">Wallet</span>
        <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-2 p-3 px-5">
          <div className="border border-solid border-[#2BAAE1] bg-white rounded-2xl p-4">
            <div className="flex gap-2">
              <span className="text-lg font-bold">200 sch |</span>
              <span className="flex items-center">Max 500</span>
            </div>
            <div className="bg-black rounded-full mt-1 p-5 w-full">
              <Progress
                value={25}
                variant="filled"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                color="red"
                className="h-[10px] bg-[#434343]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-[#3FA9F5] text-2xl font-bold mb-4">
          Featured Coupons
        </span>
        <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% mt-2 p-3 px-5">
          <div className="bg-white border border-solid border-[#2BAAE1] p-2 flex justify-center items-center rounded-xl w-[50px] h-[50px]">
            <img src="images/google.svg" alt="google" width={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
