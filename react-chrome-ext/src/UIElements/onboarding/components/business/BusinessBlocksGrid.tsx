import React, { useState, useEffect, useRef } from "react";
import { range } from "lodash";

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
      row: 5,
      col: 4,
      image:
        "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png",
      key: "amazon",
    },
    {
      row: 5,
      col: 3,
      image:
        "https://banner2.cleanpng.com/20201008/rtv/transparent-google-suite-icon-google-icon-5f7f985ccd60e3.5687494416021975968412.jpg",
      key: "google",
    },
    {
      row: 3,
      col: 2,
      image: "https://cdn.worldvectorlogo.com/logos/foot-locker-logo-2.svg",
      key: "footlocker",
    },
    {
      row: 5,
      col: 5,
      image:
        "https://static-00.iconduck.com/assets.00/ebay-icon-512x512-mnrjx0zm.png",
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
  const tooltipRef = useRef<HTMLDivElement>(null);

  const checkIcons = (row: number, col: number) => {
    for (let icon of icons) {
      if (icon.row == row && icon.col == col) {
        return icon;
      }
    }
    return null;
  };

  const handleClick = (row: number, col: number, e: React.MouseEvent) => {
    const icon = checkIcons(row, col);
    if (icon) {
      setTooltip({
        show: true,
        content: (
          <div className="p-3 bg-[#333333] rounded-md flex flex-col  w-[400px]">
            <div>
              <p className="text-white mb-2">
                <span className="font-bold">8%</span> market share | users{" "}
                <span className="font-bold">80</span> | clicks{" "}
                <span className="font-bold">170</span>
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-b from-[#797A7D] to-[#000000] to-35% h-full px-2 py-1 flex justify-between items-center mb-2">
              <div className="flex justify-center items-center gap-1">
                <span className="text-white">Retarget</span>
                <input
                  type="number"
                  className="w-[50px] h-[30px] rounded-lg pr-[0]"
                  min="0"
                ></input>
                <span className="text-white">sch |</span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <span className="text-white">Days </span>
                <input
                  type="number"
                  className="w-[50px] h-[30px] rounded-lg pr-[0]"
                  min="0"
                ></input>
              </div>
              <span className="text-white">Weight: 2sch | per user</span>
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

  const handleAdd = (row: number, col: number) => {
  };

  const handleDelete = (row: number, col: number) => {
  };

  useEffect(() => {
    const updateBlockSize = () => {
      if (BlockContainer.current) {
        const size = Math.floor(
          (BlockContainer.current.clientWidth - 4 * 7 - 40) / 8
        );
        setBlockSize(size);
      }
    };

    window.addEventListener("resize", updateBlockSize);
    updateBlockSize(); 

    function handleClickOutside(event:any) {
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
    <div className="grid grid-cols-8 gap-[5px]" ref={BlockContainer}>
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
                className={blockClasses}
                style={{ width: `${blockSize}px`, height: `${blockSize}px` }} // Set both width and height to blockSize
                onClick={(e) => handleClick(row, col, e)}
              >
                {icon && (
                  <img src={icon.image} alt={icon.key} className="rounded" />
                )}
              </div>
            );
          } else
            return (
              <div
                key={`${row}-${col}`}
                className={blockClasses}
                style={{ width: `${blockSize}px`, height: `${blockSize}px` }} // Set both width and height to blockSize
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
  );
};

export default BusinessBlocksGrid;
