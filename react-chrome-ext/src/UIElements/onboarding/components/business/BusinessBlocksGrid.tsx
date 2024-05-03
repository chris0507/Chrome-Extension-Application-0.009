import React, { useState, useEffect, useRef } from "react";
import { range } from "lodash";

import axios from "axios";

interface TooltipProps {
  show: boolean;
  content: React.ReactNode;
  x: number;
  y: number;
  row: number | null;
  col: number | null;
}

const getBackgroundColor = (row: number, col: number): string => {
  return (row + col) % 2 === 0
    ? "bg-white border-[#922981]"
    : "bg-[#91257D] border-[#A03B7F]";
};

const BusinessBlocksGrid = () => {
  const icons = [
    {
      row: 0,
      col: 1,
      image: "./images/annie1.png",
      key: "amazon",
    },
    {
      row: 0,
      col: 7,
      image: "./images/annie1.png",
      key: "google",
    },
    {
      row: 2,
      col: 3,
      image: "./images/annie1.png",
      key: "footlocker",
    },
    {
      row: 3,
      col: 2,
      image: "./images/annie1.png",
      key: "ebay",
    },
    {
      row: 3,
      col: 4,
      image: "./images/annie1.png",
      key: "ebay",
    },
    {
      row: 5,
      col: 1,
      image: "./images/annie1.png",
      key: "ebay",
    },
    {
      row: 7,
      col: 0,
      image: "./images/annie1.png",
      key: "ebay",
    },
  ];
  const BlockContainer = useRef<HTMLDivElement>(null);

  const [blockSize, setBlockSize] = useState(0);
  const [tooltip, setTooltip] = useState<TooltipProps>({
    show: false,
    content: "",
    x: 0,
    y: 0,
    row: null,
    col: null,
  });
  const [inputValue, setInputValue] = useState("");
  const [userLogo, setUserLogo] = useState<string>("");
  const tooltipRef = useRef<HTMLDivElement>(null);

  const checkIcons = (row: number, col: number) => {
    for (let icon of icons) {
      if (icon.row == row && icon.col == col) {
        return icon;
      }
    }
    return null;
  };
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  const getUserDetails = async () => {
    //get token from local storage
    const token = localStorage.getItem("token");
    //send it to backend to get user logo using axios
    await axios.post(`${API_BASE_URL}getUserDetails`, { token }).then((res) => {
      console.log(res.data);
      setUserLogo(res.data.data.logo);
      //set icons to the response
    });
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleClick = (row: number, col: number, e: React.MouseEvent) => {
    const icon = checkIcons(row, col);
    if (icon) {
      setTooltip({
        show: true,
        content: (
          <div className="p-3 bg-[#333333] rounded-md flex flex-col  w-[400px]">
            <div>
              <p className="text-white mb-2">
                <span className="font-bold text-base">8%</span> market share |
                users <span className="font-bold text-base">80</span> | clicks{" "}
                <span className="font-bold text-base">170</span>
              </p>
            </div>
            <div
              className="rou
            nded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% h-full px-2 py-1 flex justify-between items-center mb-2"
            >
              <div className="flex justify-center items-center gap-1">
                <span className="text-white">Retarget</span>
                <input
                  type="number"
                  className="w-[50px] h-[30px] rounded-lg px-1"
                  min="0"
                  value={160}
                ></input>
                <span className="text-white">sch |</span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <span className="text-white">Days </span>
                <input
                  type="number"
                  className="w-[50px] h-[30px] rounded-lg px-1"
                  min="0"
                  value={7}
                ></input>
              </div>
              <div className="text-white">
                Weight: <span className=" text-base font-bold">2</span>sch | per
                user
              </div>
            </div>
            <div className="flex justify-end">
              <button className="flex items-center justify-between bg-[#91257D] text-white px-4 rounded-full">
                <span className="py-1 pr-2 text-white">Start campaign</span>
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
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ),
        x: e.clientX,
        y: e.clientY,
        row,
        col,
      });
    } else {
      setTooltip({
        show: true,
        content: (
          <div className="p-1 bg-[#333333] rounded">
            <input
              type="text"
              className="bg-[#333333] text-white p-1"
              value={inputValue}
              onChange={handleInput}
              placeholder="Add URL here..."
            />
            <button onClick={() => handleAdd(row, col)}></button>
          </div>
        ),
        x: e.clientX,
        y: e.clientY,
        row,
        col,
      });
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAdd = (row: number, col: number) => {};

  const handleDelete = (row: number, col: number) => {};

  useEffect(() => {
    const updateBlockSize = () => {
      if (BlockContainer.current) {
        if (BlockContainer.current.clientWidth < window.innerHeight) {
          const size = Math.floor(
            (BlockContainer.current.clientWidth - 4 * 7 - 40) / 8
          );
          setBlockSize(size);
        } else {
          const size = Math.floor((window.innerHeight - 4 * 7 - 140) / 8);
          setBlockSize(size);
        }
      }
    };

    window.addEventListener("resize", updateBlockSize);
    updateBlockSize();

    function handleClickOutside(event: any) {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setTooltip((prevTooltip) => ({ ...prevTooltip, show: false }));
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("resize", updateBlockSize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`flex-auto w-full flex  h-fit xl:h-screen justify-center items-center flex-col `}
      ref={BlockContainer}
    >
      <div className="w-fit   p-5 bg-[#381C33] rounded-lg flex flex-row">
        <div className="text-white text-[10px] w-5 grid pb-5 grid-rows-8 gap-[5px]">
          <div className="flex items-center">5%</div>
          <div className="flex items-center">0%</div>
          <div className="flex items-center">6%</div>
          <div className="flex items-center">15%</div>
          <div className="flex items-center">0%</div>
          <div className="flex items-center">8%</div>
          <div className="flex items-center">3%</div>
          <div className="flex items-center">1%</div>
        </div>
        <div className="flex flex-col">
        <div className="grid grid-cols-8 gap-[5px]">
          {range(8).map((row) =>
            range(8).map((col) => {
              const icon = checkIcons(row, col);
              const blockClasses = `border-2 flex items-center rounded-lg cursor-pointer ${getBackgroundColor(
                row,
                col
              )}`;

              if (icon) {
                return (
                  <div
                    key={`${row}-${col}`}
                    className={`${blockClasses} hover:bg-[#FFF200] hover:border-[#F9AA16]`}
                    style={{
                      width: `${blockSize}px`,
                      height: `${blockSize}px`,
                    }} // Set both width and height to blockSize
                    onClick={(e) => handleClick(row, col, e)}
                  >
                    {icon && (
                      <img
                        src={`${API_BASE_URL}${userLogo}`}
                        alt={icon.key}
                        className="rounded"
                      />
                    )}
                  </div>
                );
              } else
                return (
                  <div
                    key={`${row}-${col}`}
                    className={blockClasses}
                    style={{
                      width: `${blockSize}px`,
                      height: `${blockSize}px`,
                    }} // Set both width and height to blockSize
                    onClick={(e) => handleClick(row, col, e)}
                  />
                );
            })
          )}
          {tooltip.show && (
            <div
              ref={tooltipRef}
              className="tooltip z-50"
              style={{ position: "fixed", top: tooltip.y, left: tooltip.x }}
            >
              {tooltip.content}
            </div>
          )}
        </div>
        <div className="w-full h-5 grid text-[10px] grid-cols-8 text-white">
          <div className="flex justify-center">1%</div>
          <div className="flex justify-center">20%</div>
          <div className="flex justify-center">7%</div>
          <div className="flex justify-center">22%</div>
          <div className="flex justify-center">9%</div>
          <div className="flex justify-center">0%</div>
          <div className="flex justify-center">0%</div>
          <div className="flex justify-center">4%</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBlocksGrid;
