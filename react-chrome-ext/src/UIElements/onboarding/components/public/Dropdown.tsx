import React, { useState, useRef, useEffect } from "react";
import { ChevronUpIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import mainMenus from "../EthnicityCategory";
import { useLocation } from "react-router-dom";

type MainMenuKey = keyof typeof mainMenus;

type DropdownProps = {
  onSelect: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ onSelect }) => {
  const [mainMenuSelected, setMainMenuSelected] = useState<MainMenuKey>("");
  const [subMenuSelected, setSubMenuSelected] = useState<string>("");
  const [customOther, setCustomOther] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleOtherInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomOther(event.target.value);
    setSubMenuSelected(event.target.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Convert the anonymous function to an arrow function with correct typing
    const handleMouseDown = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  useEffect(() => {
    onSelect(subMenuSelected);
  }, [subMenuSelected, onSelect]);

  return (
    <div
      className={`relative inline-block text-left ${
        location.pathname === "/business" ? "bg-[#932580]" : "bg-[#3FA9F5]"
      } text-sm rounded focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 placeholder-gray-400 text-white`}
      ref={dropdownRef}
    >
      <button
        onClick={(e: any) => {
          e.preventDefault();
          setDropdownOpen((prev) => !prev);
        }}
        className="inline-flex justify-between items-center w-full text-white"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {subMenuSelected || "Ethnicity"}
        <ChevronUpIcon
          className={`w-3 h-3 ${dropdownOpen ? "" : "transform rotate-180"}`}
        />
      </button>

      {/* Dropdown Panel */}
      {dropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="flex flex-col">
            {Object.keys(mainMenus).map((key) => {
              // Main menu button with a right arrow icon
              return (
                <div key={key} className="flex flex-col">
                  <button
                    onClick={(e: any) => {
                      e.preventDefault();
                      setMainMenuSelected(key as MainMenuKey);
                    }}
                    className={`flex justify-between items-center w-full text-gray-700 px-2.5 py-2 text-sm text-left
                    focus:outline-none hover:bg-[#b9d7ec] ${
                      mainMenuSelected === key ? "bg-gray-100" : ""
                    }`}
                  >
                    {key}
                    <ChevronRightIcon className="w-3 h-3" />
                  </button>
                  {/* Submenu that expands to the right */}
                  {mainMenuSelected === key && (
                    <div className="ml-4 relative">
                      <div className="absolute left-full top-0 w-56 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        {mainMenus[key].map((subMenuOption) => (
                          <button
                            key={subMenuOption}
                            onClick={(e: any) => {
                              e.preventDefault();
                              setSubMenuSelected(subMenuOption);
                              setDropdownOpen(false);
                            }}
                            className={`text-gray-700 block px-4 py-2 text-sm w-full text-left focus:outline-none hover:bg-[#b9d7ec] ${
                              subMenuSelected === subMenuOption
                                ? "bg-gray-100"
                                : ""
                            }`}
                          >
                            {subMenuOption}
                          </button>
                        ))}
                        <input
                          type="text"
                          placeholder="Other"
                          value={customOther}
                          onChange={handleOtherInputChange}
                          className="block w-full px-4 py-2 text-sm text-gray-700"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
