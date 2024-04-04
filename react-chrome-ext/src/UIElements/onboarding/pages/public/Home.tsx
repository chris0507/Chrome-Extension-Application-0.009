import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RightSidebar from "../../components/public/RightSidebar";
import BlocksGrid from "../../components/public/BlocksGrid";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [popupId, setPopupId] = useState(0);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsMenuOpen(false);
    navigate("/");
  };

  const openPopup = () => {
    chrome.windows.create(
      {
        url: "index.html",
        type: "popup",
        focused: true,
        width: 418,
        height: 500,
        top: 0,
        left: screen.width - 400,
      },
      (window) => {
        setPopupId(window?.id || 0);
      }
    );
  };

  const handleAddURLs = () => {
    setIsMenuOpen(!isMenuOpen);
    if (popupId) {
      chrome.windows.remove(popupId);
      openPopup();
    } else openPopup();
  };

  const menuItems = [
    { title: "Dashboard" },
    { title: "Coupons" },
    { title: "High Street" },
    { title: "My Account" },
    { title: "Sign out", action: handleSignOut },
    { title: "Add URLs", action: handleAddURLs },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex relative">
      <div className="bg-[#1A1A1A] p-5">
        <div
          className="cursor-pointer focus:outline-none focus:ring focus:ring-violet-100"
          onClick={toggleMenu}
        >
          <div className="w-4 h-px bg-white my-1"></div>
          <div className="w-4 h-px bg-white my-1"></div>
          <div className="w-4 h-px bg-white my-1"></div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#00080D] bg-opacity-75 z-20 flex justify-center items-center">
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 bg-transparent text-white text-xl font-semibold"
          >
            &times;
          </button>

          <div className="text-center">
            {menuItems.map((menuItem, index) => (
              <div
                key={index}
                className="my-2 text-white font-bold text-xl cursor-pointer"
                onClick={menuItem.action || (() => {})}
              >
                {menuItem.title}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="h-screen p-5 bg-[#1D3D4A] rounded-lg">
        <BlocksGrid />
      </div>
      <RightSidebar />
    </div>
  );
};

export default Home;
