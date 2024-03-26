import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RightSidebar from "../../components/public/RightSidebar";
import BusinessBlocksGrid from "../../components/business/BusinessBlocksGrid";

const BusinessHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popupId, setPopupId] = useState(0);
  const navigate = useNavigate();

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

  // Define the menu items
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
        <div className="cursor-pointer" onClick={toggleMenu}>
          <div className="w-4 h-px bg-white my-1"></div>
          <div className="w-4 h-px bg-white my-1"></div>
          <div className="w-4 h-px bg-white my-1"></div>
        </div>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#00080D] bg-opacity-75 z-20 flex justify-center items-center">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 bg-transparent text-white text-xl font-semibold"
          >
            &times;
          </button>

          {/* Menu Items Container */}
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

      {/* Main Content */}
      <div className="h-screen p-5 bg-[#381C33] rounded-lg">
        <BusinessBlocksGrid />
      </div>
      <RightSidebar />
    </div>
  );
};

export default BusinessHome;
