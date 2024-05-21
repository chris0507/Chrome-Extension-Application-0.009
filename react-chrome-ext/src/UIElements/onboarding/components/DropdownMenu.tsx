import React, { useState, useEffect, useRef } from "react";

const DropdownMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-[#34AAFF] px-4 py-2 text-sm font-semibold text-white shadow-sm"
          id="menu-button"
          aria-expanded={menuOpen ? "true" : "false"}
          aria-haspopup="true"
          onClick={toggleMenu}
        >
          Popular
          <svg
            className="w-5 h-5 -mr-1 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          className="absolute z-10 w-56 mt-2 transition-all origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <div
              className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-300"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
              onClick={() => setMenuOpen(false)}
            >
              Ethnicity
            </div>
            <div
              className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-300"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
              onClick={() => setMenuOpen(false)}
            >
              City
            </div>
            <div
              className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-300"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
              onClick={() => setMenuOpen(false)}
            >
              Country
            </div>
            <div
              className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-300"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
              onClick={() => setMenuOpen(false)}
            >
              International
            </div>
            
            
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
