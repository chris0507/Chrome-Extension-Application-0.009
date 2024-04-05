import React from 'react'

const HamburgerMenu = () => {
  return (
    <div className="bg-[#1A1A1A] p-5">
      <div
        className="cursor-pointer focus:outline-none focus:ring focus:ring-violet-100"
        // onClick={toggleMenu}
      >
        <div className="w-4 h-px bg-white my-1"></div>
        <div className="w-4 h-px bg-white my-1"></div>
        <div className="w-4 h-px bg-white my-1"></div>
      </div>
    </div>
  );
}

export default HamburgerMenu