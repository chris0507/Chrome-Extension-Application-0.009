import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    ? "bg-white border-[#24A9EB]"
    : "bg-[#2BAAE1] border-[#0070B7]";
};

const BlocksGrid = () => {
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
  const navigate = useNavigate();

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
      navigate("/explore-coupons");
      setTooltip({
        show: true,
        content: (
          <div className="p-1 bg-[#333333] rounded flex justify-between items-center w-[150px]">
            <p className="text-white">{icon.key}</p>
            <button onClick={() => handleDelete(row, col)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                style={{ fill: "#FFFFFF" }}
              >
                <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
              </svg>
            </button>
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
    // Add the image at the input URL to the block at the specified row and col
    // This will depend on how your checkIcons and setIcons functions are implemented
  };

  const handleDelete = (row: number, col: number) => {
    // Delete the image from the block at the specified row and col
    // This will depend on how your checkIcons and setIcons functions are implemented
  };

  useEffect(() => {
    // Calculate block size
    const updateBlockSize = () => {
      // Since we want to fit 8 blocks in the height, each block should take up 1/8 of the available viewport height minus the gaps
      const size = Math.floor((window.innerHeight - 7 * 5 - 40) / 8); // For 7 gaps of 5px each
      console.log(size);
      setBlockSize(size);
    };

    // Update blockSize on mount and when window resizes
    window.addEventListener("resize", updateBlockSize);
    updateBlockSize(); // Initial calculation

    return () => {
      window.removeEventListener("resize", updateBlockSize);
    };
  }, []);

  return (
    <div className="grid grid-cols-8 gap-[5px]">
      {range(8).map((row) =>
        range(8).map((col) => {
          const icon = checkIcons(row, col);
          const blockClasses = `border-2 rounded-lg cursor-pointer ${getBackgroundColor(
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
                {icon && <img src={icon.image} alt={icon.key} />}
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
          className="tooltip"
          style={{ position: "fixed", top: tooltip.y, left: tooltip.x }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
};

export default BlocksGrid;
