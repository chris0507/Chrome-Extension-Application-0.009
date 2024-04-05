import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ExploreCoupons = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setIsMenuOpen(true);
  };
  const closeModal = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      setIsMenuOpen(false);
    }
  };
  return (
    <div className="mt-4">
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#00080D] bg-opacity-75 z-20 flex justify-center items-center"
          onClick={closeModal}
          ref={modalRef}
        >
          <div className="border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% p-2">
            <div className="flex justify-between pb-2 px-1">
              <span className="text-[#43A9F5] tex-sm font-bold">
                Unlock coupon
              </span>
              <svg
                className="h-4 w-4 border border-white rounded-full cursor-pointer text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                onClick={() => setIsMenuOpen(false)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="border border-white rounded-2xl bg-white p-4">
              <p className="text-dark text-xl font-bold mb-3">
                10% Off All Burgers & Meals
              </p>
              <div className="flex justify-end items-center gap-3">
                <span className="text-dark">Cost: 20sch |</span>
                <button
                  className="flex items-center justify-between bg-[#43A9F5] text-white px-4 rounded-full"
                  onClick={() => navigate("/my-coupons")}
                >
                  <span className="py-1 pr-2">Unlock coupon</span>
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
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text-end">
                <span className="text-dark text-sm">
                  Coupon terms and conditions
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="border-y-2 border-[#A9A9A9] flex items-center"
        style={{
          backgroundImage: `url(https://i.ibb.co/cLNkPTM/annies-background-image.png)`,
          height: "150px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center gap-3 w-[45%] h-full bg-[#00080D] bg-opacity-75 border-r-2 border-dashed border-[#A9A9A9]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 508.97 441.88"
            className="w-[120px]"
          >
            <path
              d="M170.11 364.35a13.09 13.09 0 0 0-8-3.26h-25.59a27.14 27.14 0 0 1-7.1-.87 27.2 27.2 0 0 1-6.07-3.79L3.88 259.73A11.89 11.89 0 0 1 0 252.16l-.11-2.36A11.9 11.9 0 0 1 3 241.9l18-17.7a4.56 4.56 0 0 0 0-6.51L3 200a11.92 11.92 0 0 1-3.09-7.9l.09-2.38a11.89 11.89 0 0 1 3.84-7.56l119.51-96.71a26.83 26.83 0 0 1 6.07-3.79 27.14 27.14 0 0 1 7.1-.87h25.64a13.09 13.09 0 0 0 8-3.26l75.46-74.27a13 13 0 0 1 8-3.26h1.67a13.06 13.06 0 0 1 8 3.26l75.5 74.27a13.09 13.09 0 0 0 8 3.26h25.51a27.22 27.22 0 0 1 7.11.87 27 27 0 0 1 6.06 3.79l119.47 96.71a11.88 11.88 0 0 1 3.83 7.56l.12 2.37a11.87 11.87 0 0 1-3.09 7.9l-18 17.7a4.56 4.56 0 0 0 0 6.51l18 17.7a11.85 11.85 0 0 1 3.09 7.9l-.12 2.36a11.88 11.88 0 0 1-3.83 7.57l-119.47 96.7a27.4 27.4 0 0 1-6.06 3.79 27.22 27.22 0 0 1-7.11.87h-25.64a13.09 13.09 0 0 0-8 3.26l-75.5 74.27a13.06 13.06 0 0 1-8 3.26h-1.67a13 13 0 0 1-8-3.26z"
              fill="#70787c"
            ></path>
            <path
              d="M175.22 356.17a13.08 13.08 0 0 0-7.95-3.25h-23.61a27 27 0 0 1-6.95-.82 27.34 27.34 0 0 1-5.93-3.75L18.7 257.64a11.88 11.88 0 0 1-3.83-7.56l-.08-1.7a11.82 11.82 0 0 1 3.08-7.89l16.56-16.29a4.56 4.56 0 0 0 0-6.51L17.87 201.4a11.84 11.84 0 0 1-3.08-7.9l.08-1.69a11.88 11.88 0 0 1 3.83-7.56l112.08-90.73a26.85 26.85 0 0 1 5.93-3.74 27 27 0 0 1 6.95-.82h23.61a13 13 0 0 0 7.95-3.26l70.72-69.56a13.09 13.09 0 0 1 7.95-3.26h1a13.09 13.09 0 0 1 7.95 3.26L333.6 85.7a13 13 0 0 0 8 3.26h23.6a27.15 27.15 0 0 1 7 .82 27.06 27.06 0 0 1 5.8 3.74l112.08 90.73a11.88 11.88 0 0 1 3.83 7.56l.09 1.69a11.9 11.9 0 0 1-3.09 7.9l-16.56 16.29a4.56 4.56 0 0 0 0 6.51L491 240.49a11.88 11.88 0 0 1 3.09 7.89l-.09 1.7a11.88 11.88 0 0 1-3.83 7.56L378 348.35a27.56 27.56 0 0 1-5.92 3.75 27.15 27.15 0 0 1-7 .82h-23.6a13.09 13.09 0 0 0-8 3.25l-70.72 69.57a13.09 13.09 0 0 1-7.95 3.26h-1a13.09 13.09 0 0 1-7.95-3.26z"
              fill="#1c1f21"
            ></path>
            <path
              d="M254.41 421.51a5.65 5.65 0 0 1-4-1.61l-72.37-71.2a12.19 12.19 0 0 0-7.3-3h-26.35a16.06 16.06 0 0 1-8.85-3.13L24.2 252.47a5 5 0 0 1-.36-7.58l21.71-21.36a3.62 3.62 0 0 0 1.09-2.59 3.58 3.58 0 0 0-1.09-2.58L23.84 197a5 5 0 0 1 .36-7.59l111.34-90.12a16.06 16.06 0 0 1 8.85-3.13h26.38a12.19 12.19 0 0 0 7.3-3L250.44 22a5.69 5.69 0 0 1 7.94 0l72.37 71.19a12.16 12.16 0 0 0 7.29 3h26.4a16.06 16.06 0 0 1 8.84 3.13l111.34 90.12A5 5 0 0 1 485 197l-21.72 21.36a3.57 3.57 0 0 0-1.08 2.58 3.61 3.61 0 0 0 1.08 2.59L485 244.89a5 5 0 0 1-.37 7.58l-111.35 90.11a16.06 16.06 0 0 1-8.84 3.13H338a12.16 12.16 0 0 0-7.29 3l-72.37 71.2a5.61 5.61 0 0 1-3.93 1.6zm-75-74.15l72.37 71.2a3.81 3.81 0 0 0 5.3 0l72.37-71.2a13.89 13.89 0 0 1 8.61-3.53h26.4a14.44 14.44 0 0 0 7.66-2.71L483.43 251a3.12 3.12 0 0 0 .23-4.78L462 224.87a5.53 5.53 0 0 1 0-7.86l21.71-21.36a3.11 3.11 0 0 0-.23-4.77L372.1 100.75a14.44 14.44 0 0 0-7.66-2.75H338a13.89 13.89 0 0 1-8.61-3.53l-72.33-71.14a3.79 3.79 0 0 0-5.3 0l-72.37 71.18a13.92 13.92 0 0 1-8.62 3.49h-26.38a14.38 14.38 0 0 0-7.66 2.71L25.39 190.88a3.11 3.11 0 0 0-.23 4.77L46.87 217a5.51 5.51 0 0 1 0 7.86l-21.71 21.37a3.12 3.12 0 0 0 .23 4.78l111.34 90.11a14.38 14.38 0 0 0 7.66 2.71h26.38a13.92 13.92 0 0 1 8.62 3.53z"
              fill="#70787c"
            ></path>
            <path
              d="M146.08 284.21a5 5 0 0 1 5.2-5c1.72 0 3.4.67 5.9 2.5a35.09 35.09 0 0 0 2.62-5.38l4.49-11.11c1.05-2.58 3.22-4.68 5.57-4.68l.6 2.1a6.59 6.59 0 0 0-3.4 3.85l-1.5 3.78c4.12 1.38 9.13-.83 9.13-5.84 0-3.36-2.55-6.24-7.18-6.24a9.85 9.85 0 0 0-9.95 9.87 8 8 0 0 0 .86 3.67l-2.42 1.74a11.76 11.76 0 0 1-1.16-5.05c0-6.43 4.67-12.79 13.12-12.79 5.88 0 9.65 4.08 9.65 8.94 0 6.81-6.8 7.93-6.8 7.93a8.83 8.83 0 0 1 4.52 7.71c0 4.3-2.84 9.42-8.83 9.42-3.14 0-5.38-1.42-8.52-3.89a8.56 8.56 0 0 1-6.47 3.18c-3.56 0-5.46-2.24-5.46-4.71m2.54-.11a2.53 2.53 0 0 0 2.77 2.13c1.53 0 3-1 4.22-2.4-1.49-1.12-3-2.09-4.37-2.09a2.58 2.58 0 0 0-2.62 2.36m23.75-4.53c0-2.06-.86-5.61-7.71-7.14-.93 2.39-1.9 4.78-2.39 6a35.87 35.87 0 0 1-2.62 5.24c1.72 1.42 4 3.14 6.77 3.14 4.27 0 6-4.26 6-7.22M198.44 278.64c-2.84 5-6.17 9.38-9.8 9.38-1.83 0-3.25-.89-3.22-3.21-1.57 1.72-3.25 3.21-5.31 3.21-2.62 0-4.56-1.68-1.76-8.56l4.57-11.33h3.25l-5.23 13c-1.58 3.82-1.09 4.49-.3 4.49 2.46 0 5.57-5.08 6.77-7.59l4-9.87h3.25l-5.23 13c-1.5 3.71-1 4.79 0 4.79 1.94 0 5.12-4.08 7.59-8.3a1.75 1.75 0 0 1 1.46 1.05"
              fill="#70787c"
            ></path>
            <path
              d="M197 277.59c1.12-1.91 2.36-4.49 3.44-6.88a3.61 3.61 0 0 1-1.12-2.43c0-1.72 1.72-3.33 3.25-3.82l1.87 1.46-1.49 3.44c1.49 1.5 3.89 2.92 3.89 5.2a5.37 5.37 0 0 1-.45 1.91l-1.87 4.67c-1.72 4.27-.79 4.79-.19 4.79 1.57 0 3.7-3 6.85-8.34a1.74 1.74 0 0 1 1.45 1.05c-2.91 5-5.64 9.38-9 9.38-2.95 0-4.26-2.39-1.61-8.79l1.42-3.48a3.66 3.66 0 0 0 .34-1.27c0-.74-.71-1.34-2-2.43-.9 1.91-2 4.3-3.33 6.59a1.79 1.79 0 0 1-1.46-1.05"
              fill="#70787c"
            ></path>
            <path
              d="M230.72 278.64c-3.86 6.73-8.75 8.9-11.93 10.39 0 0-.45 1.24-1.16 2.85-1.5 3.32-3.18 6.32-6.7 6.32-2.21 0-3.74-1.35-3.55-3.41s2.13-3.55 4.07-4.41c1.46-.75 3.56-1.5 4.38-2.06l1.12-2.88S215.64 288 213 288c-2.14 0-3.22-1.79-3.22-4 0-4.15 3.85-16.38 9.46-16.38a3.48 3.48 0 0 1 3.7 3l1.05-2.54h3.26l-7.48 18.43a21.73 21.73 0 0 0 9.46-9 1.77 1.77 0 0 1 1.46 1.05m-20.13 17.24c1.12 0 2.8-1.16 4.19-4.78a16.2 16.2 0 0 0-3.37 1.42c-.93.6-2 1.46-2 2.39 0 .6.41 1 1.16 1m8-14.21l3.33-8.23s.08-2.91-1.87-2.91c-3.7 0-7.18 10.09-7.18 13.23 0 1.09.41 1.58 1.23 1.58 2.29 0 4.49-3.67 4.49-3.67"
              fill="#70787c"
            ></path>
            <path
              d="M245.75 278.64c-2.62 4.48-6.73 9.38-12.3 9.38-3.33 0-5.2-1.75-5.2-5.31 0-5.53 4.6-15.07 10.32-15.07 3.48 0 4.79 3.37 2.69 7.55s-5.38 4.87-9.46 4.49c0 0-2.5 6.25 2.25 6.25 3.55 0 7.4-3.59 10.24-8.34a1.75 1.75 0 0 1 1.46 1.05m-13.39-.75c3.67.67 5.16-1.42 6.21-3.63 1.35-2.81 1.09-3.93-.26-3.93-3.4 0-5.95 7.56-5.95 7.56"
              fill="#70787c"
            ></path>
            <path
              d="M244.29 277.59c1.13-1.91 2.36-4.49 3.45-6.88a3.58 3.58 0 0 1-1.13-2.43c0-1.72 1.72-3.33 3.26-3.82l1.87 1.46-1.5 3.44c1.5 1.5 3.89 2.92 3.89 5.2a5.16 5.16 0 0 1-.45 1.91l-1.87 4.67c-1.72 4.27-.78 4.79-.18 4.79 1.57 0 3.7-3 6.84-8.34a1.75 1.75 0 0 1 1.46 1.05c-2.92 5-5.65 9.38-9 9.38-2.95 0-4.26-2.39-1.6-8.79l1.42-3.48a3.53 3.53 0 0 0 .33-1.27c0-.74-.71-1.34-2-2.43-.9 1.91-2 4.3-3.33 6.59a1.81 1.81 0 0 1-1.46-1.05M270.66 284.43c2.17-2.28 8.19-8 13.69-13.39a48.87 48.87 0 0 1-.6-6.54c0-5.54 2.4-8.68 6.21-8.68a4.53 4.53 0 0 1 4.86 4.79c0 3.89-3.59 7-7.33 10.66a58.79 58.79 0 0 1 .94 8.08c0 6.8-4.38 11.55-10.74 11.55a11.57 11.57 0 0 1-7.25-2.46 10.1 10.1 0 0 0-2.17 8h-2.36c-.48-2.95.26-6.25 2.88-9.69a10.61 10.61 0 0 1-2.17-6.58c0-7.85 7.63-12 13.36-9.12l-1 2.39c-5.2-2-9.47 1.76-9.47 6.73a8.47 8.47 0 0 0 1.16 4.3m14.14-10.51c-4.19 4.08-8.19 8.05-12.57 12.31a7.93 7.93 0 0 0 5.13 1.79c4.6 0 8-3.14 8-8.56a36.55 36.55 0 0 0-.6-5.54m2.32-5.64c3.22-3.07 5.24-5.17 5.24-7.41 0-1.5-.83-2.43-2.06-2.43-1.53 0-3.48 1.53-3.48 5.87a32.7 32.7 0 0 0 .3 4M312.4 278.64c-3 5.16-6.24 9.38-9.72 9.38-2.73 0-4.68-1.75-2-8.52l1.83-4.46a19.32 19.32 0 0 0 1.31-3.81c0-.56-.49-.86-1.09-.86-1 0-2.88.93-4.6 2.88l-5.79 14.29h-3.24l10.9-26.82h3.25l-3.77 9.39s2.16-2.47 4.71-2.47a2.67 2.67 0 0 1 2.92 2.77 14.59 14.59 0 0 1-1.28 4.71l-2.47 6c-1.79 4.46-.59 4.83 0 4.83 2 0 5.13-4.08 7.64-8.34a1.75 1.75 0 0 1 1.45 1.05"
              fill="#70787c"
            ></path>
            <path
              d="M330.88 278.64c-2.88 5-6.17 9.38-9.8 9.38a2.82 2.82 0 0 1-3.07-2.95S315.88 288 313 288c-2.28 0-3.4-1.72-3.4-4 0-4 3.63-16.42 9.73-16.42a3.6 3.6 0 0 1 3.48 3l1-2.54h3.26l-5.24 13c-1.5 3.71-1.05 4.83 0 4.83 2 0 5.09-4.08 7.59-8.34a1.75 1.75 0 0 1 1.46 1.05m-12.53 2.95l3.33-8.23s.07-2.91-1.87-2.91c-3.7 0-7.18 10.09-7.18 13.23 0 1.09.41 1.58 1.23 1.58 2.25 0 4.49-3.67 4.49-3.67"
              fill="#70787c"
            ></path>
            <path
              d="M345.88 278.64c-2.58 4.48-6.7 9.38-12.27 9.38-3.33 0-5.24-1.75-5.24-5.27 0-5.5 4.64-15.11 10.25-15.11 3.56 0 5 3.33 2.47 8.08h-3.18c2.14-4.38 1.87-5.35.64-5.35-3.89 0-7.26 9.69-7.26 12.64a2.76 2.76 0 0 0 3 2.92c3.22 0 7.3-3.59 10.1-8.34a1.75 1.75 0 0 1 1.46 1.05"
              fill="#70787c"
            ></path>
            <path
              d="M362.75 278.64c-2.14 3.89-7.41 9.38-11.41 9.38-3.63 0-4.19-4.45-3.93-7.14.19-2.06.75-2.24 1.57-2.28 1.46 0 3.37-.19 4.83-3.37a20.11 20.11 0 0 0 1.27-4 1 1 0 0 0-1.08-.9c-1 0-2.88.93-4.57 2.77l-5.8 14.4h-3.25l10.85-26.82h3.25l-3.78 9.39s2.17-2.47 4.75-2.47a2.64 2.64 0 0 1 2.88 2.73c0 2.09-1.61 5.35-1.83 5.8-1.42 2.76-3.29 4.19-6.21 4.49-.26 4.9.94 5.16 1.69 5.19 2.2 0 6.8-3.59 9.31-8.26a1.77 1.77 0 0 1 1.46 1.05M83 236.89l26-55.74a1.68 1.68 0 0 1 1.41-.91h.83a1.68 1.68 0 0 1 1.41.91l25.93 55.74a1.47 1.47 0 0 1-1.41 2.16h-9.2c-1.49 0-2.15-.5-2.9-2.07l-3-6.55H99.52l-3 6.63a3.09 3.09 0 0 1-3 2h-9.07a1.46 1.46 0 0 1-1.45-2.17m34-17.72l-6.29-13.67h-.09l-6.21 13.67zM149.38 181.73a1.56 1.56 0 0 1 1.58-1.49H153L186.08 212h.08v-29.4a1.57 1.57 0 0 1 1.57-1.57h9.94a1.63 1.63 0 0 1 1.58 1.57v55.74a1.56 1.56 0 0 1-1.58 1.49h-1.32a2.41 2.41 0 0 1-1.08-.41l-32.72-32.88h-.08v30.89a1.57 1.57 0 0 1-1.57 1.58H151a1.63 1.63 0 0 1-1.57-1.58zM217.55 181.73a1.56 1.56 0 0 1 1.58-1.49h2.07L254.25 212h.08v-29.4a1.57 1.57 0 0 1 1.57-1.57h9.94a1.63 1.63 0 0 1 1.58 1.57v55.74a1.56 1.56 0 0 1-1.58 1.49h-1.32a2.41 2.41 0 0 1-1.08-.41l-32.72-32.88h-.08v30.89a1.57 1.57 0 0 1-1.57 1.58h-9.86a1.64 1.64 0 0 1-1.58-1.58z"
              fill="#70787c"
            ></path>
            <rect
              x="285.88"
              y="181.07"
              width="13.09"
              height="57.98"
              rx="1.57"
              fill="#70787c"
            ></rect>
            <path
              d="M317.28 182.64a1.57 1.57 0 0 1 1.57-1.57h34.29a1.57 1.57 0 0 1 1.58 1.57v9a1.57 1.57 0 0 1-1.58 1.57H330.2v10.27h18.88a1.64 1.64 0 0 1 1.58 1.58v9a1.58 1.58 0 0 1-1.58 1.58H330.2v11.18h22.94a1.58 1.58 0 0 1 1.58 1.57v9a1.58 1.58 0 0 1-1.58 1.58h-34.29a1.57 1.57 0 0 1-1.57-1.58zM367.22 203.26a1.22 1.22 0 0 1 .09-1.82c.91-.66 5.79-4.31 5.88-9.94a9.59 9.59 0 0 1-3.32.58 5.92 5.92 0 0 1-6-5.88c0-3.23 2.73-6 6.54-6 3.15 0 7.54 2.4 7.54 9.61 0 8.69-5.8 13.25-7.7 14.82a1.18 1.18 0 0 1-1.82-.16zM387.35 231.18l3.89-6.88a2.14 2.14 0 0 1 2.82-.49c.33.16 6.3 4.55 11.76 4.55 3.32 0 5.72-2.07 5.72-5 0-3.48-2.9-6.13-8.53-8.36-7.13-2.82-16.07-8.37-16.07-18.31 0-8.2 6.37-16.48 19.13-16.48 8.62 0 15.24 4.39 17.73 6.21 1 .58.82 2.07.49 2.65l-4.22 6.38c-.58.91-2.07 1.65-2.82 1.07-.74-.41-6.79-5-11.84-5-3 0-5.22 2-5.22 4.23 0 3.06 2.48 5.38 9 8S426 211.46 426 222.73c0 8.53-7.37 17.14-19.55 17.14-10.77 0-16.73-4.47-18.63-6.37-.83-.83-1.08-1.16-.42-2.32M179.5 137.81c-2.19.46-3.28.69-5.47 1.17a.61.61 0 0 1-.76-.43c-.16-.69-.23-1-.38-1.71a.63.63 0 0 1 .51-.73c4.82-1.08 9.69-2.06 14.55-2.92a.62.62 0 0 1 .75.46c.13.69.19 1 .31 1.73a.62.62 0 0 1-.53.7c-2.2.4-3.3.6-5.49 1q1.77 9 3.53 18a.62.62 0 0 1-.49.7l-2.1.43a.65.65 0 0 1-.73-.46q-1.84-9-3.7-18M190.94 133.26a.64.64 0 0 1 .55-.69l2-.34a.66.66 0 0 1 .74.48c.63 3.88 1 5.82 1.58 9.7a7.18 7.18 0 0 1 3.77-2c3.76-.57 5.9 1.71 6.36 5.09l.85 6.23a.62.62 0 0 1-.53.67l-1.8.26a.61.61 0 0 1-.69-.51c-.37-2.51-.55-3.77-.91-6.28-.29-2-1.55-3-3.26-2.71a4.13 4.13 0 0 0-3.25 2.51c.49 3 .73 4.47 1.22 7.44a.58.58 0 0 1-.55.69l-1.82.31a.63.63 0 0 1-.71-.48q-1.76-10.2-3.52-20.41M215 138.44a5.78 5.78 0 0 1 6.67 5.15v.85a.6.6 0 0 1-.55.58c-3.56.34-5.34.52-8.9.95a3.75 3.75 0 0 0 4.12 2.9 6.16 6.16 0 0 0 2.8-1.2c.35-.26.58-.41.87-.12l1 1.09c.25.23.36.47 0 .82a7.85 7.85 0 0 1-4.62 2 6.57 6.57 0 1 1-1.39-13.02m3.56 4.85a3.06 3.06 0 0 0-3.33-2.45 3.3 3.3 0 0 0-3.06 3.15c2.55-.3 3.83-.44 6.39-.7M242.8 127.1c6.4-.19 12.37 4.59 12.35 11.12 0 6.25-5.46 11.2-11.66 11.4s-11.9-4.42-12.31-10.66c-.42-6.51 5.21-11.66 11.62-11.86m.6 19.39a8.46 8.46 0 0 0 8.41-8.26c0-4.44-4-8.15-8.92-8s-8.62 4.1-8.38 8.53a8.47 8.47 0 0 0 8.89 7.73M258.39 137.24a.64.64 0 0 1 .64-.59h1a.63.63 0 0 1 .56.44l.35 1.07a4.77 4.77 0 0 1 3.95-1.72c1.27 0 2.8.4 2.41 1.23l-.86 1.51a.57.57 0 0 1-.8.25 3.74 3.74 0 0 0-1.13-.25 3.5 3.5 0 0 0-3 1.46c-.06 3.18-.09 4.77-.16 8 0 .53-.36.58-.88.57h-1.55a.62.62 0 0 1-.61-.6c.05-4.53.07-6.79.12-11.32M269.56 130a1.89 1.89 0 0 1 2-1.76 1.84 1.84 0 1 1-.17 3.66 1.88 1.88 0 0 1-1.86-1.9m.06 7.52a.64.64 0 0 1 .66-.57l1.91.09a.63.63 0 0 1 .61.62c-.23 4.53-.35 6.79-.57 11.31a.63.63 0 0 1-.65.56l-1.84-.08a.64.64 0 0 1-.59-.62c.19-4.53.28-6.79.47-11.31M277.68 145.58a4.85 4.85 0 0 1-.83-3.09 5.48 5.48 0 0 1 6.1-5.06c2.34.18 3.51.28 5.85.5a.6.6 0 0 1 .58.66c0 .31-.05.46-.08.78s-.18.48-.41.49l-1.87.3a4.09 4.09 0 0 1 1.11 3.46 5.29 5.29 0 0 1-6 4.6 10.13 10.13 0 0 1-2.79-.71 1.75 1.75 0 0 0-1.44 1.44c-.05.71.5 1.31 1.46 1.38l4.39.34c2.81.24 4.92 1.93 4.65 4.63s-3 4.91-7.19 4.58c-4.42-.35-6.08-2.68-6-4.71a3.44 3.44 0 0 1 2.07-2.81.34.34 0 0 1 0-.1 3.26 3.26 0 0 1-2.19-3.27 4.3 4.3 0 0 1 2.53-3.41m3.71 11.74c1.93.15 3.69-.66 3.82-2.16.05-.5-.16-1.81-2.24-2a16.33 16.33 0 0 0-2.82-.16c-.18 0-1.8.44-1.9 1.84s1.21 2.31 3.14 2.46m4-14.14a2.7 2.7 0 0 0-2.54-3.1 2.88 2.88 0 1 0-.45 5.74 2.71 2.71 0 0 0 3-2.64M292.89 131.71a1.88 1.88 0 0 1 2.14-1.63 1.84 1.84 0 1 1-.4 3.64 1.88 1.88 0 0 1-1.74-2m-.41 7.5a.63.63 0 0 1 .69-.52l1.91.21a.63.63 0 0 1 .56.66c-.51 4.5-.77 6.75-1.28 11.25a.62.62 0 0 1-.68.52l-1.83-.2a.63.63 0 0 1-.55-.66c.47-4.5.71-6.75 1.18-11.26M300 140.08a.64.64 0 0 1 .7-.51l1 .12a.53.53 0 0 1 .48.45c.11.44.16.66.26 1.1a7 7 0 0 1 4.89-1.08c4.06.59 5.13 3.51 4.6 6.72l-1 6.2a.63.63 0 0 1-.7.49l-1.83-.28a.62.62 0 0 1-.52-.69c.39-2.53.58-3.8 1-6.33.3-2-.55-3.22-2.27-3.47a4.4 4.4 0 0 0-3.92 1.34c-.41 3-.61 4.54-1 7.57-.05.4-.27.56-.82.49l-1.67-.22a.63.63 0 0 1-.54-.67c.57-4.49.85-6.74 1.42-11.23M320.41 147.32a9.48 9.48 0 0 1 2.51.86c.41-1.93.16-2.78-1.51-3.09a14.83 14.83 0 0 0-3.78-.12c-.41 0-.6-.27-.64-.62s0-.71-.07-1.19a.58.58 0 0 1 .56-.63 14.58 14.58 0 0 1 4.69.12c4.24.8 4.15 3.3 3.53 6.36-.53 2.62-.79 3.92-1.32 6.53a.63.63 0 0 1-.72.47l-.9-.18c-.28-.06-.39-.21-.45-.54s-.1-.53-.16-.89a5.82 5.82 0 0 1-4.23.82 4 4 0 0 1-3.42-4.86c.39-2.25 2.58-3.66 5.91-3m-1.48 5.83a4 4 0 0 0 3.19-1c.15-.78.22-1.18.38-2a5.13 5.13 0 0 0-2.18-.93c-1.56-.29-2.77.29-3 1.55a1.93 1.93 0 0 0 1.61 2.33M332.74 136.14a.64.64 0 0 1 .76-.45l1.93.42a.65.65 0 0 1 .51.73q-2.26 10.09-4.52 20.2a.62.62 0 0 1-.73.45l-1.81-.4a.62.62 0 0 1-.48-.71q2.16-10.12 4.34-20.24M203.28 328.1c.25-.23.51-.5.77-.73a.55.55 0 0 1 .8 0 6.71 6.71 0 0 0 3.27 2.19c1.55.32 2.71-.38 2.91-1.45.24-1.26-.77-2.27-2.76-3.58s-3.55-2.86-3-5.28c.36-1.62 2.13-3.55 5.49-2.87a7.66 7.66 0 0 1 3.7 2 .52.52 0 0 1 0 .74l-.68.7a.55.55 0 0 1-.8.07 6.86 6.86 0 0 0-2.69-1.61c-1.79-.37-2.64.6-2.81 1.38-.25 1.19.54 2.13 2.21 3.2 2.32 1.5 4.31 3 3.85 5.61-.39 2.19-2.82 3.61-5.77 3a7.63 7.63 0 0 1-4.49-2.68c-.16-.21-.29-.42 0-.7M217 319.48a1.23 1.23 0 0 1 1.42-1 1.25 1.25 0 1 1-.4 2.47 1.23 1.23 0 0 1-1-1.43m-.62 5.1a.43.43 0 0 1 .48-.34l1.25.21a.43.43 0 0 1 .35.47c-.49 3.05-.73 4.58-1.22 7.64a.43.43 0 0 1-.49.33l-1.3-.21a.43.43 0 0 1-.36-.47c.51-3.06.77-4.58 1.29-7.63M221.36 325.36a.43.43 0 0 1 .48-.34l.63.09a.35.35 0 0 1 .32.3c.06.3.1.45.16.76a4.72 4.72 0 0 1 3.24-.78c2.69.34 3.48 2.26 3.24 4.47-.19 1.71-.28 2.56-.47 4.27a.44.44 0 0 1-.48.36l-1.3-.15a.43.43 0 0 1-.39-.45c.21-1.75.31-2.62.52-4.36.16-1.36-.44-2.18-1.59-2.32a3 3 0 0 0-2.63.94c-.29 2.07-.43 3.1-.72 5.17 0 .27-.19.38-.58.33l-1.18-.17a.42.42 0 0 1-.37-.47c.45-3.06.67-4.59 1.12-7.65M236.59 326.46a4 4 0 0 1 3.1 1.75.41.41 0 0 1-.13.59l-.78.59c-.28.22-.45 0-.59-.13a2.73 2.73 0 0 0-1.72-.94 2.61 2.61 0 0 0-2.82 2.39 2.59 2.59 0 0 0 2.37 2.87 2.75 2.75 0 0 0 2.19-.82.42.42 0 0 1 .61 0l.58.51c.22.18.29.4.12.6a4.2 4.2 0 0 1-3.67 1.54 4.56 4.56 0 0 1-4.34-4.88 4.7 4.7 0 0 1 5.08-4.07M246 327a4 4 0 0 1 4 4.08c0 .15 0 .43-.06.57a.42.42 0 0 1-.42.36c-2.45-.06-3.68-.1-6.13-.23a2.54 2.54 0 0 0 2.5 2.4 4.06 4.06 0 0 0 2.05-.55c.27-.14.44-.22.61 0l.62.83c.15.18.22.35-.06.56a5.51 5.51 0 0 1-3.43.95 4.36 4.36 0 0 1-4.35-4.7A4.44 4.44 0 0 1 246 327m1.9 3.62a2.1 2.1 0 0 0-2-2 2.24 2.24 0 0 0-2.36 1.8c1.74.09 2.61.12 4.35.18M256.43 335c1.68-1.81 4-4.62 5.57-6.49a5.24 5.24 0 0 0 1.57-3.18 2.4 2.4 0 0 0-2.75-2.25 4.16 4.16 0 0 0-2.74 1.49.41.41 0 0 1-.59 0l-.75-.72a.42.42 0 0 1 0-.56 5.9 5.9 0 0 1 4.16-2.16c3.08-.08 4.81 1.77 4.91 4 .08 1.65-.79 2.82-1.94 4.26s-2.66 3.21-4 4.67c2.33-.05 3.49-.09 5.81-.19a.43.43 0 0 1 .45.39l.05 1a.44.44 0 0 1-.42.43c-3.55.16-5.33.2-8.88.23a.43.43 0 0 1-.44-.4zM268.63 328.3c-.27-4.67 1.5-7.56 4.89-7.84s5.6 2.28 6.1 6.94-1.27 7.68-4.87 8-5.85-2.4-6.12-7.07m8.75-.67c-.34-3.49-1.68-5.38-3.69-5.21s-3.06 2.24-2.82 5.74 1.58 5.45 3.72 5.27 3.13-2.27 2.79-5.8M282.63 327.06c-.55-4.65 1.05-7.64 4.42-8.13s5.74 1.94 6.51 6.56-.8 7.74-4.38 8.26-6-2-6.55-6.69m8.71-1.21c-.55-3.46-2-5.26-4-5s-2.91 2.43-2.47 5.9 1.91 5.35 4 5 3-2.46 2.44-6M299.16 330.45c1-.51 4.39-5.68 4.39-5.68a7.63 7.63 0 0 1-2.77 1.36 4.5 4.5 0 0 1-5.47-3.69 5 5 0 0 1 3.91-5.72c3.37-.68 5.56 1.57 6.28 4.81 1.3 5.81-3.55 9.48-5.47 10.56a.42.42 0 0 1-.61-.15c-.23-.32-.34-.48-.56-.81s-.1-.48.3-.68m4.27-8.3c0-1.65-1.51-4-3.84-3.55a3 3 0 0 0-2.28 3.45 2.9 2.9 0 0 0 3.46 2.31 3.45 3.45 0 0 0 2.66-2.21"
              fill="#70787c"
            ></path>
          </svg>
          <span className="text-white text-3xl font-bold">
            ANNIE'S BURGER SHACK
          </span>
        </div>
        <div className="w-[35%] h-full bg-[#00080D] bg-opacity-50 border-r-2 border-dashed border-[#A9A9A9] p-4 flex items-center text-center">
          <span className="text-white text-lg">
            Annie's Burger Shack dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore.
          </span>
        </div>
        <div className="w-[20%] inset-0 bg-[#00080D] bg-opacity-75 h-full p-4 flex flex-col items-center justify-center">
          <span className="text-white text-2xl font-bold">RANK: 2000</span>
          <button className="flex items-center justify-between bg-[#43A9F5] text-white px-4 rounded-full">
            <span className="py-1 pr-2">View website</span>
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
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-4 p-4">
        <div className="flex justify-between items-center p-4">
          <span className="text-white text-2xl font-bold">
            Coupons and offers
          </span>
          <button className="flex items-center justify-between bg-[#43A9F5] text-white px-4 rounded-full">
            <span className="py-1 pr-2">Overview</span>
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
        </div>
        <div className="w-full h-full border border-solid border-[#2F2F2F] rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div key={index}>
                <div className="border border-white rounded-2xl bg-[#232F3E] p-4">
                  <p className="text-white text-xl font-bold mb-3">
                    10% Off All Burgers & Meals
                  </p>
                  <div className="flex justify-end items-center gap-3">
                    <span className="text-white">Cost: 20sch |</span>
                    <button
                      className="flex items-center justify-between bg-[#43A9F5] text-white px-4 rounded-full"
                      onClick={showModal}
                    >
                      <span className="py-1 pr-2">Unlock coupon</span>
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
                          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="text-end">
                  <span className="text-white text-sm">
                    Coupon terms and conditions
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCoupons;
