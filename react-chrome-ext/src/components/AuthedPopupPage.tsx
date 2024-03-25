import React from "react";

interface AuthedPopupPageProps {
  handleClosePopup: () => void;
  handleSignOut: () => void;
  openOnBoardingpage: () => void;
}

const AuthedPopupPage: React.FC<AuthedPopupPageProps> = ({
  handleClosePopup,
  handleSignOut,
  openOnBoardingpage,
}) => {
  return (
    <div className="w-full h-[32rem] border border-solid border-[#08A9D7] rounded-t-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% ">
      <div className="p-2 flex justify-end">
        <button
          type="button"
          className="border border-white border-solid rounded-full p-1 inline-flex items-center justify-center text-white"
          onClick={handleClosePopup}
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <div>
          <img src="/images/logo.png" alt="logo" width={150} />
        </div>
        <div className="flex flex-col justify-center items-center gap-1 mb-2 text-white text-[15px]">
          <span>© Advertising Box limited</span>
          <span>Terms & Conditions</span>
          <span className="text-[#00A1D6]">About us</span>
        </div>
        <button
          className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded-xl"
          onClick={handleSignOut}
        >
          Sign out
        </button>
        <div className="flex items-center">
          <button
            className="bg-[#40A9F1] hover:bg-blue-700 text-white text-[15px] font-bold py-2 px-4 rounded-full"
            onClick={openOnBoardingpage}
          >
            Launch app
          </button>
        </div>
        <div>
          <span className="text-white text-[30px]">0 sch | Max 500</span>
        </div>
        <div className="flex justify-center items-center gap-3 mt-3">
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-white text-xl">enter your new url</span>
            <div className="relative">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-2 pl-2 pr-10 focus:outline-none focus:ring focus:border-blue-300"
              />
              <span className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400 text-xl">
                3/64
              </span>
            </div>
            <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-2 border border-blue-500 hover:border-transparent rounded-full">
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-b-2xl bg-[#08A9D7] p-2 text-center mt-2">
        <span className="text-white text-xl">Rupert Bloom</span>
      </div>
      <div className="mt-0.5">
        <div className="border border-solid border-[#08A9D7] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% p-1 text-xl text-center">
          <span className="text-white">Tile 1</span>
          <span className="mx-1 text-white">|</span>
          <span className="text-white">11/03/2024</span>
          <span className="mx-1 text-white">|</span>
          <span className="text-[#00A1D6] cursor-pointer">visit website</span>
          <span className="mx-1 text-white">|</span>
          <span className="text-[#E0312A] cursor-pointer">Delete</span>
        </div>
      </div>
    </div>
  );
};

export default AuthedPopupPage;
