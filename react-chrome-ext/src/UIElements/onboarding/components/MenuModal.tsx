import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuModalProps {
  userType: string;
}

const MenuModal: React.FC<MenuModalProps> = ({ userType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popupId, setPopupId] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

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
        width: 422,
        height: 700,
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
    {
      title: "Dashboard",
      action:
        userType === "public"
          ? () => navigate("/home")
          : () => navigate("/business-home"),
    },
    {
      title: "Coupons",
      action:
        userType === "public"
          ? () => navigate("/coupons")
          : () => navigate("/manage-coupons"),
    },
    {
      title: "High Street",
      action:
        userType === "public"
          ? () => navigate("/high-street")
          : () => navigate("/high-street"),
    },
    {
      title: "My Account",
      action:
        userType === "public"
          ? () => navigate("/public-account")
          : () => navigate("/business-account"),
    },
    { title: "Sign out", action: handleSignOut },
    { title: "Add URLs", action: handleAddURLs },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <div className="bg-[#1A1A1A] py-5 pr-5">
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
        <div className="fixed inset-0 bg-[#00080D] bg-opacity-75 z-20 flex justify-center flex-col items-center">
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
                className="my-4 text-white text-xl cursor-pointer"
                onClick={menuItem.action || (() => {})}
              >
                {menuItem.title}
              </div>
            ))}
          </div>
          <div className="text-white text-base relative top-[25vh]" >
            Privacy | Terms and Conditions | @ Advertising Box 2024
          </div>
        </div>
      )}
    </>
  );
};

export default MenuModal;
