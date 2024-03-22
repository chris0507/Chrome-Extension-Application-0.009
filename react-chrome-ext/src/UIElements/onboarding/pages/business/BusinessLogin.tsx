import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import LoginForm from '../../components/business/LoginForm';
import SignUpForm from '../../components/business/SignUpForm';

const BusinessLogin = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-10 p-5">
      <div>
        <img src="/images/logo.png" alt="logo" width={200} />
      </div>
      <div className="w-full h-full border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% p-10">
        <div className="flex justify-center gap-5 ">
          <LoginForm />
          <SignUpForm />
        </div>
        <NavLink to="/">
          <div className="flex justify-center items-center text-white text-center text-lg mt-10 gap-2 cursor-pointer">
            <span>Public users</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default BusinessLogin